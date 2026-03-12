let fruit =["apple","banana","grapes","orange"];
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
