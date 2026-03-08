let str ="Maryam";
let str2 = "Osman";
let num = 5;
let bool = true;
let arr = [1,2,3,4,5];
let obj = {name:"Maryam", age:25};
let und = undefined;
let nul = null;


console.log(str);
console.log(num);
console.log(bool);
console.log(arr);
console.log(obj);
console.log(und);
console.log(nul);
console.log(typeof str);
console.log(Array.isArray(arr));


console.log(str+str2);
console.log(str + " " + str2);
console.log(`${str} ${str2}`);

console.log(num.toString()); 
console.log(num.toFixed(2));


/*toString Method : converts a number to a string */
/*toFixed Method : formats a number using fixed-point notation. It takes an argument that specifies the number of decimal places to display. */

console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.floor(-4.7));
console.log(Math.ceil(4.7));
console.log(Math.random());
console.log(Math.trunc(4.7)); 
console.log(Math.trunc(-4.7));
console.log(Math.max(1, 5, 3, 9));
console.log(Math.min(1, 5, 3, 9));

/*********Math Object**********/
/*Math.round() : rounds a number to the nearest integer */
/*Math.floor() : rounds a number down to the nearest integer */
/*Math.ceil() : rounds a number up to the nearest integer */
/*Math.random() : generates a random number between 0 (inclusive) and 1 (exclusive) */
/*Math.trunc() : returns the integer part of a number by removing any fractional digits */
/*Math.max() : returns the largest number in a list of numbers */
/*the diffrence betweeen floor , trunc is in the negative numbers  */
/********************************/
 console.log(parseInt("10"));
 console.log(parseFloat("3.14"));
 console.log(Number("5"));
 console.log(Number("3.14"));
 console.log(Number("abc")); // NaN (Not a Number)
 console.log(isNaN(Number("abc"))); // true

/*parseInt() : parses a string and returns an integer */
/*parseFloat() : parses a string and returns a floating-point number */
/*Number() : converts a value to a number, if possible. If the value cannot be converted to a number, it returns NaN (Not a Number) */      
  

// let Myname = "ebtehal";
// console.log(Myname.slice(0, 3))
// let temp = prompt("Enter the temperature");
// if (temp > 40) {
//     console.log("hot");
// } else if(temp > 30){
//     console.log("warm");
// } else if(temp > 20){
//     console.log("cold");
// }else {
//     console.log("error");
// }

// temp > 40 ? console.log("hot") : temp > 30 ? console.log("warm") : temp > 20 ? console.log("cold") : console.log("error");

// let access = prompt("Who can access?")

// if (access =="admin"){
//     console.log ("Hello Admin")
// }
// else if (access =="user"){
//     console.log ("Hello user")
// }
// else{
//     console.log ("Access Denied")
// }


// let res = access == "admin" ? console.log ("Hello Admin") : access == "user" ? console.log ("Hello user") : console.log ("Access Denied");

// console.log(res);
// let fruitColor = prompt("Enter the fruit color?")
// switch (fruitColor){
//     case "red":
//         console.log("Apple");
//         break;
//     case "yellow":
//         console.log("banana");
//         break;
//         case "orange":
//         console.log("orange");
//         break;
//         case "green":
//             console.log ("watermelon");
//             break;
//         default:
//             console.log("error");
//             break;
// }