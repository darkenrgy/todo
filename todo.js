const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

// Toggle completed task
taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});

// Delete task
taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && e.target.textContent === "×") {
        const li = e.target.parentNode;
        taskList.removeChild(li);
    }
});


//canvas
const canvas = document.getElementById('crossline');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a gradient background
ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = ctx.createLinearGradient(0, 0, 0, canvas.height);
ctx.fillStyle.addColorStop(0, '#3498db'); // Top color
ctx.fillStyle.addColorStop(1, '#2980b9'); // Bottom color
ctx.fill();

// Add some noise to the background
for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
    ctx.fill();
}

// Add some lines to the background
for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
    ctx.stroke();
}

//bubble




