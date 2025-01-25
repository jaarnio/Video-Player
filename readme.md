# Fullscreen Video Player with Dual Playback Modes

This project is a fullscreen HTML video player designed to switch seamlessly between two playback modes: a default looping playlist and user-triggered single-play videos. The application is built using vanilla HTML, CSS, and JavaScript, focusing on simplicity, maintainability, and ease of modification.

## Features

1. **Default Playback Mode**:

   - Plays a predefined list of videos (`default-video1.mp4`, `default-video2.mp4`, etc.) in an endless loop.
   - Automatically transitions to the next video in the playlist when one ends.

2. **User Playback Mode**:

   - Triggered by pressing specific keys (`a`, `s`, or `d`).
   - Each key corresponds to a unique video (`user-video1.mp4`, `user-video2.mp4`, or `user-video3.mp4`).
   - Plays the selected video once and then returns to the exact point in the default playlist where it left off.

3. **State and Timecode Management**:

   - Tracks the current video and timecode in the default playlist.
   - Resumes the playlist seamlessly after a user video finishes.

4. **Responsive Fullscreen Design**:

   - The video player is centered on a 1920x1080px page with zero margins for a clean, immersive experience.

5. **Ample Logging**:
   - Console logs for mode transitions, video changes, and key events for easy debugging and understanding of the application's flow.

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/fullscreen-video-player.git
   cd fullscreen-video-player
   ```
