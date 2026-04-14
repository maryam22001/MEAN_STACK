
import * as shapes from "./shapes.js"



console.log("Rectangle Area:", new shapes.Rectangle(5, 10).area());
console.log("Rectangle Perimeter:", new shapes.Rectangle(5, 10).perimeter());
console.log("Square Area:", new shapes.Square(5).area());
console.log("Square Perimeter:", new shapes.Square(5).perimeter());
console.log("Circle Area:", new shapes.Circle(5).area());
console.log("Circle Perimeter:", new shapes.Circle(5).perimeter());        



console.log("Rectangle Area:", new shapes.Rectangle(5, 10).area());
console.log("ٌRectangle counter:", shapes.Rectangle.counter);
let s1= new shapes.default();