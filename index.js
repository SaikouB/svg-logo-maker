const inquirer = require('inquirer');
const fs = require('fs/promises');

const { Circle, Square, Triangle } = require('./lib/shapes.js')
const Svg = require('./lib/svg.js');

const questions = [{
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a background color for your logo:',
}, {
    type: 'list',
    name: 'shapeChoice',
    message: 'Please select a shape for you logo:',
    choices: ['circle', 'square', 'triangle'],
}, {
    type: 'input',
    name: 'textColor',
    message: 'Please choose a text color for your logo:'

}, {
    type: 'input',
    name: 'text',
    message: 'Please type three characters for your logo:',
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
    inquirer.prompt(questions).then(({ text, textColor, shapeChoice, shapeColor }) => {

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

        svg.setShape(shape);
        svg.setText(text, textColor);
        
        fs.writeFile('./examples/logo.svg', svg.render(), (err) => {
            if (err) {
                console.log('Oops!! something did not add up correctly');
            } else {
                console.log('Congrats!! your logo is succesffully Created');
            }
        });
    });
}

init(); 