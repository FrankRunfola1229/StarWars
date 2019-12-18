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
	fetch("https://swapi.co/api/planets/") //
		.then((response) => response.json())
		.then(getPlanets)
		.catch((error) => console.log(`fetch error!!${error}`));

	gears.style.display = "inline-block";
	btn.innerText = "....loading";
};

const getPlanets = (data) => {
	for (let planet of data.results) {
		createTableRow(++count, planet.name, planet.population);
	}
	btn.innerText = "FINISHED!!";
	gears.style.display = "none";
	total.innerText = `Total=${count}`;
};

const createTableRow = (count, name, population) => {
	const tr = document.createElement("tr");
	createTh(count, tr);
	createTd(name, tr);
	createTd(population, tr);
	tableBody.appendChild(tr);
};

const createTh = (data, tr) => {
	const th = document.createElement("th");
	th.innerText = data;
	th.setAttribute("scope", "row");
	tr.appendChild(th);
};

const createTd = (data, tr) => {
	const td = document.createElement("td");
	td.innerText = data;
	tr.appendChild(td);
};

btn.addEventListener("click", fetchPlanets);
