# Spotify Clone - Music Player 🎵🎶

A fully functional **Music Player** web application inspired by Spotify. This project is built using **HTML**, **CSS**, and **JavaScript**, and it allows users to explore, play, and manage music seamlessly with a sleek and responsive user interface.

## Features 🚀

- **Responsive Design**: 
  Adapts to different screen sizes for an intuitive user experience.

- **Dynamic Music Library**:
  Fetches and displays songs from a folder dynamically using JavaScript and APIs.

- **Popular Albums Section**:
  Displays albums with cover images, titles, and descriptions fetched from metadata.

- **Music Playback Controls**:
  Includes play, pause, next, previous, and volume control features.

- **Interactive Seek Bar**:
  Navigate through the song's timeline with a draggable seek bar.

- **Dynamic Playlist**:
  Automatically generates a playlist from the loaded album with click-to-play functionality.

- **Volume Control**:
  Adjust volume with a range slider and mute/unmute button.

- **Sidebar Navigation**:
  Hamburger menu for toggling the left sidebar to access the library and playlists.

- **Album Switching**:
  Dynamically load and play songs from different albums.

- **Accessibility Features**:
  Includes links to legal, safety, and privacy information.

## Technologies Used 🛠️

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the interface, including responsive design.
- **JavaScript**: For dynamic content loading, API interaction, and media player functionality.
- **JSON**: To store and retrieve metadata for albums (title and description).

## How to Use 📖

### Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/Ms-Solanki-07/Music-Player-Spotify-Clone.git
   ```

3. Navigate to the project directory:

   ```bash
   cd Music-Player-Spotify-Clone
   ```

4. Open the `index.html` file in your browser.

   ```bash
   start index.html
   ```

### Adding Songs and Metadata 🎶

1. Place your songs in the `songs/` folder.
   - Create a subfolder for each album (e.g., `songs/Hindi`).
   - Add your `.mp3` files into the corresponding album folder.

2. Add a `cover.jpeg` file to the album folder for the album's cover image.

3. Create an `info.json` file in the album folder with the following structure:

   ```json
   {
       "title": "Album Title",
       "description": "Description of the album or songs."
   }
   ```

### Running the Application

1. Open the `index.html` file in any modern web browser.
2. Browse the albums and select songs to play.
3. Use the playback controls to play, pause, or navigate through songs.

## Folder Structure 📂

```
spotify-clone/
├── index.html         # Main HTML file
├── style.css          # CSS for styling the web app
├── script.js          # JavaScript for functionality
├── songs/             # Folder containing albums and songs
│   ├── Hindi/         # Example album folder
│   │   ├── song1.mp3
│   │   ├── song2.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
├── assets/            # Folder for images and icons
│   ├── logo.svg
│   ├── play.svg
│   ├── pause.svg
│   ├── nextPlay.svg
│   ├── volumes.svg
│   └── ...
└── README.md          # Documentation
```

## Methods and Implementation 🔧

- **Dynamic Song Loading**:
  - Fetches songs and metadata using JavaScript `fetch()`.
  - Generates playlists dynamically based on the content of the selected folder.

- **Playback Control**:
  - Utilizes the HTML5 `<audio>` element for playing music.
  - Updates UI components (e.g., play button, seek bar) in real-time using JavaScript events like `timeupdate`.

- **Event Handling**:
  - Listens for user interactions such as clicks on the play button, next/previous controls, and volume adjustments.

- **Responsive Design**:
  - Achieved using CSS Flexbox and Grid for layout management.

## Contributing 🤝

Contributions are welcome! If you have suggestions for improvements or want to add new features, feel free to open an issue or submit a pull request.
 
## 🎉 Follow us <a name = "follow-us"></a>
Stay connected and get the latest updates:
- LinkedIn: https://www.linkedin.com/in/ms-solanki-07-ms/
- Twitter: https://x.com/Ms_Solanki_07
- GitHub: https://github.com/Ms-Solanki-07
- Instagram: https://www.instagram.com/ms_solanki_07


Feel free to explore, customize, and enhance this project. Enjoy your personalized music experience! 🎉
