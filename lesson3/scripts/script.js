const date = new Date(document.lastModified);
const lastModifiedDiv = document.querySelector('#last-updated');
lastModifiedDiv.innerHTML = date.getMonth() + 1 + "-" + date.getDate() + "-"+ date.getFullYear();


//Gets the span we are trying to modify with the Query Selector method.
const dateDiv = document.querySelector('#year')

//Date().getFullYear()
let year =  new Date().getFullYear();
// Add the current year to the text
dateDiv.textContent = year;