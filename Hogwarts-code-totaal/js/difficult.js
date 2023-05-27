class DifficultyMenu {
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('difficulty-menu');
    document.body.appendChild(this.container);

    this.title = document.createElement('h2');
    this.title.innerText = 'Kies een niveau:';
    this.container.appendChild(this.title);

    this.options = ['Easy [45 Minutes]', 'Medium [30 Minutes]', 'Hard [15 Minutes]', 'Free Play [Time less]'];
    this.createOptions();

    this.currentOption = this.options[0];
    this.addEventListeners();
  }

  createOptions() {
    const optionsList = document.createElement('ul');
    this.options.forEach((option) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href ='avatar.html';
      a.id = option.toLowerCase();
      a.innerText = option;
      li.appendChild(a);
      optionsList.appendChild(li);
    });
    this.container.appendChild(optionsList);
  }

  addEventListeners() {
    const options = this.container.querySelectorAll('a');
    options.forEach((option) => {
      option.addEventListener('click', () => {
        this.currentOption = option.innerText;
        options.forEach((option) => {
          option.classList.remove('active');
        });
        option.classList.add('active');
      });
    });
  }
}

const menu = new DifficultyMenu();

var easyButton = document.getElementById("easy");
var mediumButton = document.getElementById("medium");
var hardButton = document.getElementById("hard");

easyButton.getElementById("click", function() {
  startGame("easy");
});

mediumButton.getElementById("click", function() {
  startGame("medium");
});

hardButton.getElementById("click", function() {
  startGame("hard");
});

function startGame(difficulty) {
  // start game with selected difficulty
}

