class Sorter {
    arraySorted = [];
    sort = (array) => {
        this.arraySorted = array.sort((a, b) => {
            return a[1] - b[1];
        });
        return this.arraySorted
    }
}

class Adder {
    add = (array) => {
        let points = 0;
        for (let a = 0; a < array.length; a++) {
            points = points + array[a];
        }
        return points;
    }
}

class Questionhandler {
    totalPoints = undefined;
    houseArray = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    pointsArray = [
        ['Gryffindor', []],
        ['Hufflepuff', []],
        ['Ravenclaw', []],
        ['Slytherin', []]
    ];
    scoreArray = [];
    percentageArray = [];
    adder = undefined;


    constructor(totalPoints) {
        this.totalPoints = totalPoints;
        this.adder = new Adder();
        this.sorter = new Sorter();
    }

    handleQuestion = (points, house) => {
        if (this.checkIfAboveMax(points) != null) {
            console.log('Error');
        } else {
            for (let i = 0; i < this.pointsArray.length; i++) {
                if (this.pointsArray[i][0] == house) {
                    this.pointsArray[i][1].push(points);
                }
            }
        }
    }

    checkIfAboveMax = (pointsToBeAdded) => {
        let addOutput = 0;
        for (let b = 0; b < this.pointsArray.length; b++) {
            addOutput = addOutput + this.adder.add(this.pointsArray[b][1]);
        }
        if (addOutput > this.totalPoints) {
            return;
        } else if ((addOutput + pointsToBeAdded) > this.totalPoints) {
            return;
        } else return null;
    }

    done = () => {
        if (this.checkIfAboveMax(0) != null) {
            return;
        } else {
            for (let c = 0; c < this.pointsArray.length; c++) {
                let adderOutput = this.adder.add(this.pointsArray[c][1]);
                this.scoreArray.push([this.pointsArray[c][0], adderOutput])
            }
        }
        const sorted = this.sorter.sort(this.scoreArray);
        console.log(sorted);
        for(let i = 0; i < this.pointsArray.length; i++) {
            this.percentageArray.push(
                [
                    sorted[i][0], 
                    Math.round((sorted[i][1] / this.totalPoints) * 100)
                ]
            )
        }
        let percentage = {};
        for(let i = 0; i < this.percentageArray.length; i++) {
            percentage[this.percentageArray[i][0]] = this.percentageArray[i][1];
        }
        return {
            'Gryffindor': percentage.Gryffindor,
            'Hufflepuff': percentage.Hufflepuff,
            'Ravenclaw': percentage.Ravenclaw,
            'Slytherin': percentage.Slytherin
        }
    }
}

const handler = new Questionhandler(15);

//Voorbeeld vragen
handler.handleQuestion(2, 'Gryffindor');
handler.handleQuestion(3, 'Hufflepuff');
handler.handleQuestion(4, 'Ravenclaw');
handler.handleQuestion(2, 'Gryffindor');
handler.handleQuestion(2, 'Slytherin');
handler.handleQuestion(2, 'Ravenclaw');
handler.handleQuestion(1, 'Ravenclaw');

//Call this last whenever all questions are done
console.log(handler.done())

