
const Shape=require("./shapes");

class Square extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return`<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }

    
}
module.exports=Square;