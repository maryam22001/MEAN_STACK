/*function Component(constructor: Function) {
    console.log("Component decorator called on: ", constructor);

}
*/
/*function Component (config:{template: string, selector: string}) {
    return (constructor: Function) => {
        console.log("Component decorator called on: ", constructor);
    }
}
@Component({template: "<h1>Component</h1>", selector: "#app"})
/*class User{
    constructor(public name: string, public age: number) {
    }
}*/
//decorators are called when the class is defined, not when an instance is created
//decorators are called only once, when the class is defined, not every time an instance is created
//why to use decorators? to add metadata to classes, methods, properties, etc. and to modify their behavior without changing their source code
//decorators are a powerful tool for creating reusable and modular code, and they are widely used in frameworks like Angular, NestJS, etc.  

//method decorator
/*
function Log(...args: any[]) {
    console.log("Method decorator called on: ", ...args);
}


class User{
    @Log
    test(){
        console.log("test method");
    }
}
*/

//Method decorator with parameters vs Function decorator with parameters
function Log(message: string) {
    return (...args: any[]) => {
        console.log("Method decorator called on: ", message, ...args);
    }
}


class User{
    @Log("test method")
    test(){
        console.log("test method");
    }
}

const user = new User();
user.test();
