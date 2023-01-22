const date = new Date(document.lastModified);
const lastModifiedDiv = document.querySelector('#lastupdated');
lastModifiedDiv.innerHTML = date.getDate() + "th, " + date.getMonth() + 1 + ", "+ date.getFullYear();


//Gets the span we are trying to modify with the Query Selector method.
const dateDiv = document.querySelector('#date')

//Date().getFullYear()
let year =  new Date().getFullYear();
// Add the current year to the text
dateDiv.textContent = year;