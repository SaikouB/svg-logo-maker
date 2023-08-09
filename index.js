const inquirer = require('inquirer');
const fs = require('fs/promises');

const { Circle, Square, Triangle } = require('./lib/shapes.js')
const Svg = require('./lib/svg.js');

const questions = [{
    type: 'list',
    name: 'shapeChoice',
    message: 'Please select a SHAPE for you logo:',
    choices: ['circle', 'square', 'triangle'],
}, {
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a SHAPE COLOR for your logo:',
}, {
    type: 'input',
    name: 'textColor',
    message: 'Please choose a TEXT COLOR for your logo:'
}, {
    type: 'input',
    name: 'text',
    message: 'Please type THREE characters for your logo:',
    validate: (input) => {
        if (input.length === 3) {
            return true;
        } else {
            console.log('character length must be three characters')
            return false
        }
    }
}];

function init() {
    inquirer.prompt(questions).then(({ shapeColor, shapeChoice, textColor, text }) => {
        let shape;
        switch (shapeChoice) {
            case 'circle':
                shape = new Circle();
                break;
            case 'square':
                shape = new Square();
                break;
            default:
                shape = new Triangle();
                break;
        }

        shape.setColor(shapeColor);
        const svg = new Svg();
        svg.setText(text, textColor);
        svg.setShape(shape, shapeColor);

        fs.writeFile('./examples/logo.svg', svg.render())
        .then(() => console.log('Congrats!! your logo is generated'))
        .catch((err) => console.error(err))
    });
};

init(); 