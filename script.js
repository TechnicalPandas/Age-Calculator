document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!");

    // Attach event listener to the Calculate button
    const calcBtn = document.getElementById("calculateBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", calculateAge);
        console.log("✔ Event Listener attached to Calculate Button.");
    } else {
        console.log("❌ Error: Calculate Button not found.");
    }

    // Dark Mode - Check if it's enabled in local storage
    const darkModeBtn = document.getElementById("darkModeBtn");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeBtn.innerText = "Light Mode"; // Update button text
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", toggleDarkMode);
    }
});

// Function to calculate age
function calculateAge() {
    console.log("Calculate Age function triggered!");

    const birthdateInput = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (!birthdateInput) {
        alert("❗ Please enter your birthdate.");
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    if (birthDate > today) {
        result.innerText = "❌ Birthdate cannot be in the future!";
        result.style.color = "red";
        result.classList.add("show");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText = `🎉 You are ${years} years, ${months} months, and ${days} days old!`;
    result.style.color = document.body.classList.contains("dark-mode") ? "#fff" : "#333";
    result.classList.add("show");

    document.getElementById("shareSection").style.display = "block";
}

// Function to toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    const darkModeBtn = document.getElementById("darkModeBtn");

    const isDark = body.classList.toggle("dark-mode");

    if (isDark) {
        localStorage.setItem("darkMode", "enabled");
        darkModeBtn.innerText = "Light Mode"; // Change button text
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeBtn.innerText = "Dark Mode";
    }
}
