// Get the week dropdown selector from logs.html and the week display to show the log information.
const weekDropdown = document.getElementById("week-dropdown");
const weekDisplay = document.getElementById("week-display");

// Parse the file.
const fileName = "logs.csv";
const promise = new Promise((resolve, reject) => {
	fetch(fileName)
		.then(response => response.text())
		.then(text => {
			Papa.parse(text, {
				header: true,
				complete: function(results) {
					resolve(results.data);
				},
				error: function(error) {
					reject(error);
				}
			})
		});
});
// Store the log data as an array in "data".
const data = await promise.then(result => {return result});
// Array for days of the week.
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Populate the week dropdown selector with week numbers from logs.csv.
// Filter out any falsy values from the weekNumbers array.
const weekNumbers = [...new Set(data.map(day => day["week-number"]))].filter(Boolean);

for (const num of weekNumbers) {
	weekDropdown.innerHTML += `<option value="week-${num}">Week ${num}</option>`  
}

// Add event listener for selector change in value with an arrow function.
weekDropdown.addEventListener("change", () => {
	// If the dropdown value is the default "select" option, clear the display.
	if (weekDropdown.value === "select") {
		weekDisplay.innerHTML = "";
	}
	else {
		// Get the chosen week's log data.
		const weekNumber = weekDropdown.value.replace('week-', '');
		const thisWeek = data.filter(day => day["week-number"] === weekNumber);
		// Create the html to display.
		let html = `<ul>Week ${weekNumber}`
		// Add the data for each day of the chosen week.
		for (const day of thisWeek) {
			html += `<li>${weekdays[parseInt(day.entry) - 1]}, ${day.date}
					<dl>What we accomplished:
						<ol>
							<li class="smaller-text">Natalie - ${day["Natalie-1"]}</li>
							<li class="smaller-text">Arin - ${day["Arin-1"]}</li>
							<li class="smaller-text">Anastasia - ${day["Anastasia-1"]}</li>
							<li class="smaller-text">Jessica - ${day["Jessica-1"]}</li>
							<li class="smaller-text">Hadya - ${day["Hadya-1"]}</li>
						</ol>
					<dl>What we want to accomplish: 
						<ol>
							<li class="smaller-text">Natalie - ${day["Natalie-2"]}</li>
							<li class="smaller-text">Arin - ${day["Arin-2"]}</li>
							<li class="smaller-text">Anastasia - ${day["Anastasia-2"]}</li>
							<li class="smaller-text">Jessica - ${day["Jessica-2"]}</li>
							<li class="smaller-text">Hadya - ${day["Hadya-2"]}</li>
						</ol>
					</dl>
				</li>`
		}
		// Set the week display to show the log for that week.
		weekDisplay.innerHTML = html;
	}
});