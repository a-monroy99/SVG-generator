// TODO create a shape class
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
       return "No shape specified"
    }
}

//  triangle, circle, square class to render the shapes tags 
class Triangle extends Shape{
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<polygon points="100, 1 190, 182 5, 182" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`

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