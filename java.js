const kids = [
  { name: "Profile 1", tasks: [
    { text: "Task 1", done: false },
    { text: "Task 2", done: false },
    { text: "Task 3", done: false },
    { text: "Task 4", done: false },
    { text: "Task 5", done: false }
  ], points: 0 },
  { name: "Profile 2", tasks: [
    { text: "Task 1", done: false },
    { text: "Task 2", done: false },
    { text: "Task 3", done: false },
    { text: "Task 4", done: false },
    { text: "Task 5", done: false }
  ], points: 0 }
];

function renderProfiles() {
  const container = document.getElementById("profiles");
  container.innerHTML = "";
  kids.forEach((kid, index) => {
    let profile = `<div class="profile">
      <h2>${kid.name} (Points: ${kid.points})</h2>
      <ul>`;
    kid.tasks.forEach((task, tIndex) => {
      profile += `<li class="task">
        <input type="checkbox" ${task.done ? "checked" : ""} 
          onclick="toggleTask(${index}, ${tIndex})">
        ${task.text}
      </li>`;
    });
    profile += `</ul>
      <input type="number" id="spend${index}" placeholder="Spend points">
      <button onclick="spendPoints(${index})">Spend</button>
    </div>`;
    container.innerHTML += profile;
  });
}

function toggleTask(kidIndex, taskIndex) {
  const task = kids[kidIndex].tasks[taskIndex];
  if (!task.done) {
    kids[kidIndex].points += 10; // award points once per day
  }
  task.done = !task.done;
  renderProfiles();
}

function spendPoints(kidIndex) {
  const input = document.getElementById("spend" + kidIndex);
  const amount = parseInt(input.value);
  if (amount > 0 && amount <= kids[kidIndex].points) {
    kids[kidIndex].points -= amount;
    alert(`${kids[kidIndex].name} spent ${amount} points!`);
    renderProfiles();
  } else {
    alert("Not enough points!");
  }
}

function resetTasks() {
  kids.forEach(kid => {
    kid.tasks.forEach(task => task.done = false);
  });
  renderProfiles();
  alert("Tasks reset for the next day!");
}

renderProfiles();
