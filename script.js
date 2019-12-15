const table = document.createElement('table');

table.style.border = "5px solid red"

console.log("hello")
fetch("https://swapi.co/api/planets/") //
    .then((response) => response.json())
    .then(data => {
        for (let planet of data.results) {

            console.log(planet)
            const row = document.createElement('tr');
            row.style.border = "2px solid red"
            row.align = "center"

            const tableElem1 = document.createElement('td');
            tableElem1.style.border = "2px solid red"
            tableElem1.style.width = "100px"
            tableElem1.style.height = "100px"
            tableElem1.innerText = planet.name
            row.appendChild(tableElem1)

            const tableElem2 = document.createElement('td');
            tableElem2.style.border = "2px solid red"
            tableElem2.style.width = "100px"
            tableElem2.style.height = "100px"
            tableElem2.innerText = planet.terrain
            row.appendChild(tableElem2)

            const tableElem3 = document.createElement('td');
            tableElem3.style.border = "2px solid red"
            tableElem3.style.width = "100px"
            tableElem3.style.height = "100px"
            tableElem3.innerText = planet.population
            row.appendChild(tableElem3)
            table.appendChild(row)


            console.log(planet.name)
        }
    })


const cont = document.querySelector(".container")
cont.align = "center"
cont.appendChild(table)