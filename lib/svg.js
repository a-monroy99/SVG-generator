class SVG {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }
    //  renders the SVG tag with the render functions to render the shape tags and the text tag
    render() {
        return `
        <svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            ${this.shape.render()}
            ${this.text.render()}
        </svg>
        `
    }
};

module.exports = SVG