// Shape class with constructor of shape color
class Shape {
    constructor() {
        this.color = '';

    }
    setColor(color) {
        this.color = color;
    }
    
}
// Circle class which extends Shape class
class Circle extends Shape {
    render() {
       return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`
    }
}
// Square class which extends Shape class
class Square extends Shape {
    render() {
       return `<rect x="20" y="20" height="100%" width="100%" fill="${this.color}" />`
    }
}
// Triangle class which extends Shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" width="100%" height="100%" fill="${this.color}" />`
    }
}

// Exports module to index.js
module.exports = { Circle, Square, Triangle };