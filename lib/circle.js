const Shape=require("./shapes");

class Circle extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return`<circle cx="150" cy="100 r="80 fill="${this.color}"></circle>`
    }

    
}
module.exports=Circle;
