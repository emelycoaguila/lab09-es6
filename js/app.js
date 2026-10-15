import bienvenida, { iva, calcularTotal, formatearMoneda } from "./utils.js";

console.log("Laboratorio 09 listo");
// ===== Ejercicio 2: let, const y arrow functions =====

// Función tradicional ES5
function sumaES5(a, b) {
    if (b === undefined) b = 0;
    return a + b;
}

// Arrow function ES6+
const suma = (a, b = 0) => a + b;

console.log(sumaES5(2, 3), suma(2, 3), suma(2));
// Resultado: 5 5 2

// Saludo con parámetro por defecto
const saludar = (nombre = "invitado") => `Hola, ${nombre}`;

console.log(saludar(), saludar("Ana"));
// Resultado: Hola, invitado Hola, Ana

// Crear un objeto con una arrow function
const crearProducto = (nombre, precio) => ({ nombre, precio });

console.log(crearProducto("Mouse", 45));
// Resultado: { nombre: 'Mouse', precio: 45 }
const descuento = 0.10;
// descuento = 0.20;

// ===== Ejercicio 3: Desestructuración =====

// Desestructuración de objetos
const persona = { nombre: "Ana", edad: 22 };
const { nombre, edad, ciclo = "V" } = persona;

console.log(nombre, edad, ciclo);
// Resultado: Ana 22 V

// Desestructuración de arreglos
const [primero, segundo] = [10, 20];

console.log(primero, segundo);
// Resultado: 10 20

// Desestructuración en parámetros
const mostrar = ({ nombre, precio }) => `${nombre}: S/ ${precio}`;

console.log(mostrar({ nombre: "Teclado", precio: 89 }));
// Resultado: Teclado: S/ 89


// ===== Ejercicio 4: Spread y rest =====

// Spread con arreglos
const base = [1, 2];
const copia = [...base, 3];

console.log(base, copia);
// Resultado: [1, 2] [1, 2, 3]

// Spread con objetos
const producto = { nombre: "Laptop", precio: 2500 };
const oferta = { ...producto, precio: 2300 };

console.log(oferta);
// Resultado: {nombre: 'Laptop', precio: 2300}

// Rest en parámetros
const sumar = (...nums) => nums.reduce((t, n) => t + n, 0);

console.log(sumar(1, 2, 3, 4));
// Resultado: 10

// Rest en desestructuración
const [ganador, ...otros] = ["Ana", "Luis", "Rosa"];

console.log(ganador, otros);
// Resultado: Ana ['Luis', 'Rosa']

// ===== Ejercicio 5: Módulos =====

console.log(bienvenida("Ana"));

const productos = [
    { nombre: "Mouse", precio: 45, cantidad: 2 },
    { nombre: "Teclado", precio: 189, cantidad: 1 }
];

const lista = document.querySelector("#lista");

productos.forEach(({ nombre, precio, cantidad }) => {
    const subtotal = formatearMoneda(calcularTotal(precio, cantidad));
    lista.innerHTML += `<li>${nombre} x${cantidad} = ${subtotal}</li>`;
});

const total = productos.reduce(
    (t, { precio, cantidad }) => t + calcularTotal(precio, cantidad),
    0
);

document.querySelector("#total").textContent =
    `Total con IGV (${iva * 100}%): ${formatearMoneda(total)}`;
