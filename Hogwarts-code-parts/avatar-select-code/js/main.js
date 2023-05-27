class Header {
    placeToRender;
    headerElement;
    h1Element;

    constructor(placeToRender) {
        this.placeToRender = placeToRender;

        this.headerElement = document.createElement('header');
        this.h1Element = document.createElement('h1');

        this.h1Element.innerText = 'Kies je avatar';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.headerElement);
        this.headerElement.appendChild(this.h1Element);
    }
}

class RandomNumber {
    array;

    constructor(array) {
        this.array = array;

        this.i = this.array.length;
        this.j = 0;
        this.temp = [];
        while (this.i--) {
            this.j = Math.floor(Math.random() * (this.i + 1));
            this.temp = this.array[this.i];
            this.array[this.i] = this.array[this.j];
            this.array[this.j] = this.temp;
        }
    }
}

class AvatarCirlce {
    placeToRender;
    liElement;
    buttonElement;
    imgElement;
    id;
    alt;
    src;
    number;

    constructor(placeToRender, id, number) {
        this.number = number;
        this.placeToRender = placeToRender;
        this.id = id;

        this.liElement = document.createElement('li');
        this.buttonElement = document.createElement('button');
        this.imgElement = document.createElement('img');

        this.liElement.classList = 'circle';
        this.buttonElement.classList = 'img-buttons';

        if (this.id > 6) {
            this.alt = 'random';
            this.src = `./img/question.webp`;
            this.liElement.classList = 'random__circle-1';
        } else {
            this.alt = this.id;
            this.src = `./img/av-${this.number}.webp`;
        }

        this.imgElement.src = this.src;;
        this.imgElement.alt = `avatar-${this.alt}`;
        this.imgElement.classList = 'avatar-frame';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.liElement);
        this.liElement.appendChild(this.buttonElement);
        this.buttonElement.appendChild(this.imgElement);
    }
}

class Avatars {
    placeToRender;
    mainElement;
    listElement;
    randomListElement;

    constructor(placeToRender) {
        this.placeToRender = placeToRender;

        this.mainElement = document.createElement('main');
        this.listElement = document.createElement('ul');
        this.randomListElement = document.createElement('ul');

        this.mainElement.classList = 'overlay';
        this.listElement.classList = 'circles';
        this.randomListElement.classList = 'random-circles';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.mainElement);
        this.mainElement.appendChild(this.listElement);
        this.mainElement.appendChild(this.randomListElement);
    }
}

class Button {
    placeToRender;
    buttonElement;

    constructor(placeToRender) {
        this.placeToRender = placeToRender;

        this.buttonElement = document.createElement('button');
        this.buttonWrapper = document.createElement('div');

        this.buttonElement.classList = 'Proceed__Button';
        this.buttonElement.textContent = 'Proceed';

        this.buttonWrapper.classList = 'button__Wrapper';

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.buttonWrapper);
        this.buttonWrapper.appendChild(this.buttonElement);
    }
}

class App {
    placeToRender;
    header;
    avatars;
    avatarCard;
    RandomNumber;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];

        this.header = new Header(this.placeToRender);
        this.avatars = new Avatars(this.placeToRender);
        this.button = new Button(this.placeToRender);
        this.RandomNumber = new RandomNumber([1, 2, 3, 4, 5, 6]);

        this.generateAvatars(this.RandomNumber.array);
    }

    generateAvatars = (numArray) => {
        for (let i = 1; i < 8; i++) {
            if (i != 7) {
                this.avatarCard = new AvatarCirlce(this.avatars.listElement, i, numArray[i - 1]);
            } else this.avatarCard = new AvatarCirlce(this.avatars.randomListElement, i);
        }
    }
}

const app = new App('body');