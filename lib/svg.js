class SVG {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }

    render() {
        return `
<svg height="300" width="300">
    ${this.shape.render()}
    ${this.text.render()}
</svg>
        `
    }
};

module.exports = SVG