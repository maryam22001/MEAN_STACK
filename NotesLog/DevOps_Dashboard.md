To make this look professional in your GitHub or study notes, save the following content into a file named **`DevOps_Dashboard_Lesson.md`**.

```markdown
# DevOps Monitoring Dashboard: DOM & State Logic

> **Note for Junior DevOps Engineers:** We use the `.md` (Markdown) extension because it is the industry standard for documentation, `README` files, and Kubernetes cluster documentation.

---

## 1. The Structure (`index.html`)
This provides the skeleton of our dashboard.

```html
<div id="podStatus" class="pod-card">
  Status: <span id="statusText">Pending</span>
</div>

<button id="toggleBtn">Deploy / Terminate</button>
```

---

## 2. The Logic (`script.js`)
This script manages the lifecycle of our UI "Pod."

```javascript
// 1. Selection: Grab the elements from the DOM
const podCard = document.getElementById("podStatus");
const statusText = document.getElementById("statusText");
const toggleBtn = document.getElementById("toggleBtn");

// 2. The Logic Function: Controls the State
function updatePodState() {
  // Toggle the 'running' class on the card
  podCard.classList.toggle("running");

  // Check state to update the "View" (Conditional Logic)
  if (podCard.classList.contains("running")) {
    statusText.innerText = "Running";
    podCard.style.backgroundColor = "#d4edda"; // Light Green
    podCard.style.color = "#155724";           // Dark Green
    console.log("Event: Pod Scaled Up");
  } else {
    statusText.innerText = "Terminated";
    podCard.style.backgroundColor = "#f8d7da"; // Light Red
    podCard.style.color = "#721c24";           // Dark Red
    console.log("Event: Pod Scaled Down");
  }
}

// 3. The Listener: Connects User Interaction to the Logic
toggleBtn.addEventListener("click", updatePodState);
```

---

## 3. Verse-by-Verse Explanation

### I. Selection (`document.getElementById`)
In DevOps, you often use `kubectl get pods` to find a resource. In JavaScript, `getElementById` is your "get" command. It targets a specific piece of the UI so you can manipulate it.

### II. State Switching (`classList.toggle`)
The `toggle` method is the most efficient way to switch between two states (like `True/False` or `Running/Terminated`). It checks if the class "running" exists:
* **If Yes:** It removes it.
* **If No:** It adds it.

### III. The Conditional Check (`if/else`)
This is where the **View** logic happens:
* **`classList.contains("running")`**: This is a Boolean check. It's the "Source of Truth" for your UI.
* **`.innerText`**: We change the text so the user knows the status immediately.
* **`.style`**: We change the background color. In a real DevOps dashboard (like Grafana), this is how a panel turns red when a server goes down.

### IV. The Listener (`addEventListener`)
This "wires" the logic to the button. Instead of the logic running immediately when the page loads, it **waits** for the user interaction.

---

## 4. Why this matters for the MEAN Stack (Angular)

Later in your course, you won't manually write `document.getElementById`. Instead, you will use **Angular Directives** that do the same thing under the hood:

| Vanilla JS Method | Angular Equivalent | Purpose |
| :--- | :--- | :--- |
| `classList.toggle()` | `[ngClass]` | Adds/removes a CSS class based on a variable. |
| `element.style` | `[ngStyle]` | Changes colors or fonts dynamically. |
| `innerText` | `{{ variable }}` | String Interpolation to show data. |

**Mastering this Vanilla JS version ensures you understand the engine that makes frameworks like Angular work.**
```
