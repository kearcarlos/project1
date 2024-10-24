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

app.listen(port);
console.log(`App running on http://localhost:${port}`);
