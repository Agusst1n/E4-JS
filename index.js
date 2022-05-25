const nombre_Pizza = document.querySelector("#nombre_Pizza");
const precio_Pizza = document.querySelector("#precio_Pizza");
const formulario = document.querySelector("#formulario");
const ingredientes = document.querySelector("#ingredientes");
const PizzaId = document.querySelector("#PizzaId");

const pizzas = [
	{
		id: 1,
		nombre: "Pepperoni",
		ingredientes: ["pepperoni", "queso", "tomate", "pimenton", "harina"],
		precio: 800,
	},
	{
		id: 2,
		nombre: "Hawaiana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "piña", "harina"],
		precio: 900,
	},
	{
		id: 3,
		nombre: "Vegetariana",
		ingredientes: ["tomate", "cebolla", "rucula", "pimenton", "harina"],
		precio: 700,
	},
	{
		id: 4,
		nombre: "Napolitana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "jamon", "harina"],
		precio: 1000,
	},
	{
		id: 5,
		nombre: "4 quesos",
		ingredientes: ["mozzarella", "parmesano", "cheddar", "provolone", "harina"],
		precio: 1200,
	},
	{
		id: 6,
		nombre: "Mozzarella",
		ingredientes: ["mozzarella", "tomate", "harina"],
		precio: 500,
	},
];


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // Validacion
  if (PizzaId.value === "") {
    alert("Por favor ingrese un id");
    return;
  }
	const buscarId = parseInt(PizzaId.value);
	const pizzaEncontrada = pizzas.filter((pizza) => pizza.id === buscarId);
	if (pizzaEncontrada.length > 0) {
		nombre_Pizza.textContent = pizzaEncontrada[0].nombre;
		precio_Pizza.textContent = "$" + pizzaEncontrada[0].precio;
    	ingredientes.textContent = pizzaEncontrada[0].ingredientes.join(", ");
    	nombre_Pizza.style.color = "#fff";
	} else {
		nombre_Pizza.textContent = "No poseemos esa pizza en nuestra base de datos";
		nombre_Pizza.style.color = "#ff0000";
		precio_Pizza.textContent = "";
    	ingredientes.textContent = "";
	}
});