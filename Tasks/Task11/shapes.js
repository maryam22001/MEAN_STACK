
export default class Shape {
    constructor(d1, d2) {
       if(this.constructor === Shape) {
            throw new Error("Abstract class cannot be instantiated.");
        }
        this.d1 = d1;
        this.d2 = d2;
    }
    
 area() {
     return this.d1 * this.d2;
    }
 perimeter() {
     return 2 * (this.d1 + this.d2);
 }

    toString () {
        return `Area: ${this.area()} Perimeter: ${this.perimeter()}`;
    };
  
}
export class Rectangle extends Shape {
  static counter = 0;
    constructor(d1, d2) {
        super(d1, d2);
        
       
        Rectangle.counter++;
     
    }
  
}

export class Square extends Shape {
    constructor(d1) {
        super(d1, d1);
    }
   
}
export class Circle extends Shape {
    constructor(d1) {
        super(d1, d1);}
    area() {
        return Math.PI * this.d1 * this.d1;
    }
    perimeter() {
        return 2 * Math.PI * this.d1;
    }
}
