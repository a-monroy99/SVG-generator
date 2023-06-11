

class Text {
    constructor(content, color, shapeType) {
        this.content = content;
        this.color = color;
        this.shapeType = shapeType
    }
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
        // if (this.shapeType === "Triangle") {
        //     return `<text x="150" y="200" fill="${this.color}" 
        //     text-anchor="middle"
        //     alignment-baseline="middle"
        //     font-size="70">${this.content}</text>`
        // } else {
        //     return `<text x="150" y="150" fill="${this.color}" 
        //     text-anchor="middle"
        //     alignment-baseline="middle"
        //     font-size="70">${this.content}</text>`
        // }
    }
}

module.exports = Text