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
        name: "Shape",
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
      switch (response.Shape) {
        case "Circle":
          const mycircle = new Circle(response.shapeColor);
          return { render: mycircle.render(), response: response };
          
        case "Square":
          const myLogo2 = new Square(response.shapeColor);
          return { render: myLogo2.render(), response: response };

        case "Triangle":
          const myLogo3 = new Triangle(response.shapeColor);
          return { render: myLogo3.render(), response: response };
      }
    })
    .then((result) => {
        console.log(result)
        const mylogo=new Svg();
        mylogo.setText(result.response.text,result.response.textColor)
        mylogo.setshapeElement(result.render)
        return mylogo.render()

    }).then((svgText) => {
        console.log(svgText)
      fs.writeFileSync("Generatedlogo.svg",svgText,function (err, data) {
          if (err) throw err;
        }
      );
      console.log("svglogomaker");
    });
}

init();
