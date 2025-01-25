// Video configuration
const videoConfig = {
  defaultVideos: ["default-video1.mp4", "default-video2.mp4", "default-video3.mp4"],
  userVideos: {
    a: "user-video1.mp4",
    s: "user-video2.mp4",
    d: "user-video3.mp4",
  },
};

let currentDefaultIndex = 0; // Current index in the default video list
let currentDefaultTime = 0; // Timecode in the current default video
let isUserMode = false; // Tracks whether we're in "user" mode

const videoPlayer = document.getElementById("videoPlayer");

// Function to start default mode
function startDefaultMode() {
  isUserMode = false;
  videoPlayer.src = videoConfig.defaultVideos[currentDefaultIndex];
  videoPlayer.currentTime = currentDefaultTime;
  videoPlayer.loop = false; // Loop handled manually for precise tracking
  videoPlayer.play();
  console.log(`Entering default mode. Playing: ${videoPlayer.src}`);
}

// Function to handle the end of a default video
function handleDefaultEnd() {
  currentDefaultIndex = (currentDefaultIndex + 1) % videoConfig.defaultVideos.length;
  currentDefaultTime = 0; // Reset time for next video
  startDefaultMode();
}

// Function to handle user mode
function startUserMode(userVideo) {
  isUserMode = true;
  currentDefaultTime = videoPlayer.currentTime; // Save current timecode
  videoPlayer.src = userVideo;
  videoPlayer.loop = false; // Play user video once
  videoPlayer.play();
  console.log(`Switching to user mode. Playing: ${userVideo}`);
}

// Event listener for key presses
document.addEventListener("keydown", (event) => {
  if (isUserMode) return; // Ignore key presses during user mode

  const userVideo = videoConfig.userVideos[event.key];
  if (userVideo) {
    console.log(`Key pressed: ${event.key}. Switching to user mode.`);
    startUserMode(userVideo);
  }
});

// Event listener for video end
videoPlayer.addEventListener("ended", () => {
  if (isUserMode) {
    console.log("User video ended. Returning to default mode.");
    startDefaultMode();
  } else {
    console.log("Default video ended. Playing next default video.");
    handleDefaultEnd();
  }
});

// Initialize default mode on page load
startDefaultMode();
