const btn = document.querySelector("button")

const fetchPlanets = (data) => {
    fetch("https://swapi.co/api/planets/") //
        .then((response) => response.json())
        .then(getPlanets)
        .then()
        .catch(error => {
            console.log(error)
        })

    btn.innerText = "....loading"

}
btn.addEventListener("click", fetchPlanets)

const cont = document.querySelector(".container")

const table = document.createElement('table');
const rowHeader = document.createElement('tr')

const dataHeader1 = document.createElement('th');
const dataHeader2 = document.createElement('th');
const dataHeader3 = document.createElement('th');

dataHeader1.innerText = "PlanetName"
dataHeader2.innerText = "Population"
dataHeader3.innerText = "PlanetName"

rowHeader.appendChild(dataHeader1)
rowHeader.appendChild(dataHeader2)
rowHeader.appendChild(dataHeader3)
rowHeader.align = "center"
table.appendChild(rowHeader)


let count = 0

const getPlanets = (data) => {
    for (let planet of data.results) {
        console.log(planet)
        const row = document.createElement('tr');
        row.align = "center"

        const tableElem0 = document.createElement('td');
        tableElem0.innerText = `${++count}`

        row.appendChild(tableElem0)

        const tableElem1 = document.createElement('td');
        tableElem1.innerText = planet.name
        row.appendChild(tableElem1)

        const tableElem3 = document.createElement('td');
        tableElem3.innerText = planet.population
        row.appendChild(tableElem3)

        table.appendChild(row)
        console.log(planet.name)

        btn.innerText = "FINISHED!!"
    }
}


cont.align = "center"
cont.appendChild(table)