class Shape{
// created a class called Shape with a constructor intializing 'color' and sets the value.

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
//Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
// square class that does the same.
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
//a Triangle(Polygon) class that also does the same.
class Triangle extends Shape{
    render(){
        //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Square, Triangle}