class VolumeControl {
    constructor(sourceUrl) {
      this.container = document.createElement("div");
      this.container.classList.add("volume-control");
  
      this.volumeButton = document.createElement("button");
      this.volumeButton.classList.add("volume-button");
      this.volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  
      this.slider = document.createElement("input");
      this.slider.type = "range";
      this.slider.min = "0";
      this.slider.max = "100";
      this.slider.value = "50";
      this.slider.classList.add("volume-slider");
  
      this.audio = document.createElement("audio");
      this.audio.src = sourceUrl;
  
     
      this.volumeButton.addEventListener("click", () => {
        if (this.slider.classList.contains("active")) {
          this.slider.classList.remove("active");
          this.volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
          this.audio.pause();
          this.sliderThumb.style.marginTop = "-0.375rem"; 
        } else {
          this.slider.classList.add("active");
          this.volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
          this.audio.play();
          this.sliderThumb.style.marginTop = "-0.1875rem"; 
        }
      });
  

      this.slider.addEventListener("input", () => {
        const volume = parseInt(this.slider.value);
        this.audio.volume = volume / 100;
  
        if (volume <= 33) {
          this.volumeButton.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
        } else {
          this.volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
      });
  
   
      this.container.appendChild(this.volumeButton);
      this.container.appendChild(this.slider);
  
    
      this.slider.classList.remove("roll-out");
  

      this.sliderThumb = this.slider.querySelector("::-webkit-slider-thumb");
  

      document.body.appendChild(this.audio);
    }
  

    getVolume() {
      return parseInt(this.slider.value);
    }
  

    setVolume(volume) {
      this.slider.value = volume.toString();
      this.audio.volume = volume / 100;
    }
  

    setPlaying(playing) {
      if (playing) {
        this.slider.style.display = "block";
        this.volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        this.audio.play();
      } else {
        this.slider.style.display = "none";
        this.volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        this.audio.pause();
      }
    }
  }
  

  const volumeControl = new VolumeControl("/music/hogwarts-music.mp3");
  document.body.appendChild(volumeControl.container);
  

  