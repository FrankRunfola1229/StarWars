const gears = document.querySelector("#gearsContainer");
const btn = document.querySelector("button");
const total = document.querySelector("#total");
const cont = document.querySelector(".container");
const tableBody = document.querySelector("table tbody");
const thead = document.querySelector("table thead");
const thCount = document.querySelector("#count");
const thPlanetName = document.querySelector("#planetName");
const thPopulation = document.querySelector("#population");
let count = 0;

const fetchPlanets = (data) => {
	fetch("https://swapi.co/api/planets/") // leave fetch while API loads
		.then((response) => response.json()) // PROMISE RETURNED AS RESOLVED
		.then(getPlanets)
		.catch((error) => console.log(`fetch error!!${error}`)); // PROMISE RETURNED AS REJECTED
	// ....WHILE API IS LOADING.....
	gears.style.display = "inline-block"; // SHOW LOADING GEARS
	btn.innerText = "....loading";
};

const getPlanets = (data) => {
	for (let planet of data.results) {
		createTableRow(++count, planet.name, planet.population);
	}
	btn.innerText = "Finished";
	gears.style.display = "none"; // HIDE LOADING GEARS
	total.innerText = `Total=${count}`;
};

const createTableRow = (count, name, population) => {
	const tr = document.createElement("tr");
	createTh(count, tr);
	createTd(name, tr);
	createTd(population, tr);
	tableBody.appendChild(tr);
};

// Create Table Header elem
const createTh = (data, tr) => {
	const th = document.createElement("th");
	th.innerText = data;
	th.setAttribute("scope", "row");
	tr.appendChild(th);
};

// Create Table Data elem
const createTd = (data, tr) => {
	const td = document.createElement("td");
	td.innerText = data;
	tr.appendChild(td);
};

btn.addEventListener("click", fetchPlanets);
