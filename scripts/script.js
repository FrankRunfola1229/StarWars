const btn = document.querySelector("button");
const cont = document.querySelector(".container");
const table = document.querySelector("table");
const thead = document.querySelector("table thead");
const thCount = document.querySelector("#count");
const thPlanetName = document.querySelector("#planetName");
const thPopulation = document.querySelector("#population");

const fetchPlanets = (data) => {
	fetch("https://swapi.co/api/planets/") //
		.then((response) => response.json())
		.then(getPlanets)
		.catch((error) => console.log(`fetch error!!${error}`));

	gears.style.display = "inline-block";
	btn.innerText = "....loading";
};

const getPlanets = (data) => {
	let count = 0;
	for (let planet of data.results) {
		createTableRow(++count, planet.name, planet.population);
	}
	btn.innerText = "FINISHED!!";
	gears.style.display = "none";
};

const createTableRow = (count, name, population) => {
	const tr = document.createElement("tr");
	createTableData(count, tr);
	createTableData(name, tr);
	createTableData(population, tr);
	table.appendChild(tr);
};

const createTableData = (tdDate, tr) => {
	const td = document.createElement("td");
	td.innerText = tdDate;
	tr.appendChild(td);
};

btn.addEventListener("click", fetchPlanets);
const gears = document.querySelector("#gearsContainer");
