// Gather all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Handle form submission
form.addEventListener("submit", function(event) { 
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the form inputs
  const name = nameInput.value;
  const team = teamSelect.value;

  console.log(name, team); // Log the values to the console (you can replace this with your desired functionality)
});