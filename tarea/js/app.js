
import curso, { estudiantes } from "./datos.js";
import reporte, { promedio, estado } from "./calculos.js";

// Crear una copia del primer estudiante usando spread
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Combinar los estudiantes usando spread
const todos = [...estudiantes, nuevo];

// Mostrar los resultados en la página
const lista = document.querySelector("#reportes");

const titulo = document.createElement("h2");
titulo.textContent = `Curso: ${curso}`;
document.body.insertBefore(titulo, lista);

todos.forEach((estudiante) => {
    const resultado = reporte(estudiante);
    const elemento = document.createElement("li");
    elemento.textContent = resultado;
    lista.appendChild(elemento);
});

// Comprobación adicional de las funciones importadas
console.log("Curso:", curso);
console.log("Promedio de Ana:", promedio(16, 18, 15));
console.log("Estado de Ana:", estado(promedio(16, 18, 15)));
