console.log('js running...');
let currentSong = new Audio;
let songs;
let currFolder;

//milisecond to minutes : seconds
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return `00:00`
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formatedMinutes = String(minutes).padStart(2, 0);
    const formatedSeconds = String(remainingSeconds).padStart(2, 0);

    return `${formatedMinutes}:${formatedSeconds}`;
}

//getting songs from dir.
async function getSongs(folder) {
    currFolder = `songs/${folder}`;
    let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [] //all songs pushed in array

    for (let i = 0; i < as.length; i++) {
        const ele = as[i];
        if (ele.href.endsWith(".mp3")) {
            songs.push(ele.href.split(`/${folder}/`)[1]);
        }
    }

    //show all the songs in playlist
    let songUl = document.querySelector("#playlist").getElementsByTagName("ul")[0]
    songUl.innerHTML = ""
    songs.forEach((song) => {
        songUl.innerHTML += `<li>
                                <div class="music-data" >
                                    <img src="assests/music.svg" alt="music">
                                    <div class="music-info">
                                        <div class="music-name">${song.replaceAll("-", " ")}</div>
                                        <div class="singer-name">Aksay Solanki</div>
                                    </div>
                                </div>
                                <img class="play-now" src="assests/playNow.svg" alt="play now"> 
                            </li>`
    })

    // attech the an event listener to each song
    Array.from(document.querySelector("#playlist").getElementsByTagName("li")).forEach((e) => {
        e.querySelector(".play-now").addEventListener("click", () => {
            console.log(e.querySelector(".music-name").innerHTML);
            playMusic(e.querySelector(".music-name").innerHTML.replaceAll(" ", "-"), false)
        })
    })
}

const playMusic = (track, pause = false) => {
    currentSong.src = `${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        play.src = "assests/pause.svg";
    }
    document.querySelector("#song-info").innerHTML = track.replaceAll("-", " ");
}

//display the all albums
async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let albumsContainer = document.querySelector(".albumsContainer")
    let anchorsArray = Array.from(anchors)
    for (let index = 0; index < anchorsArray.length; index++) {
        const e = anchorsArray[index];
        if (e.href.includes("/songs")) {
            let folder = e.href.split("/")[4]; 

            //get the meta data of every folder
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
            let response = await a.json(); 
            albumsContainer.innerHTML += `<div data-folder="${folder}" class="album">
                                            <div class="image">
                                                <img src="songs/${folder}/cover.jpeg" alt="image">
                                                <div class="play">
                                                    <img src="assests/play.svg" alt="play">
                                                </div>
                                            </div>
                                            <div class="art-name">
                                                <a href="#">${response.title}</a>
                                                <p>${response.description}</p>
                                            </div> 
                                        </div>`;
        }
    }
}

async function main() {
    await getSongs("Hindi")
    playMusic(songs[0], true);

    //attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "assests/pause.svg";
        } else {
            currentSong.pause();
            play.src = "assests/play.svg";
        }
    })

    //listener timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector("#song-duration").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    //add listener to sheekbar
    document.querySelector(".thick").addEventListener("click", (e) => {
        let durationPercent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = durationPercent + "%";
        currentSong.currentTime = ((currentSong.duration) * durationPercent) / 100;
    })

    // add listener to humburger
    document.querySelector(".humburger").addEventListener("click", () => {
        document.querySelector(".main-left").style.left = "8px";
    })
    // add listener to cross
    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".main-left").style.left = "-400px";
    })

    //listen to previousPlay btn
    previous.addEventListener("click", () => {
        let idx = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((idx - 1) >= 0) {
            playMusic(songs[idx - 1], false);
        }
    })
    //listen to next play btn
    next.addEventListener("click", () => {
        let idx = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((idx + 1) < songs.length) {
            playMusic(songs[idx + 1], false);
        }
    })

    //listen to volume range
    document.querySelector("#volumeInfo").getElementsByTagName("input")[0]
    .addEventListener("change", (v) => {
        currentSong.volume = parseInt(v.target.value) / 100;
        if(currentSong.volume > 0){
            document.querySelector("#volumeInfo>img").src = document.querySelector("#volumeInfo>img").src.replace("mute.svg", "volumes.svg");
        }
    })

    await displayAlbums();

    //load library whenever click on albums & cards
    Array.from(document.getElementsByClassName("album")).forEach(e => {
        e.addEventListener("click", async card => {
            await getSongs(`${card.currentTarget.dataset.folder}`)
            playMusic(songs[0], false)
        })
    })

    //listen to mute button
    document.querySelector("#volumeInfo>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volumes.svg")){
            e.target.src = e.target.src.replace("volumes.svg", "mute.svg");
            currentSong.volume = 0;
            document.querySelector("#volumeInfo").getElementsByTagName("input")[0].value = 0;
        } else {
            e.target.src = e.target.src.replace("mute.svg", "volumes.svg");
            currentSong.volume = .20;
            document.querySelector("#volumeInfo").getElementsByTagName("input")[0].value = 20;
        }
    })

}
main() 