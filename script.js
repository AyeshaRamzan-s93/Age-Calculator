
const dateInput = document.getElementById('date');
const result = document.getElementById('result');

//Converts the Date to a standardized UTC string in ISO 8601 format which splits into 2 parts date and time---takes only 1st part of array(date part only)

dateInput.max = new Date().toISOString().split('T')[0];       // Stop the user from choosing a future date

function calculateAge() {
 
    if (!dateInput.value) {
        result.textContent = "Please choose your birth date.";
        return;
    }

    const birthDate = new Date(dateInput.value);

    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();          //getMonth  returns 0 for Jan, it's 0 based
    let days = today.getDate() - birthDate.getDate();

    //  If days are negative, borrow days from previous month

    if (days < 0) {
        months--;                                                             // take one month away
        const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getUTCDate();
        days += daysInPrevMonth;
    }

    // If months are negative, borrow from years

    if (months < 0) {
        years--;
        months += 12;
    }

    console.log("Years:", years, "Months:", months, "Days:", days);
    result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}

