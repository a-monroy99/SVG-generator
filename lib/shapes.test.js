const { Square, Triangle, Circle } = require('./shapes.js');


describe ("Triangle", () => {
    it('Should return a blue Triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="100, 1 190, 182 5, 182" fill="blue" />')
    });
});

describe("Square", () => {
    it("Should return a yellow Square", () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="yellow" />')
    })
})

describe ("Circle", () => {
    it("Shoud return purple Circle", () => {
        const shape = new Circle();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="purple" />')
    })
})