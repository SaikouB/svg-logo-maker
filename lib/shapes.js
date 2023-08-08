class Shape {
    constructor() {
        this.color = '';

    }
    setColor(color) {
        this.color = color;
    }
    
}

class Circle extends Shape {
    render() {
       return `<circle cx="200" cy="200" r="100" width="100%" height="100%" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
       return `<rect x="50" y="50" width="100" height="100" rx="15" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon cx="50" cy="50" r="50" width="100%" height="100%" fill="${this.color}" />`
    }
}


module.exports = { Circle, Square, Triangle };