const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./generateLogo.js");
const Circle = require("./lib/circle.js");
const Square = require("./lib/Square.js");
const Triangle = require("./lib/triangle.js");
const Svg=require('./lib/Svglogo.js');

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Please Enter three charcters or three letters ",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a text color keyword (OR a hexadecimal number)",
      },
      {
        type: "list",
        name: "shape",
        message: "Enter the shape",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color keyword (OR a hexadecimal number)",
      },
    ])
    .then((response) => {
      console.log(response);
      const{shape,shapeColor,text,textColor}=response
      switch (shape) {
        case "Circle":
          const mycircle = new Circle(shapeColor,text,textColor);
          return mycircle.render()
         
        case "Square":
          const myLogo2 = new Square(shapeColor,text,textColor);
          return  myLogo2.render()
         
        case "Triangle":
          const myLogo3 = new Triangle(shapeColor,text,textColor);
          return myLogo3.render()
      }
    })
    

    .then((svgText) => {
        console.log(svgText)
      fs.writeFileSync("Generatedlogo.svg",svgText,function (err, data) {
          if (err) throw err;
        }
      );
      console.log("svglogomaker");
    });
}

init();
