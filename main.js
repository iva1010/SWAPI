const endpoint = 'https://swapi.dev/api/planets/'
let body = document.querySelector('body')

function sendRequest(url, method = 'GET', body = null) {
    const init = {
        method: method
    }
    if (body) init.body = JSON.stringify(body)
    if (method === 'POST') init.headers = {'Content-Type': 'application/json; charset=UTF-8'}
    return fetch(url, init).then(response => response.json())
}

let planets = []
sendRequest(endpoint)
    .then(response => planets = response.results)

function displayPlanets(planets) {
    for (let i = 0; i < planets.length; i++) {
        body.innerHTML += `
        <div class="planet_${i}">
            <ul>
               <li>Name: ${planets[i].name}</li>
               <li>Climate: ${planets[i].climate}</li>
               <li>Created: ${planets[i].created}</li>
               <li>Diameter: ${planets[i].diameter}</li>
               <li>Edited: ${planets[i].edited}</li>
               <li>Gravity: ${planets[i].gravity}</li>
               <li>Orbital Period: ${planets[i].orbital_period}</li>
               <li>Population: ${planets[i].population}</li>
               <li>Rotation Period: ${planets[i].rotation_period}</li>
               <li>Surface Water: ${planets[i].surface_water}</li>
               <li>Terrain: ${planets[i].terrain}</li>    
            </ul>   
        </div>
    `
    }
}
























