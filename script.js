// Gather all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track Attendee Check-Ins
let count = 0; // Initialize count of check-ins
const maxCount = 50; // Set maximum count for check-ins

// Tracker for Team Counts
let teamCounts = {
  waterWise: 0,
  netZero: 0,
  renewables: 0
};

// Handle form submission
form.addEventListener("submit", function(event) { 
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the form inputs
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text; // Get the text of the selected option

  console.log(name, teamName); // Log the values to the console (you can replace this with your desired functionality)

  // Increment the count of check-ins
  count++;
  console.log("Total Check-Ins: ", count); // Log the current count of check-ins

  // Update the DOM: Total Attendee Count
  const totalCountDisplay = document.getElementById("totalCount");
  if (totalCountDisplay) {
    totalCountDisplay.textContent = count; // Update the total count display
  }

  // Update progress bar 
  const percentage = Math.round((count / maxCount) * 100) + "%"; // Calculate the percentage of check-ins
  const progressMax = Math.min(percentage, "100%"); // Ensure the percentage does not exceed 100%
  console.log(`Progress: ${percentage}`); // Log the progress percentage to the console (you can replace this with your desired functionality)

  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  if (progressBar) {
    progressBar.style.width = progressMax + "%"; // Update the width of the progress bar
  
    // Change color based on percentage progress
    if (progressMax < 30) {
      progressBar.style.backgroundColor = "#e74c3c"; // Red
    } else if (progressMax < 70) {
      progressBar.style.backgroundColor = "#f1c40f"; // Yellow
    } else {
      progressBar.style.backgroundColor = "#2ecc71"; // Green
    }
  }

  if (progressText) {
    progressText.textContent = `${count}/${maxCount}`; // Update the progress text display
  }

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  if (teamCounter) {
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;
  }
  // Track team counts for internal state
  if (team === "waterWiseCount") {
    teamCounts.waterWise++;
  } else if (team === "netZeroCount") {
    teamCounts.netZero++;
  } else if (team === "renewablesCount") {
    teamCounts.renewables++;
  }
 
  // Show Welcome Message
 const greetingMessage = document.getElementById("greetingMessage");
  if (greetingMessage) {
    const messages = [
      "🎉 Welcome to the Intel Sustainability Summit!",
      "👋 Great to see you here!",
      "💚 Excited to have you join us!",
      "✨ Welcome aboard!",
      "🌱 Thanks for attending!",
      "🚀 Let's make a difference together!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    greetingMessage.innerHTML = `${randomMessage} <strong>${name}</strong> from <strong>${teamName}</strong>`;
    greetingMessage.style.display = "block"; // Make sure it's visible
  }
  console.log(`Team Counts: ${JSON.stringify(teamCounts)}`);

  form.reset(); // Reset the form after submission
});