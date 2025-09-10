// Getting the current date
const currentDate = new Date();

// Adding a month to the current date
const nextMonth = new Date(currentDate);
nextMonth.setMonth(currentDate.getMonth() + 1);

// Showing event date
document.getElementById('weekday').innerHTML = nextMonth.toLocaleString('en', { weekday: 'long' });

document.getElementById('month').innerHTML = nextMonth.toLocaleString('en', { month: 'long' });

document.getElementById('day').innerHTML = nextMonth.toLocaleString('en', { day: 'numeric' });

document.getElementById('year').innerHTML = nextMonth.getFullYear();

// Current year in the footer
document.getElementById('currentYear').innerHTML = currentDate.getFullYear();