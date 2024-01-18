class Svg{
 constructor(){
    this.textElement=" ";
    this.shapeElement=" ";
 }
 render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
}
 setText(logoText,color){
    if(logoText.length>3){
        throw new Error("Logo text can be 3 characters only")
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${logoText}</text>`
 }
setshapeElement(shape){
    this.setshapeElement=shape.render
}

}
module.exports=Svg;