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
let url = "https://swapi.co/api/planets/";

const fetchNextPlanets = () => {
	if (!url) {
		while (tableBody.hasChildNodes()) {
			tableBody.removeChild(tableBody.firstChild);
		}
		url = "https://swapi.co/api/planets/"; // Start from beggining
	}

	fetch(url)
		.then((response) => response.json()) // PROMISE RETURNED AS RESOLVED
		.then(getPlanets)
		.catch((error) => console.log(`fetch error!!${error}`)); // PROMISE RETURNED AS REJECTED
	// ....WHILE API IS LOADING.....
	gears.style.visibility = "visible"; // SHOW LOADING GEARS
	btn.innerText = "....loading";
};

const getPlanets = (data) => {
	for (let planet of data.results) {
		const tr = document.createElement("tr");
		createTh(++count, tr);
		createTd(planet.name, tr);
		createTd(planet.population, tr);
		tableBody.appendChild(tr);
	}
	btn.innerText = `GET    ${url}`;
	gears.style.visibility = "hidden"; // HIDE LOADING GEARS
	total.innerText = `Total=${count}`;
	url = data.next;
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

btn.textContent = url;
btn.addEventListener("click", fetchNextPlanets);
