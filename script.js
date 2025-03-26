 const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]; 
        const buttonsContainer = document.getElementById("buttons");

        // Store audio elements to control playback
        let audioElements = {};

        // Create buttons dynamically
        sounds.forEach(sound => {
            const button = document.createElement("button");
            button.className = "btn";
            button.innerText = sound;

            // Create an audio element
            const audio = new Audio(`sounds/${sound}.mp3`);
            audioElements[sound] = audio;

            button.addEventListener("click", () => {
                stopAllSounds();
                audio.play();
            });

            buttonsContainer.appendChild(button);
        });

        // Stop button
        const stopButton = document.createElement("button");
        stopButton.className = "stop";
        stopButton.innerText = "stop";

        stopButton.addEventListener("click", stopAllSounds);
        buttonsContainer.appendChild(stopButton);

        function stopAllSounds() {
            Object.values(audioElements).forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        }