

```markdown
#  JavaScript for DevOps

**Focus:** MEAN Stack & Infrastructure Automation

---

## 1. Memory Management: The "Parking Lot" Analogy
In JS, memory is automatic but must be managed to avoid "System Killers."

### The Stack vs. The Heap
| Feature | The Stack | The Heap |
| :--- | :--- | :--- |
| **Data Type** | Primitives (Numbers, Booleans) | Objects, Arrays, Functions |
| **Speed** | Extremely Fast | Slower (Reference-based) |
| **Structure** | Organized (LIFO) | Large Unstructured Pool |

### 🛠️ DevOps Scenario: The OOM Killer
If your Node.js API has a memory leak, it fills the **Heap**. Eventually, the Linux Kernel (the host) will trigger the **OOM (Out Of Memory) Killer** to protect the server.
* **The Fix:** In your Kubernetes YAML, always set `limits`.
    ```yaml
    resources:
      requests:
        memory: "256Mi"
      limits:
        memory: "512Mi" # Hard ceiling to prevent node crashes
    ```

---

## 2. The DOM: Controlling the "View"
In the MEAN stack, the "V" is the UI. In DevOps, the "V" is your **Monitoring Dashboard**.

### Selection & Manipulation
```javascript
let title = document.getElementById("title");
title.style.color = "green"; // Manual styling
title.classList.toggle("dark-mode"); // State switching
```

### 🛠️ DevOps Scenario: The Pod Status Toggle
When a Kubernetes Pod changes from `Pending` to `Running`, your JS needs to update the dashboard immediately.
```javascript
function updatePodUI(status) {
  const indicator = document.getElementById("status-light");
  if (status === "Running") {
    indicator.style.backgroundColor = "green";
    indicator.innerText = "Active";
  } else {
    indicator.style.backgroundColor = "red";
    indicator.innerText = "Error";
  }
}
```

---

## 3. High-Order Array Methods: Data Processing
These methods are how you handle JSON data from APIs (like the Kubernetes Metrics API).

### A. `.filter()` (The Bouncer)
Filters items based on a true/false condition. Creates a **new** array.
```javascript
const pods = [
  { name: "web-server", cpu: 40 },
  { name: "db-server", cpu: 95 },
  { name: "auth-api", cpu: 30 }
];

// DevOps Task: Find pods with CRITICAL CPU usage (> 90)
const criticalPods = pods.filter(pod => pod.cpu > 90);
```

### B. `.map()` (The Transformer)
Transforms every item in an array into something new. Same length as original.
```javascript
// DevOps Task: Scale all memory limits by 20% for a cluster upgrade
const upgradedPods = pods.map(pod => {
  return {
    ...pod,
    memory: pod.memory * 1.2
  };
});
```

### C. `.reduce()` (The Blender)
Reduces an entire array into **one single value**.
```javascript
const costs = [10.5, 20.0, 5.75];

// DevOps Task: Calculate the total Cloud Bill for the month
const totalBill = costs.reduce((acc, curr) => acc + curr, 0);
```

---

## 4. Event Listeners & The "Ghost" Problem
Professional way to handle interactions.

```javascript
btn.addEventListener("click", () => {
  console.log("Deployment Started...");
});
```

### 🛠️ DevOps Scenario: Memory Leaks in Dashboards
If you create a "Refresh" button for your dashboard and delete it from the DOM *without* calling `removeEventListener`, the function stays in RAM.
* **Result:** The browser tab uses more and more RAM until it crashes.
* **Solution:** In Angular, use the `ngOnDestroy` lifecycle hook to "unsubscribe" and clean up.




---

## 5. API Connectivity: The `fetch()` Method
The bridge between your Angular frontend and your Node.js or Cloud API. Think of it as **`curl`** for JavaScript.

### DevOps Scenario: Automated Health Check
```javascript
async function healthCheck() {
  try {
    const response = await fetch("[https://api.myapp.com/health](https://api.myapp.com/health)");
    const data = await response.json(); // Like 'jq' parser
    
    if (response.ok) {
      console.log("System Healthy:", data.version);
    }
  } catch (err) {
    console.error("CRITICAL: Server is unreachable!");
  }
}
```

---

## 6. Event Listeners & Memory Leaks
`addEventListener` is the professional standard for handling interactions.

| Method | Benefit |
| :--- | :--- |
| **`addEventListener`** | Allows multiple functions; can be removed to save RAM. |
| **`onclick`** | Simple but overwrites previous logic; harder to manage. |

> **Warning:** Always remove listeners in long-running dashboards to avoid "Ghost Listeners" that eat up browser memory.

---

## 7. Summary:

| Step | Action | Method Used |
| :--- | :--- | :--- |
| **1. Get Data** | Fetch Pod list from Kubernetes API | `fetch()` |
| **2. Clean Data** | Remove healthy Pods to find errors | `.filter()` |
| **3. Format Data** | Add a "Critical" tag to high-CPU Pods | `.map()` |
| **4. Display Data** | Update the Dashboard UI | `innerHTML` / `innerText` |

---
- [ ] **Immutability:** Always use `.map` and `.filter` to keep original data safe.
- [ ] **Resource Guardrails:** Use `NODE_OPTIONS="--max-old-space-size=4096"` in Dockerfiles for heavy Node apps.
- [ ] **Clean Code:** Use `addEventListener` over `onclick` for better multi-function support.
- [ ] **Observability:** Monitor "Sawtooth" patterns in Grafana to identify JS memory leaks.

---

## Final DevOps Checklist
- [ ] Set `NODE_OPTIONS="--max-old-space-size=4096"` for memory-heavy containers.
- [ ] Use `async/await` and `try/catch` for all API calls.
- [ ] Monitor "Sawtooth" memory patterns in Grafana to find JS leaks.
- [ ] Never use `ctrl+x` on production code—use `btn.remove()` for dynamic UI updates.
```
