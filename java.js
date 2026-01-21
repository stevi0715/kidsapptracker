let points = 0;

// Handle ticking/unticking tasks
function toggleTask(checkbox) {
  const taskPoints = parseInt(checkbox.getAttribute("data-points")) || 0;

  if (checkbox.checked) {
    points += taskPoints;
  } else {
    points -= taskPoints;
  }

  updatePoints();
}

// Update points + progress bar
function updatePoints() {
  document.getElementById("points").textContent = points;
  updateProgressBar();
}

// Spend points
function spendPoints() {
  const input = document.getElementById("spend");
  const amount = parseInt(input.value);

  if (amount > 0 && amount <= points) {
    points -= amount;
    alert(`Spent ${amount} points!`);
    updatePoints();
  } else {
    alert("Not enough points!");
  }
}

// Reset only the tasks (keep points)
function resetTasks() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
  updatePoints();
  alert("Tasks reset for the next day!");
}

// Reset tasks AND points
function resetAll() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
  points = 0;
  updatePoints();
  alert("Tasks and points reset!");
}

// Progress bar logic
function updateProgressBar() {
  const highestReward = 130; // your top reward cost
  const progress = Math.min((points / highestReward) * 100, 100);
  document.getElementById("progressBar").style.width = progress + "%";
}
function triggerCelebration() {
  const container = document.getElementById("celebration");
  container.innerHTML = ""; // clear old stars

  for (let i = 0; i < 8; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.textContent = "⭐";
    star.style.left = Math.random() * 80 + "%";
    container.appendChild(star);
  }

  setTimeout(() => {
    container.innerHTML = "";
  }, 1200);
}
function updateProgressBar() {
  const highestReward = 130;
  const progress = Math.min((points / highestReward) * 100, 100);
  document.getElementById("progressBar").style.width = progress + "%";

  if (progress === 100) {
    triggerCelebration();
  }
}
