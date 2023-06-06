// TODO create a shape class
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }

    render() {
       return "No shape specified"
    }
}

//  triangle, circle, square class to render the shapes tags 
class Triangle  extends Shape{
    constructor(shapeColor, shape) {
        super(shapeColor)
        this.shape = shape
    }
    render() {
        return `<polygon points="150,0 300,300 0,300" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect width="300" height="300" fill="${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<circle cx="150" cy="150" r="150" fill="${this.shapeColor} " />`

    }
}

module.exports = { Shape, Triangle, Square, Circle }
// const newShape1 = new Square("red");
// console.log(newShape1.render())
// const newText1 = new Text("ZZZ", "white")
// console.log(newText1.render())

// console.log("=============================")

// const newSVG1 = new SVG(newShape1, newText1);
// console.log(newSVG1.render())