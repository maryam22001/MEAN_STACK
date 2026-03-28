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


interface IUser{
    userName : string,
    age : number 
    isMarried :boolean,
     address: string
}
const user1:IUser={
    userName:"ahmed",
    age:55,
    isMarried:true,
    address:"123mainsr"}
    type userKey=keyof IUser;

const user :IUser={
    userName:"ahmed",
    age:55,
    isMarried:true,
    address:"123mainsr"
}
function getProperty(obj:IUser,key:userKey){
    return obj[key]
}
function sumNumber(...number:number[]){
   
    return number.reduce((num1,num2)=>num1+num2)

}
console.log(sumNumber(1,2,3,4,5))
 function swap <T>(arg1:T,arg2:T){
    return[arg2,arg1]
 }


