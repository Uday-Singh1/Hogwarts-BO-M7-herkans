class Avatar {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
      this.selectedEyes = "eyes1";
      this.selectedMouth = "mouth1";
      this.selectedNose = "nose1";
      this.color = "#FFD700";
    }
  
    drawAvatar() {
      const { context, selectedEyes, selectedMouth, selectedNose, color } = this;
  
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      context.fillStyle = color;
      context.beginPath();
      context.arc(100, 100, 80, 0, 2 * Math.PI);
      context.fill();
  
      const eyeOffsetX = 0;
      const eyeOffsetY = 15;
      const noseOffsetY = -10;
      const mouthOffsetY = 20;
  
      if (selectedEyes === "eyes1") {
        context.fillStyle = "white";
        context.beginPath();
        context.arc(75 + eyeOffsetX, 75 - eyeOffsetY, 10, 0, 2 * Math.PI);
        context.arc(125 + eyeOffsetX, 75 - eyeOffsetY, 10, 0, 2 * Math.PI);
        context.fill();
      } else if (selectedEyes === "eyes2") {
        context.strokeStyle = "white";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(65 + eyeOffsetX, 70 - eyeOffsetY);
        context.lineTo(85 + eyeOffsetX, 80 - eyeOffsetY);
        context.moveTo(115 + eyeOffsetX, 80 - eyeOffsetY);
        context.lineTo(135 + eyeOffsetX, 70 - eyeOffsetY);
        context.stroke();
      }
  
      if (selectedMouth === "mouth1") {
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.beginPath();
        context.arc(100, 115 + mouthOffsetY, 40, 0.1 * Math.PI, 0.9 * Math.PI);
        context.stroke();
      } else if (selectedMouth === "mouth2") {
        context.strokeStyle = "white";
        context.lineWidth = 4;
        context.beginPath();
        context.arc(100, 125 + mouthOffsetY, 40, 1.1 * Math.PI, 1.9 * Math.PI);
        context.stroke();
      }
  
      if (selectedNose === "nose1") {
        context.fillStyle = "white";
        context.beginPath();
        context.moveTo(95, 105 + noseOffsetY);
        context.lineTo(100, 85 + noseOffsetY);
        context.lineTo(105, 105 + noseOffsetY);
        context.closePath();
        context.fill();
      } else if (selectedNose === "nose2") {
        context.fillStyle = "white";
        context.beginPath();
        context.arc(100, 100 + noseOffsetY, 10, 0, 2 * Math.PI);
        context.fill();
      }
    }
  }
  
  class Main {
    constructor() {
      this.container = null;
      this.avatarCanvas = null;
      this.colorPicker = null;
      this.avatar = null;
    }
  
    createContainer() {
        this.container = document.createElement("div");
        document.body.appendChild(this.container);
        this.container.classList.add("body__container");
      
       // document.body.style.background = "url('/img/hogwarts-3.webp') center center fixed";
      }
      
  
    createAvatarCanvas() {
      const avatarSection = document.createElement("section");
      avatarSection.classList.add("avatar-section");
  
      this.avatarCanvas = document.createElement("canvas");
      this.avatarCanvas.width = 200;
      this.avatarCanvas.height = 200;
      this.avatarCanvas.classList.add("avatar-canvas");
  
      avatarSection.appendChild(this.avatarCanvas);
      this.container.appendChild(avatarSection);
    }
  
    createColorPicker() {
      const controlsSection = document.createElement("section");
      controlsSection.classList.add("controls-section");
  
      this.colorPicker = document.createElement("input");
      this.colorPicker.type = "color";
      this.colorPicker.classList.add("color-picker");
  
      controlsSection.appendChild(this.colorPicker);
      this.container.appendChild(controlsSection);
    }
  
    createButtons() {
      const controlsSection = document.querySelector(".controls-section");
  
      const buttonsWrapper = document.createElement("div");
      buttonsWrapper.classList.add("buttons-wrapper");
  
      const changeEyesButton = document.createElement("button");
      changeEyesButton.textContent = "Change Eyes";
      changeEyesButton.classList.add("button_eye");
      buttonsWrapper.appendChild(changeEyesButton);
  
      const changeMouthButton = document.createElement("button");
      changeMouthButton.textContent = "Change Mouth";
      changeMouthButton.classList.add("button_mouth");
      buttonsWrapper.appendChild(changeMouthButton);
  
      const changeNoseButton = document.createElement("button");
      changeNoseButton.textContent = "Change Nose";
      changeNoseButton.classList.add("button_nose");
      buttonsWrapper.appendChild(changeNoseButton);
  
      controlsSection.appendChild(buttonsWrapper);
    }
  
    createNavigationButtons() {
        const navigationContainer = document.createElement("div");
        navigationContainer.classList.add("navigation-container");
      
        const previousButton = document.createElement("button");
        previousButton.classList.add("button_previous");
        previousButton.textContent = "Previous";
        previousButton.addEventListener("click", () => {
          window.location.href = "previous.html"; // Link naar de vorige HTML-pagina
        });
        navigationContainer.appendChild(previousButton);
      
        const nextButton = document.createElement("button");
        nextButton.classList.add("button_next");
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", () => {
          window.location.href = "next.html"; // Link naar de volgende HTML-pagina
        });
        navigationContainer.appendChild(nextButton);
      
        this.container.appendChild(navigationContainer);
      }
      
  
    handleColorChange(event) {
      const color = event.target.value;
      this.avatar.color = color;
      this.render();
    }
  
    handleChangeEyes() {
      this.avatar.selectedEyes = this.avatar.selectedEyes === "eyes1" ? "eyes2" : "eyes1";
      this.render();
    }
  
    handleChangeMouth() {
      this.avatar.selectedMouth = this.avatar.selectedMouth === "mouth1" ? "mouth2" : "mouth1";
      this.render();
    }
  
    handleChangeNose() {
      this.avatar.selectedNose = this.avatar.selectedNose === "nose1" ? "nose2" : "nose1";
      this.render();
    }
  
    render() {
      this.avatar.drawAvatar();
    }
  
    initialize() {
      this.createContainer();
      this.createAvatarCanvas();
      this.createColorPicker();
      this.createButtons();
      this.createNavigationButtons();
      this.avatar = new Avatar(this.avatarCanvas);
  
      this.colorPicker.addEventListener("input", this.handleColorChange.bind(this));
      const changeEyesButton = document.querySelector(".button_eye");
      changeEyesButton.addEventListener("click", this.handleChangeEyes.bind(this));
      const changeMouthButton = document.querySelector(".button_mouth");
      changeMouthButton.addEventListener("click", this.handleChangeMouth.bind(this));
      const changeNoseButton = document.querySelector(".button_nose");
      changeNoseButton.addEventListener("click", this.handleChangeNose.bind(this));
  
      this.render();
    }
  }
  
  const main = new Main();
  main.initialize();
  