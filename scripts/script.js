const date = new Date(document.lastModified);
const lastModifiedDiv = document.querySelector('#lastupdated');
lastModifiedDiv.innerHTML = date.getMonth() + 1 + "th, " + date.getDate() + ", "+ date.getFullYear();


//Gets the span we are trying to modify with the Query Selector method.
const dateDiv = document.querySelector('#date')

//Date().getFullYear()
let year =  new Date().getFullYear();
// Add the current year to the text
dateDiv.textContent = year;