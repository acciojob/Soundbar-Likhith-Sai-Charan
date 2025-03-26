// Array of sound names
var sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'stop'];

// Get the buttons div
var buttonsDiv = document.getElementById('buttons');

// Check if buttonsDiv exists to avoid errors
if (!buttonsDiv) {
    console.error("Error: 'buttons' container not found.");
} else {
    // Create a button for each sound
    for (var i = 0; i < sounds.length; i++) {
        var btn = document.createElement('button');
        btn.className = sounds[i] === 'stop' ? 'stop' : 'btn'; // Assign 'stop' class for stop button
        btn.innerText = sounds[i];

        // Create audio element
        var audio = new Audio(`sounds/${sounds[i]}.mp3`);

        // Add event listener to play sound when button is clicked
        btn.addEventListener('click', function(audioFile) {
            return function() {
                stopAllSounds(); // Stop other sounds before playing
                audioFile.play();
            };
        }(audio));

        // Add button to buttons div
        buttonsDiv.appendChild(btn);
    }
}

// Function to stop all sounds
function stopAllSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
