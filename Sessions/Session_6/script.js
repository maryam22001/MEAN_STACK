/**OOP Fundamentals  */
// 1. Classes and Objects

let person1={
    name:"Maryam",
    age:23,
   
    "my job":"Software Engineer",// to access this property we have to use person1["my job"]
    skills:["JavaScript","Python","Java"],// array of skills
    address:{// nested object
        street:"123 Main St",
        city:"cairo",},
    personDate: function() { // A Method
        // 'this' refers to the object itself
        //this refers to obj it self
        return `${this.name} is ${this.age} years old and works as a ${this["my job"]}.`
    }
};
console.log(person1.personDate());
/**Accessing Data: Use parson.name (Dot notation) or parson["my Job"] (Bracket notation for keys with spaces). */

// 2. Inheritance and Polymorphism
// Inheritance allows a new class (child) to inherit properties and methods from an existing class (parent).
// Polymorphism allows methods to do different things based on the object it is acting upon.
class Animal {
    constructor(name) {
        this.name = name;
    }   
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed; 
    }
    speak() {
        console.log(`${this.name} barks.`);
    }       
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy barks.


/**High-Order Array Methods */
// 1. map() - Transforms each element in an array and returns a new array.
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]
// 2. filter() - Creates a new array with all elements that pass a test.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
// 3. reduce() - Reduces an array to a single value by applying a function.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10     

/** The DOM (Document Object Model)*/
// 1. Selecting Elements
const heading = document.getElementById("main-heading");
const paragraphs = document.getElementsByClassName("text");
const items = document.querySelectorAll(".item");
// 2. Manipulating Elements
heading.textContent = "Welcome to OOP and DOM!";
paragraphs[0].style.color = "blue";
items.forEach(item => item.style.fontWeight = "bold");
// 3. Event Handling
const button = document.getElementById("my-button");
button.addEventListener("click", () => {
    alert("Button clicked!");
});

/** Dynamic Element Creation*/
let ul = document.createElement("ul");

function createListItem(text) {
  let li = document.createElement("li");
  let listText = document.createTextNode(text);
  li.appendChild(listText); // Put text in <li>
  ul.appendChild(li);       // Put <li> in <ul>
}

document.body.appendChild(ul); // Put <ul> on the page

/**Event Handling & The Toggle */
function toggleMode() {
  document.body.classList.toggle("dark"); // Change look
  let par = document.getElementById("par");

  // If body has class "dark", show Sun icon, else Moon icon
  if (document.body.classList.contains("dark")) {
    par.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    par.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
}

// Modern Event Listener
btn.addEventListener("click", toggleMode);

/**Filter Method  */

let newArray = oldArray.filter((element, index, array) => {
  return // A condition that results in true or false
});
const scores = [10, 55, 2, 88, 45, 90];

const highScores = scores.filter((num) => {
  return num > 50; 
});

console.log(highScores); // Output: [55, 88, 90]

/**DevOps "Pod" Filter */
const pods = [
  { id: 1, status: "Running" },
  { id: 2, status: "Error" },
  { id: 3, status: "Pending" },
  { id: 4, status: "Error" }
];

// Only keep the pods that have an "Error" status
const crashedPods = pods.filter((pod) => {
  return pod.status === "Error";
});

console.log(crashedPods); 
// Output: [{id: 2, status: "Error"}, {id: 4, status: "Error"}]
/**ilter that only returns products that cost less than 900 */
let products = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 850 },
  { name: "tablet", price: 750 },
];

// The Goal: Return only products costing less than 900
let affordableProducts = products.filter((item) => {
  return item.price < 900;
});

console.log(affordableProducts);
/* Output: 
[
  { name: "phone", price: 500 },
  { name: "tablet", price: 850 },
  { name: "tablet", price: 750 }
]
*/
/** In a real-world scenario, your "Products" could be Cloud Instances or Docker Images.

The Filter: You might want to filter for images that are "Older than 30 days" to delete them and save storage space.

The Logic: images.filter(img => img.age > 30).*/

/**e all those products a 10% discount using .map*/
let products1 = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 850 },
];

// The Goal: Return a NEW array where each price is multiplied by 0.9 (10% off)
let discountedProducts = products1.map((item) => {
  return {
    name: item.name,           // Keep the name the same
    price: item.price * 0.9,   // Transform the price
    status: "On Sale!"         // You can even add NEW properties!
  };
});

console.log(discountedProducts);
/* Output:
[
  { name: "laptop", price: 900, status: "On Sale!" },
  { name: "phone", price: 450, status: "On Sale!" },
  { name: "tablet", price: 765, status: "On Sale!" }
]
*/
//the original products array still has the full prices. This is critical for debugging