window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "dd9d7dbb-9c75-4f7a-b89a-821e4c3a0633",
    safari_web_id: "web.onesignal.auto.5ecc7e9f-2540-4c26-bcd6-80ea5ac40604",
    notifyButton: {
      enable: true,
    },
  });
});

const audio = document.querySelector("#audioPlayer");
        const timeDisplay = document.querySelector("#timeDisplay");
      
        audio.addEventListener("timeupdate", function() {
          const currentTime = audio.currentTime;
          const duration = audio.duration;
          const currentMinutes = Math.floor(currentTime / 60);
          const currentSeconds = Math.floor(currentTime % 60);
          const durationMinutes = Math.floor(duration / 60);
          const durationSeconds = Math.floor(duration % 60);
          timeDisplay.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")} / ${durationMinutes}:${durationSeconds.toString().padStart(2, "0")}`;
        });

        (function() {
          const audioPlayer = document.getElementById("audioPlayer");
          const durationSlider = document.getElementById("durationSlider");
        
          audioPlayer.addEventListener("loadedmetadata", function() {
            durationSlider.max = audioPlayer.duration;
          });
        
          audioPlayer.addEventListener("timeupdate", function() {
            durationSlider.value = audioPlayer.currentTime;
          });
        
          durationSlider.addEventListener("input", function() {
            audioPlayer.currentTime = durationSlider.value;
          });
        })();

 // Get references to the audio player, buttons, and song selector
 const audioPlayer = document.getElementById("audioPlayer");
 const playButton = document.getElementById("playButton");
 const pauseButton = document.getElementById("pauseButton");
 const stopButton = document.getElementById("stopButton");
 const songSelector = document.getElementById("songSelector");

 // Play the audio when the play button is clicked
 playButton.addEventListener("click", function() {
   audioPlayer.play();
 });

 // Pause the audio when the pause button is clicked
 pauseButton.addEventListener("click", function() {
   audioPlayer.pause();
 });

 // Stop the audio and reset the time when the stop button is clicked
 stopButton.addEventListener("click", function() {
   audioPlayer.pause();
   audioPlayer.currentTime = 0;
 });

 // Change the song when a different option is selected in the song selector
 songSelector.addEventListener("change", function() {
   audioPlayer.src = this.value;
   audioPlayer.pause();
   audioPlayer.currentTime = 0;
 });
// Get the loading-element and all-container elements on your page
var loading = document.getElementById("loading-element");
var allContainer = document.getElementById("all-container");

// Hide the loading-element element after 5 seconds
setTimeout(function() {
loading.style.display = "none";
allContainer.style.display = "block";
}, 5000);

// Hide the all-container element on startup
allContainer.style.display = "none";

// Get the select element
// Get the select element
var select = document.getElementById("songSelector");

// Update the selected option text when the value changes
select.onchange = function() {
var selectedOption = select.options[select.selectedIndex].text;
document.getElementById("songName").innerText = selectedOption;
};
var wavesurfer = WaveSurfer.create({
container: '#waveform',
backend: 'MediaElement'
});

wavesurfer.load('https://thinknews.com.ng/wp-content/uploads/2022/03/Imagine_Dragons_Bones_(thinkNews.com.ng).mp3');

document.getElementById("playButton").addEventListener("click", function() {
document.getElementById("loadingText").style.display = "block";
var audioPlayer = document.getElementById("audioPlayer");
audioPlayer.play();

audioPlayer.addEventListener("play", function() {
document.getElementById("loadingText").style.display = "none";
});
});

function request() {
  window.open("https://nakshtramusic.netlify.app/song-request");
}

const button = document.querySelector(".about-nakshtra");
button.addEventListener("click", function() {
  window.location.href = "https://nakshtramusic.netlify.app/nakshtra";
});
