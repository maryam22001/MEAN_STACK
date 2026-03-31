//input form with user name and age > requered 
//once send empty the inputs into the tables 

const nameInput = document.getElementById("nameLabel");
const ageInput = document.getElementById("ageLabel");
const loginForm = document.getElementById("loginForm");
const tableBody = document.getElementById("tableBody");

// Validation Styling: Changes border color when user interacts with inputs
[nameInput, ageInput].forEach(input => {
    input.addEventListener("input", (e) => {
        if (e.target.value.trim() !== "") {
            e.target.style.border = "2px solid #2ecc71"; // Green
        } else {
            e.target.style.border = "2px solid #e74c3c"; // Red
        }
    });
});

// Handle Form Submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const age = ageInput.value;

    // Create Table Row
    const row = document.createElement("tr");
    
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    
    const ageCell = document.createElement("td");
    ageCell.textContent = age;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    tableBody.appendChild(row);

    // Reset form and input borders
    loginForm.reset();
    nameInput.style.border = "1px solid #ddd";
    ageInput.style.border = "1px solid #ddd";
});