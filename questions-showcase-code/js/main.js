class Dropdown {
    constructor() {
      this.dropdown = document.getElementById("myDropdown");
      this.dropdownBtn = document.querySelector('.dropbtn');
      this.dropdownContent = document.getElementsByClassName("dropdown-content");
      this.handleClick = this.handleClick.bind(this);
      this.handleWindowClick = this.handleWindowClick.bind(this);
      this.init();
    }
  
    init() {
      this.dropdownBtn.addEventListener('click', this.handleClick);
      window.addEventListener('click', this.handleWindowClick);
    }
  
    handleClick() {
      this.dropdown.classList.toggle("show");
    }
  
    handleWindowClick(event) {
      if (!event.target.matches('.dropbtn')) {
        for (let i = 0; i < this.dropdownContent.length; i++) {
          const openDropdown = this.dropdownContent[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
  
const dropdown = new Dropdown();
  
const choiceElements = document.querySelectorAll('.choice__text');

choiceElements.forEach((choiceElement) => {
  choiceElement.addEventListener('click', () => {
    choiceElements.forEach((element) => {
      element.classList.remove('selected');
    });
    choiceElement.classList.add('selected');
  });
});



class Quiz {
  constructor() {
    this.currentQuestion = 1;
    this.totalQuestions = 4;
    this.questionContainers = document.querySelectorAll('.main__container');
    this.previousButton = document.querySelector('.previous-question');
    this.nextButton = document.querySelector('.next-question');
    this.registerButtonEvents();
    this.showCurrentQuestion();
  }

  registerButtonEvents() {
    this.previousButton.addEventListener('click', () => this.goToPreviousQuestion());
    this.nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.goToNextQuestion();
    });
  }
  

  goToPreviousQuestion() {
    if (this.currentQuestion > 3) {
      this.currentQuestion--;
      this.showCurrentQuestion();
    } else {
      return;
    }
  }
  

  goToNextQuestion() {
    if (this.currentQuestion < this.totalQuestions) {
      this.currentQuestion++;
      this.showCurrentQuestion();
    }
  }

  showCurrentQuestion() {
    this.questionContainers.forEach(container => {
      container.style.display = 'none';
    });
    if (this.currentQuestion <= this.totalQuestions) {
      const currentContainer = document.querySelector(`.question-${this.currentQuestion}`);
      currentContainer.style.display = 'block';
    }
  }
}  

const quiz = new Quiz();
