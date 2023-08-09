// const variables to import necessary files to run node.js in terminal
const inquirer = require('inquirer');
const fs = require('fs/promises');
const { Circle, Square, Triangle } = require('./lib/shapes.js')
const Svg = require('./lib/svg.js');
// Questions array that takes in user input
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
// Init function that uses inquirer to prompt user with questions then generates a logo based on user inputs
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
        // Writes svg file based on user responses and appends it to examples folder as logo.svg
        fs.writeFile('./examples/logo.svg', svg.render())
            .then(() => console.log('Congrats!! your logo is generated'))
            .catch((err) => console.error(err))
    });
};
// Calls init function
init();