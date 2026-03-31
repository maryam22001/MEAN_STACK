"use strict";
/*let head= document.getElementById("head")as HTMLElement ;
console.log(head)

let userName : string | number ="Maryam"
let age : number =55
let isMarried : boolean =true


let arr : number [] = [1,2,3,4,5]
let arr1 : string [] =["mohamed" ,"ali", "ahmed"]
let arr2 : (string | number | string[])[] = ["ahmed", 1, 2, 3, ["ahmed", "ali", "mohamed"]];

let arr4 :[number,string,{userName:string},boolean] = [1,"hello",{userName : "ahmed"} ,true];

interface IUser{
    userName : string,
    age : number
    isMarried :boolean,
    skills:["html","c","js"]
    imgUrl?:string
}
interface INewUser extends IUser{
    imgUrl:string
}
let userProfile : {
    userName : string,
    age : number
    isMarried :boolean,
    skills: ["html", "c", "js"]
} = {
    userName: "Maryam",
    age: 55,
    isMarried: true,
    skills: ["html", "c", "js"]
};
let newUser = {
    ...userProfile,
    imgUrl:""

}

function logMass(mess:string):string{
    return mess
}
 





*/
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    userName: "ahmed",
    age: 55,
    isMarried: true,
    address: "123mainsr"
};
const user = {
    userName: "ahmed",
    age: 55,
    isMarried: true,
    address: "123mainsr"
};
function getProperty(obj, key) {
    return obj[key];
}
function sumNumber(...number) {
    return number.reduce((num1, num2) => num1 + num2);
}
console.log(sumNumber(1, 2, 3, 4, 5));
function swap(arg1, arg2) {
    return [arg2, arg1];
}
//# sourceMappingURL=index.js.map