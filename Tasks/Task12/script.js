document.getElementById("fetch-users").addEventListener("click",function fetchUsers() {
        fetch("https://jsonplaceholder.typicode.com/us")
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => displayUsers(data.slice(0, 5)))
        .catch(error => {
            console.error("Error fetching users:", error);
            window.location.href = "error.html";
        });

    


    function displayUsers(users) {
        const userTable = document.getElementById("user-table");
        userTable.innerHTML = "";
        users.forEach(user=>{
            const cell = document.createElement("td");
            cell.id = `user-${user.id}`;
            cell.textContent = user.name;
          
            const row = document.createElement("tr");
            row.appendChild(cell);

            userTable.appendChild(row);

            cell.addEventListener("click", () => fetchPosts(user.id))
        })
    }


});

async function fetchPosts(userId){
   const url = userId ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}` : "https://jsonplaceholder.typicode.com/posts";
   await fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => displayPosts(data.slice(0, 5)))
    .catch(error => {
        console.error("Error fetching posts:", error);
        window.location.href = "error.html";
    });
};

function displayPosts(posts) {
    const postTable = document.getElementById("post-table");
    postTable.innerHTML = "";
    posts.forEach(post => {
        const cell = document.createElement("td");
        cell.id = `post-${post.id}`;
        
        // 1. Create a styled title
        const titleDiv = document.createElement("div");
        titleDiv.textContent = post.title;
        titleDiv.className = "fw-bold fs-5 mb-2 text-primary text-capitalize"; // Bootstrap classes for styling
        
        // 2. Create the card beneath it for details
        const cardDiv = document.createElement("div");
        cardDiv.className = "card shadow-sm mb-3";
        
        const cardBody = document.createElement("div");
        cardBody.className = "card-body text-secondary";
        cardBody.textContent = post.body;

        cardDiv.appendChild(cardBody);
        cell.appendChild(titleDiv);
        cell.appendChild(cardDiv);

        const row = document.createElement("tr");
        row.appendChild(cell);
        postTable.appendChild(row);
    });
}