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

  console.log(name, teamName); // Log the values to the console

  // Increment the count of check-ins
  count++;
  console.log("Total Check-Ins: ", count); // Log the current count of check-ins

  // ===== UPDATE DOM: Total Attendee Count =====
  const attendeeCountDisplay = document.getElementById("attendeeCount");
  if (attendeeCountDisplay) {
    attendeeCountDisplay.textContent = count; // Update the total count display
  }

  // ===== UPDATE DOM: Progress Bar =====
  const percentage = Math.round((count / maxCount) * 100); // Calculate the percentage of check-ins
  const progressMax = Math.min(percentage, 100); // Ensure the percentage does not exceed 100%
  console.log(`Progress: ${percentage}%`); // Log the progress percentage

  const progressBar = document.getElementById("progressBar");
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

  // ===== UPDATE DOM: Team Counter =====
  // Map team values to count element IDs
  const teamCountMap = {
    "water": "waterCount",
    "zero": "zeroCount",
    "power": "powerCount"
  };

  const teamCountElementId = teamCountMap[team];
  const teamCounter = document.getElementById(teamCountElementId);
  if (teamCounter) {
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;
    console.log(`${teamName}: ${teamCounter.textContent}`);
  }

  // ===== TRACK TEAM COUNTS IN STATE =====
  // Use a mapping to correctly track team counts
  const teamStateMap = {
    "water": "waterWise",
    "zero": "netZero",
    "power": "renewables"
  };

  const teamStateKey = teamStateMap[team];
  if (teamStateKey) {
    teamCounts[teamStateKey]++;
  }
  
  // ===== UPDATE DOM: Greeting Message =====
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    const messages = [
      "🎉 Welcome to the Intel Sustainability Summit!",
      "👋 Great to see you here!",
      "💚 Excited to have you join us!",
      "✨ Welcome aboard!",
      "🌱 Thanks for attending!",
      "🚀 Let's make a difference together!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    greetingElement.innerHTML = `${randomMessage} <strong>${name}</strong> from <strong>${teamName}</strong>`;
    greetingElement.style.display = "block"; // Make sure it's visible
    
    // Auto-hide the greeting after 4 seconds
    setTimeout(() => {
      greetingElement.style.display = "none";
    }, 4000);
  }
  
  console.log("Team Counts:", teamCounts);

  form.reset(); // Reset the form after submission
});