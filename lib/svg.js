// Svg class that renders shape text, color, and shape to create svg logo
class Svg {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">${this.shapeEl}${this.textEl}</svg>`;
    }
    setText(text, color) {
        this.textEl = `<text x="50%" y="60%" font-size="80" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShape(shape, shapeColor) {
        this.shapeEl = shape.render(shapeColor);
    }
}
// Exports file to index.js
module.exports = Svg;