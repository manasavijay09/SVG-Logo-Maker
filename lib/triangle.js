const Shape=require("./shapes");

class Triangle extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    }

    
}
module.exports=Triangle;