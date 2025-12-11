let points = 0;

function toggleTask(checkbox) {
  if (checkbox.checked) {
    points += 10; // award points when ticked
  } else {
    points -= 10; // remove points if unticked
  }
  updatePoints();
}

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

function resetTasks() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
  points = 0;
  updatePoints();
  alert("Tasks reset for the next day!");
}

function updatePoints() {
  document.getElementById("points").textContent = points;
}
function resetTasks() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
  updatePoints();
  alert("Tasks reset for the next day!");
}

function resetAll() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
  points = 0;
  updatePoints();
  alert("Tasks and points reset!");
}
