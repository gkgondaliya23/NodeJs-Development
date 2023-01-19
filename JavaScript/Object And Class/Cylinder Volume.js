// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
function cylinder(cHight, cDia) {
    this.cHight = cHight;
    this.cDia = cDia;
}
cylinder.prototype.Voulme = () => {
    let radius = this.cDia / 2;
    return this.cHight * Math.PI * radius * radius;
}
let cyl = new cylinder(7, 8);
console.log(cyl.Voulme().toFixed(4));