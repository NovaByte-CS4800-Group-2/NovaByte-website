// Get the week dropdown selector from logs.html and the week display to show the log information.
const weekDropdown = document.getElementById("week-dropdown");
const weekDisplay = document.getElementById("week-display");
// Add event listener for change in value with an arrow function.
weekDropdown.addEventListener("change", () => {
	if (weekDropdown.value === "select") {
		weekDisplay.innerHTML = "";
	}
	else {
		weekDisplay.innerHTML = `<ul>Week 1
					<li>Monday, February 3
						<dl>What we accomplished:
							<ol>
								<li class="smaller-text">Ana - Resarched project topics</li>
								<li class="smaller-text">Natalie - Resarched project topics</li>
								<li class="smaller-text">Jessica - Resarched project topics</li>
								<li class="smaller-text">Hadya - Resarched project topics</li>
								<li class="smaller-text">Arin - Resarched project topics</li>

							</ol>
						<dl>What we want to accomplish: 
							<ol>
								<li class="smaller-text">Ana - Resarched tech stack and more concepts</li>
								<li class="smaller-text">Natalie - Resarched tech stack and more concepts</li>
								<li class="smaller-text">Jessica - Resarched tech stack and more concepts</li>
								<li class="smaller-text">Hadya - Resarched tech stack and more concepts</li>
								<li class="smaller-text">Arin - Resarched tech stack and more concepts</li>
							</ol>
						</dl>
					</li>
					<li>Tuesday, February 4
						<dl>What we accomplished:
							<ol>
								<li class="smaller-text">Ana - Completed this</li>
								<li class="smaller-text">Natalie - Completed that</li>
								<li class="smaller-text">Jessica - Completed final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						<dl>What we want to accomplish: 
							<ol>
								<li class="smaller-text">Ana - Start this</li>
								<li class="smaller-text">Natalie - Complete that</li>
								<li class="smaller-text">Jessica - Work on final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						</dl>
					</li>
					<li>Wednesday, February 5
						<dl>What we accomplished:
							<ol>
								<li class="smaller-text">Ana - Completed this</li>
								<li class="smaller-text">Natalie - Completed that</li>
								<li class="smaller-text">Jessica - Completed final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						<dl>What we want to accomplish: 
							<ol>
								<li class="smaller-text">Ana - Start this</li>
								<li class="smaller-text">Natalie - Complete that</li>
								<li class="smaller-text">Jessica - Work on final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						</dl>
					</li>
					<li>Thursday, February 6
						<dl>What we accomplished:
							<ol>
								<li class="smaller-text">Ana - Completed this</li>
								<li class="smaller-text">Natalie - Completed that</li>
								<li class="smaller-text">Jessica - Completed final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						<dl>What we want to accomplish: 
							<ol>
								<li class="smaller-text">Ana - Start this</li>
								<li class="smaller-text">Natalie - Complete that</li>
								<li class="smaller-text">Jessica - Work on final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						</dl>
					</li>
					<li>Friday, February 7
						<dl>What we accomplished:
							<ol>
								<li class="smaller-text">Ana - Completed this</li>
								<li class="smaller-text">Natalie - Completed that</li>
								<li class="smaller-text">Jessica - Completed final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						<dl>What we want to accomplish: 
							<ol>
								<li class="smaller-text">Ana - Start this</li>
								<li class="smaller-text">Natalie - Complete that</li>
								<li class="smaller-text">Jessica - Work on final</li>
								<li class="smaller-text">Hadya - Start this</li>
								<li class="smaller-text">Arin - Complete that</li>
							</ol>
						</dl>
					</li>
				</ul>`
	}
});