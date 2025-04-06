const btns = Array.from(document.querySelectorAll(".btn"));
console.log(btns)
// ["applause", "boo", "gasp", "tada", "victory", "wrong"]

function playSounds(btn) {
    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(btn.innerText).play();
    });
}

function stopSounds() {
    for (let i = 0; i < btns.length; i++) {
        const sound = document.getElementById(btns[i].innerText);
        console.log({ sound });
        sound.pause();
        sound.currentTime = 0;
    }
}

for (let i = 0; i < btns.length; i++) {
    playSounds(btns[i]);
}

document.querySelector(".stop").addEventListener('click', () => {
    stopSounds();
});
