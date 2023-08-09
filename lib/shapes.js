class Shape {
    constructor() {
        this.color = '';

    }
    setColor(color) {
        this.color = color;
    }
    
}

class Circle extends Shape {
    render(color) {
       return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render(color) {
       return `<rect x="50" height="150" width="150" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render(color) {
        return `<polygon points="0,200 300,200 150,0" width="100%" height="100%" fill="${this.color}" />`
    }
}


module.exports = { Circle, Square, Triangle };