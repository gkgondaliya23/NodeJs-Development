// Write a JavaScript program to calculate the area and perimeter of a circle.
function Circle(radius)
{
    this.radius = radius;
    this.area = () =>{
        return this.radius * this.radius * Math.PI;
    }
    this.peri = ()=>{
        return Math.PI * 2 * this.radius;
    }
}
let cir = new Circle(5);
console.log("Area of Circle is: ",cir.area().toFixed(2));
console.log("Perimeter of Circle is: ",cir.peri().toFixed(2));