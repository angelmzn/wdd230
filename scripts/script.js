
//Gets the span we are trying to modify with the Query Selector method.
const dateDiv = document.querySelector('#date')

//Date().getFullYear()
let year =  new Date().getFullYear();
console.log(date);
// Add the current year to the text
dateDiv.textContent = year;