//Imports shapes from shapes.js file
const { Circle, Square, Triangle } = require("../lib/shapes.js");

// New Circle test
describe('circle', () => {
    it('correctly generates', () => {
        const circle = new Circle();
        let color = 'red';
        circle.color = color
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`)
    });
});

// New Square test
describe('square', () => {
    it('correctly generates', () => {
        const square = new Square();
        let color = 'yellow';
        square.color = color;
        expect(square.render()).toEqual(`<rect x="20" y="20" height="100%" width="100%" fill="${color}" />`)
    });
});

// New Triangle test
describe('triangle', () => {
    it('correctly generates', () => {
        const triangle = new Triangle();
        let color = 'green';
        triangle.color = color;
        expect(triangle.render()).toEqual(`<polygon points="0,200 300,200 150,0" width="100%" height="100%" fill="${color}" />`)
    });
});