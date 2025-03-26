document.addEventListener("DOMContentLoaded", () => {
    const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
    const buttonsDiv = document.getElementById("buttons");

    if (!buttonsDiv) {
        console.error("Error: 'buttons' container not found.");
        return;
    }

    // Create buttons dynamically
    sounds.forEach(sound => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = sound;

        const audio = new Audio(`sounds/${sound}.mp3`);

        btn.addEventListener("click", () => {
            stopAllSounds(); // Stop other sounds before playing
            audio.play();
        });

        buttonsDiv.appendChild(btn);
    });

    // Stop button
    const stopBtn = document.createElement("button");
    stopBtn.classList.add("stop");
    stopBtn.innerText = "Stop";

    stopBtn.addEventListener("click", () => stopAllSounds());

    buttonsDiv.appendChild(stopBtn);
});

// Function to stop all sounds
function stopAllSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
