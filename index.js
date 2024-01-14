const inquirer = require("inquirer");
const fs = require('fs');
const generateLogo= require('./generateLogo.js');


function init(){
    inquirer.prompt([
        {
           type : "input",
           name:"text",
           message:"Please Enter three charcters or three letters "
        },
        {
            type : "input",
            name:"color",
            message:"Enter a text color keyword (OR a hexadecimal number)"
         },
         {
            type : "list",
            name:"Shape",
            message:"Enter the shape",
            choices:["Circle","Triangle","Square",]
         },
         {
            type : "input",
            name:"color",
            message:"Enter a shape color keyword (OR a hexadecimal number)"
         },
        
         
    ]).then(response => {
        console.log(response)
        fs.writeFileSync("Generated logo.svg", generateLogo(response),function(err,data){
            if(err) throw err
        })
        console.log("svglogomaker");
    })
    }
    
    init()