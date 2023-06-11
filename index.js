const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Square, Triangle, Circle } = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');
const Text = require('./lib/text-svg.js')

class CLI {
    // constructor(content, textColor, shape, shapeColor) {
    //     this.content = content;
    //     this.textColor = textColor;
    //     this.shape = shape;
    //     this.shapeColor = shapeColor;
    // }
    run() {
        //prompt the user to ask question in the command line
        return inquirer 
            .prompt([
                {
                    type: "input",
                    name: "answer1",
                    message: "Please enter up to three letters",
                },
                {
                    type: "input",
                    name: "textColor",
                    message: "Please enter a color for the text",
                },
                {
                    type: "list",
                    name: "shape",
                    message: "Chose a shape",
                    choices: [
                        "Square",
                        "Triangle",
                        "Circle",
                    ],
                },
                {
                    type: "input",
                    name: "shapeColor",
                    message: "Enter a color for the shape"
                }
                // store all the answers of the input name as the a parameter in the then function
            ]) .then(({answer1, textColor, shape, shapeColor}) => {
                let shapeType;
                switch (shape) {
                    case "Square":
                        shapeType = new Square(shapeColor);
                        break;
                    case "Triangle":
                        shapeType = new Triangle(shapeColor);
                        break;
                    
                    case "Circle":
                        shapeType = new Circle(shapeColor);
                }
                //  render the  SVG tag that includes the user inputs
                let letters = new Text(answer1.toUpperCase(), textColor, shape);
                let svg = new SVG(shapeType, letters);
                return writeFile("logo.svg", svg.render());
            })
            //  letting the user know the a logo has been generated in the console
            .then(() => {
                console.log("Generated logo.svg")
            })
            //  incase of an error, there will be an error in the console
            .catch((err) => {
                console.log(err)
            })
    }
}

const cli = new CLI();

cli.run();

module.exports = CLI
