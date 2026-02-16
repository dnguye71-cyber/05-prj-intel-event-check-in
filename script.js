// Gather all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track Attendee Check-Ins
let count = 0; // Initialize count of check-ins
const maxCount = 50; // Set maximum count for check-ins

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

  // Update progress bar 
  const percentage = Math.round((count / maxCount) * 100) + "%"; // Calculate the percentage of check-ins
  console.log(`Progress: ${percentage}`); // Log the progress percentage to the console (you can replace this with your desired functionality)

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  const current = parseInt(teamCounter.textContent);
  console.log("Previous Team Count: ", current); // Log the previous team count to the console

  const newTotal = current + 1; // Increment the team count
  console.log("New Team Count: ", newTotal); // Log the new team count to the console
});