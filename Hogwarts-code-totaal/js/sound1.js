class AudioPlayer {
    constructor(audioSrc) {
        this.audio = document.createElement("audio");
        this.audio.src = audioSrc;
        this.audio.preload = "metadata";
        this.audio.type = "audio/mpeg";

        this.playBtn = document.createElement("a");
        this.playBtn.className = "btn";
        this.playBtn.id = "nyan-btn";
        this.playBtn.textContent = "play / pause";
        this.playBtn.addEventListener("click", () => {
            if (this.audio.paused) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        });

        document.body.appendChild(this.audio);
        document.body.appendChild(this.playBtn);
    }
}

const player = new AudioPlayer("hogwarts-music.mp3");
