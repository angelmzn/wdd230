// select the elements to manipulate (output to)
const datefield = document.querySelector("#last-updated");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

//Gets the span we are trying to modify with the Query Selector method.
const dateDiv = document.querySelector('#year')

//Date().getFullYear()
let year =  new Date().getFullYear();
// Add the current year to the text
dateDiv.textContent = year;

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
document.querySelector("#current-date").innerHTML = fulldate
