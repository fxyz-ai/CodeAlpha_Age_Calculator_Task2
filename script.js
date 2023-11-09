function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
        if (isNaN(dob)) {
            document.getElementById('result').textContent = 'Please enter a valid date of birth.';
            return;
        }
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - dob;
        const ageDate = new Date(ageInMilliseconds);
        const years = ageDate.getUTCFullYear() - 1970;
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;
        document.getElementById('result').textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;

}