
const Shape=require("./shapes");

class Square extends Shape{
    constructor(shapeColor,text,textColor){
        super(shapeColor,text,textColor)
    }
    
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    }

    
}
module.exports=Square;