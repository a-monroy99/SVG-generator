

class Text {
    constructor(content, color, shapeType) {
        this.content = content;
        this.color = color;
        this.shapeType = shapeType
    }
    render() {
        if (this.shapeType === "Triangle") {
            return `<text x="150" y="200" fill="${this.color}" 
            text-anchor="middle"
            alignment-baseline="middle"
            font-size="70">${this.content}</text>`
        } else {
            return `<text x="150" y="150" fill="${this.color}" 
            text-anchor="middle"
            alignment-baseline="middle"
            font-size="70">${this.content}</text>`
        }
    }
}

module.exports = Text