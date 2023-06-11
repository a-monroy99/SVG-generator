

class Text {
    constructor(content, color, shapeType) {
        this.content = content;
        this.color = color;
        this.shapeType = shapeType
    }
    //  Depending on the shape, the text will render with the color and content input with unique text points per shape
    render() {
        let shape;
        switch (this.shapeType) {
            case "Square":
                shape = this.shapeType
                return `<text x="100" y="125" fill="${this.color}" text-anchor="middle" font-size="70">${this.content}</text>`;
            case "Triangle":
                shape = this.shapeType
                return `<text x="100" y="135" fill="${this.color}" 
                     text-anchor="middle"
                     font-size="50">${this.content}</text>`;
            case "Circle":
                shape = this.shapeType
                return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`
        }
    }
}

module.exports = Text