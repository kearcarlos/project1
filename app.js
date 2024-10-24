const express = require('express');
const app = express();
const port = 8080;

// CODI ÚTIL

let lista = [
  { nombre: "JS", funcionalidad: "back y front", caracteristicas: "flexible" },
  {
    nombre: "Java",
    funcionalidad: "back y front",
    caracteristicas: "intransigente",
  },
  { nombre: "Python", funcionalidad: "back", caracteristicas: "flexible" },
  { nombre: "PHP", funcionalidad: "back", caracteristicas: "flexible" },
  { nombre: "C++", funcionalidad: "back", caracteristicas: "intransigente" },
];


app.get('/', (req, res) => res.send('Hello Upgrad v2 :)'));

app.get("/lista", (req, res) => {
  let frontend = `<div id="print" style="display: flex; flex-wrap: wrap">`;
  for (let i = 0; i < lista.length; i++) {
    frontend += `
    <div class="card" style="width: 10%; border: 2px black solid; margin: 5px; text-align: center">
    <h1>${lista[i].nombre}</h1>
    <p>${lista[i].funcionalidad}</p>
    <p>${lista[i].caracteristicas}</p>
    </div>`;
  }
  frontend += `</div>`;
  res.send(frontend);
});



app.listen(port);
console.log(`App running on http://localhost:${port}`);
