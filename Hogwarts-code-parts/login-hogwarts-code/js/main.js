class Section{
  placeToRender;

  constructor(placeToRender) {
    this.placeToRender = document.getElementsByTagName(placeToRender)[0];
    this.main = document.createElement("main");
    this.section = document.createElement("section");
    this.section.classList = "main__container";
    this.render();
  }

  render() {
    this.placeToRender.appendChild(this.main);
    this.main.appendChild(this.section);
  }
}

class Article{
  placeToRender;
  article;
  constructor(main) {
    this.main = main;
    this.h2 = document.createElement("h2");
    this.article = document.createElement("article");
    this.button = document.createElement("button");
    this.image = document.createElement("img");

    this.article.classList = "main__container-1";
    this.button.classList = "hg__logo__button";
    this.image.classList = "hg__logo";
    this.h2.classList.add("main__name");
    this.h2.innerText = "Hogwarts Escape room";

    //this.button.textContent = "Reload page";
    this.image.src = "/img/Logo_complete.png";
    this.image.alt = "Hogwarts logo";
    this.render();
  }

  render() {
    this.main.appendChild(this.article);
    this.article.appendChild(this.button);
    this.button.appendChild(this.image);
    this.article.appendChild(this.h2);
  }
}

class Input{
  placeToRender;

  constructor(main) {
    this.main = main;
    
    this.article = document.createElement("article");
    this.label = document.createElement("label");
    this.Input = document.createElement("input");
    this.button = document.createElement("button");

    this.article.classList = "main__container-2";
    this.label.setAttribute("for", "username");
    this.label.innerText = "Choose Your Name";

    this.Input.name = "username";
    this.Input.placeholder = "Username";
    this.Input.type = "text";
    this.Input.id = "myInput";
    this.Input.setAttribute("required", true);
    
    this.button.classList = "start__button";

    this.button.innerText = "Start";

    


    this.render();
  }

  render() {
    this.main.appendChild(this.article);
    this.article.appendChild(this.label);
    this.article.appendChild(this.Input);
    this.button.id = 'myButton'; // Add this line to set the id attribute
    this.article.appendChild(this.button);
    this.button.disabled = true; // Set disabled to true to disable the button initially
}

}

class InputControler {
  
  constructor() {
    this.username = '';
    this.myInput = null;
    this.myButton = null;
  }

  initialize() {
    this.myInput = document.getElementById('myInput');
    this.myButton = document.getElementById('myButton');
    this.myInput.onchange = this.handleInputChange;
    this.myButton.addEventListener('click', this.handleButtonClick.bind(this));
    this.handleInputChange(); // Call handleInputChange initially
  }

  handleInputChange = (event) => {
    console.log("Input change");
    if (this.myInput.value.length > 0) {
      console.log("enable");
      this.myButton.disabled = false; // Enable the button
    } else {
      console.log("disable");
      this.myButton.disabled = true; // Disable the button
    }
  }

  handleButtonClick() {
    if (this.myInput.value.length > 0) {
      const url = 'http://127.0.0.1:5500/'; // Replace with the desired URL
      window.location.href = url; // Redirect to the desired URL
    }
  }
}


const hogwartsEscapeRoom = new InputControler();


class App{
  
  constructor(placeToRender) {
    this.placeToRender = placeToRender;

    this.main = new Section(placeToRender);
    this.article = new Article(this.main.section);
    this.Input_article = new Input(this.article.article);
    this.handleInputChange = new InputControler(this.Input_article);
    this.handleInputChange.initialize();
  }
}

const app = new App("body");

