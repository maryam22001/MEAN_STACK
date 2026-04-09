//input form with user name and age > requered 
//once send empty the inputs into the tables 
const nameInput = document.getElementById("nameLabel");
const ageInput = document.getElementById("ageLabel");
const loginForm = document.getElementById("loginForm");
const tableBody = document.getElementById("tableBody");
const nameErr = document.getElementById("nameerr");
const ageErr = document.getElementById("ageerr");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    let isValid = true;

    // Reset previous errors
    nameErr.textContent = "";
    ageErr.textContent = "";
    nameInput.style.border = "1px solid #ddd";
    ageInput.style.border = "1px solid #ddd";

    // JavaScript Validation Logic
    if (name === "") {
        nameErr.textContent = "Name is required";
        nameInput.style.border = "1px solid red";
        isValid = false;
    }

    if (age === "") {
        ageErr.textContent = "Age is required";
        ageInput.style.border = "1px solid red";
        isValid = false;
    }

    // Only add to table if validation passes
    if (isValid) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = name;

        const ageCell = document.createElement("td");
        ageCell.textContent = age;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        tableBody.appendChild(row);

        // Reset form
        loginForm.reset();
    }
});