const soundsList = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.querySelector(".buttonsContainer")
const playedSoundContainer = document.querySelector(".playedSoundContainer");


soundsList.forEach((sound, idx)=>{
    const btn = document.createElement("button");
    btn.classList.add('btn');
    btn.classList.add(sound);
    btn.setAttribute('id', sound);
    btn.innerText = sound;
    buttonsContainer.appendChild(btn);

    btn.addEventListener("click", ()=>{
        playedSoundContainer.innerText = `${sound}!!!`;
        stopSong();
        document.getElementById(sound).play();
    })
});


function stopSong(){
    soundsList.forEach(sound=>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
};