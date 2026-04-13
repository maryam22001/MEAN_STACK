let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allStrings = fruits.every(fruit => typeof fruit === "string");
console.log("All elements are strings:", allStrings);

let someStartWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log("Some start with 'a':", someStartWithA);

let filteredFruits = fruits.filter(fruit =>
    fruit.startsWith("b") || fruit.startsWith("s")
);
console.log("Filtered fruits:", filteredFruits);

let likedFruits = filteredFruits.map(fruit =>
    `I like ${fruit}`
);
console.log("Liked fruits:", likedFruits);

likedFruits.forEach(item => console.log(item));