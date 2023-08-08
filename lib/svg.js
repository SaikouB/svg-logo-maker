class Svg {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
  render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">${this.textEl}${this.shapeEl}</svg>`;
        
    }
    setText(text, color) {
        this.textEl = `<text x="200" y="200" font-size="80" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShape(shape) {
        this.shapeEl = shape;
    }
}

module.exports = Svg;