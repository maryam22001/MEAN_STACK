# MEAN Stack & DevOps Study Hub

This repository is a structured log of sessions, tasks, and technical guides focused on mastering the MEAN stack while implementing DevOps best practices.

## 📂 Repository Content

### 1\. 🧠 Master Guides (`NotesLog/`)

These files contain consolidated knowledge designed for long-term reference:

  * **[JS\_FOR\_DEVOPS.md](cite: 2)**: A comprehensive guide translating JavaScript fundamentals into infrastructure scenarios like automated scaling and health checks.
  * **[MemoryInJS.md](cite: 4)** & **[Memory Management.md](cite: 3)**: Deep dives into the JavaScript memory lifecycle (**Allocation → Usage → Release**), the difference between the **Stack and Heap**, and how the **Garbage Collector** works.
  * **[DevOps\_Dashboard.md](cite: 1)**: Practical walkthrough on using DOM manipulation and state management to build real-time monitoring dashboards.

### 2\. 🎓 Session Logs (`Sessions/`)

Step-by-step notes and code from active learning sessions:

  * **Session 1-3**: Core HTML structure, CSS Flexbox alignment, and responsive design fundamentals.
  * **Session 4**: JavaScript Fundamentals including variables, strings, and basic logic.
  * **Session 5**: Deep dive into **High-Order Array Methods** (`.map()`, `.filter()`, `.reduce()`).
  * **Session 6**: Introduction to **Object-Oriented Programming (OOP)**, classes, and advanced DOM manipulation.
  * **Session 7**: Integration of **Bootstrap 5** for responsive, mobile-first UI components.

### 3\. 🛠️ Practical Tasks (`Tasks/`)

Hands-on projects applying session concepts:

  * **Task 1**: CSS Grid and Flexbox layout implementation.
  * **Task 2 (Omnifood)**: A full responsive landing page for a food delivery service utilizing Bootstrap.
  * **Task 3**: Dynamic CRUD functionality using JavaScript to manage product data.

-----

## 🛠️ The DevOps Relevance

In this repository, we don't just "write code"; we build system-aware applications.

| JavaScript Concept | DevOps Translation | System Impact |
| :--- | :--- | :--- |
| **Heap Allocation** | Kubernetes Pod Resources | Prevents **OOM (Out Of Memory)** crashes by setting proper resource limits. |
| **`.filter()` Method** | Log Analysis | Programmatically identifies "Critical" pod statuses from JSON metric streams. |
| **Event Listeners** | System Observability | Efficiently manages dashboard updates without creating "Ghost Listeners" that leak RAM. |
| **`fetch()` API** | Automated Health Checks | Uses asynchronous logic (the JS version of `curl`) to verify service availability. |

-----

## ✅ Portfolio Standards

  * **Observability First**: We monitor memory "Sawtooth" patterns in Grafana to validate JavaScript performance.
  * **Immutability**: Preference for `.map()` and `.filter()` to ensure system state data is never corrupted during processing.
  * **Error Boundaries**: Mandatory use of `try/catch` in API connectivity to maintain dashboard uptime during network outages.

-----

### Learn More

[Mastering JavaScript Memory Management](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DHcaVxbK9IdE)

This video is relevant because it provides a visual walkthrough of the Stack vs. Heap and Garbage Collection concepts discussed in the `NotesLog/` section of this repository.