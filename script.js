function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const result = document.getElementById('result');

    if (!birthdateInput) {
        alert("Please enter your birthdate.");
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    if (birthDate > today) {
        result.innerText = "Birthdate cannot be in the future!";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust the values if the birthdate's day hasn't occurred yet in the current month
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate(); // Add the days from the previous month
    }

    // Adjust the values if the birthdate's month hasn't occurred yet in the current year
    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText = `Your age is ${years} years, ${months} months, and ${days} days.`;
}
