/**let fruit =["apple","banana","grapes","orange"];
console.log(fruit[0])
console.log(fruit[2][3]) //prints p , it consider the second index as the index of the string at index 2
fruit[1]="mango";
console.log(fruit)
fruit.pop() //removes the last element of the array//removes the last element of the array
console.log(fruit)
fruit.shift() //removes the first element of the array
console.log(fruit)
fruit.unshift("kiwi") //adds an element at the beginning of the array
fruit.push("berry") //adds an element at the end of the array
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
**/

/**let fruit =[["apple","banana"],["grapes","orange","mango"],["kiwi","berry"]];
console.log(fruit[0][1]) //prints banana
console.log(fruit[1][2]) //prints mango
console.log(fruit[2][0]) //prints kiwi
console.log(fruit.length) //prints 3, it counts the number of sub-arrays in the main array
console.log(fruit[1].length)
 //prints 3, it counts the number of elements in the sub-array at index 1
 **/
/**let fruit =["apple","banana","grapes","orange","mango","kiwi","berry"];
console.log(fruit.slice(2,3,"apple")) //prints ["grapes"], it returns a new array containing the elements from index 2 to index 3 (excluding index 3)
console.log(fruit.slice(2,0,"apple")) //prints [], it returns an empty array because the start index is greater than the end 
console.log(fruit.slice(2));
fruit.indexOf("grapes") //prints 2, it returns the index of the first occurrence of "grapes" in the array
fruit.indexOf("berry") //prints 6, it returns the index of the first occurrence of "berry" in the array
fruit.indexOf("watermelon") //prints -1, it returns -1 because "watermelon" is not found in the 
fruit.lastIndexOf("grapes") //prints 2, it returns the index of the last occurrence of "grapes" in the array
fruit.includes("grapes") //prints true, it returns true because "grapes" is found in the array
console.log(fruit.sort()) //prints ["apple","banana","berry","grapes","kiwi","mango","orange"], it sorts the array in alphabetical order
console.log(fruit.reverse()) //prints ["orange","mango","kiwi","grapes","berry","banana","apple"], it reverses the order of the elements in the array

fruit1=fruit.concat(["watermelon","papaya"]) //creates a new array by concatenating the original array with the new array

for (let i=0;i<fruit1.length;i++){ //creates a new array by concatenating the original array with the new array
console.log(fruit1) //prints first then check the condition
    if(fruit1[i]== "banana"){
        break;
    }
//console.log(fruit1[i]) //prints the elements of the array until it finds "banana"
}

for(let i=1;i<12;i++){
   
        console.log(`2 * ${i} = ${2*i}`) //prints the multiplication table of 2 from 1 to 11
    
}
for(let i=1;i<12;i++){
    for(let j=1;j<12;j++){ // finishes first loop then starts the second loop
        console.log(`${i} * ${j} = ${i*j}`) //prints the multiplication table from 1 to 11
    }
}

let i =1;
while(i<=12){
    console.log(i)
    i++;
}
let num =prompt("Enter a number");
while(num<10 || num>50){ // the propmt stops when entering a correct number 
    console.log("Number is less than 10");
    num = prompt("Enter a number");
}
console.log(`the number is ${num}`)
**/
let str = prompt("Enter a string");

while(str!="admin"){
console.log("Incorrect password");
str = prompt("Enter a string");
}
console.log("Correct password entered");