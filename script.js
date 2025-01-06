// Get DOM elements
const findMatchesButton = document.getElementById('find-matches');
const charityList = document.getElementById('charity-list');

// Sample charity data
const charities = [
    { name: "Bright Minds Academy", location: "Pune", cause: "education" },
    { name: "Green Earth Foundation", location: "Mumbai", cause: "environment" },
    { name: "Health for All", location: "Banglore", cause: "health" },
    { name: "Animal Rescue Network", location: "Nagpur", cause: "animal-welfare" },
    { name: "EduCare Initiative of Pune", location: "Pune", cause: "education" }
];

// Function to find matches
function findCharityMatches() {
    const locationInput = document.getElementById('location').value.trim().toLowerCase();
    const causeInput = document.getElementById('cause').value;

    // Validate user input
    if (!locationInput) {
        displayMessage("Please enter a location.", "error");
        return;
    }

    // Filter charities based on user input
    const matches = charities.filter(charity =>
        charity.location.toLowerCase().includes(locationInput) && charity.cause === causeInput
    );

    // Display the filtered results
    displayMatches(matches);
}

// Function to display matches
function displayMatches(matches) {
    charityList.innerHTML = ""; // Clear previous results

    if (matches.length === 0) {
        charityList.innerHTML = '<p>No charities found. Try adjusting your preferences!</p>';
        return;
    }

    const ul = document.createElement('ul');
    matches.forEach(match => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${match.name}</strong> - ${match.location}`;
        ul.appendChild(li);
    });

    charityList.appendChild(ul);
}

// Function to display messages
function displayMessage(message, type) {
    charityList.innerHTML = `<p class="${type}">${message}</p>`;
}

// Event listener for button click
findMatchesButton.addEventListener('click', findCharityMatches);
