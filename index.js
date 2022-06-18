const nombre_Pizza = document.querySelector("#nombre_Pizza");
const precio_Pizza = document.querySelector("#precio_Pizza");
const formulario = document.querySelector("#formulario");
const ingredientes = document.querySelector("#ingredientes");
const PizzaId = document.querySelector("#PizzaId");
const img = document.querySelector("#img");
const resultado = document.querySelector(".resultado");

const pizzas = [
	{
		id: 1,
		nombre: "Pepperoni",
		ingredientes: ["pepperoni", "queso", "tomate", "pimenton", "harina"],
		img: 'https://res.cloudinary.com/dcwoyu2zc/image/upload/v1655180613/assets/peperoni_bznfq6.png',
		precio: 800,
	},
	{
		id: 2,
		nombre: "Hawaiana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "piña", "harina"],
		img: 'https://res.cloudinary.com/dcwoyu2zc/image/upload/v1655180613/assets/hawaiana_p2kwab.png',
		precio: 900,
	},
	{
		id: 3,
		nombre: "Vegetariana",
		ingredientes: ["tomate", "cebolla", "rucula", "pimenton", "harina"],
		img: 'https://res.cloudinary.com/dcwoyu2zc/image/upload/v1655180613/assets/vegetarian_riijev.png',
		precio: 700,
	},
	{
		id: 4,
		nombre: "Napolitana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "jamon", "harina"],
		img: 'https://res.cloudinary.com/dcwoyu2zc/image/upload/v1655180613/assets/napolitana_t7rlqe.png',
		precio: 1000,
	},
	{
		id: 5,
		nombre: "4 quesos",
		ingredientes: ["mozzarella", "parmesano", "cheddar", "provolone", "harina"],
		img: 'https://res.cloudinary.com/dcwoyu2zc/image/upload/v1655180613/assets/4_quesos_rz9gzj.png',
		precio: 1200,
	},
	{
		id: 6,
		nombre: "Mozzarella",
		ingredientes: ["mozzarella", "tomate", "harina"],
		img: 'https://res.cloudinary.com/dcwoyu2zc/image/upload/v1655180874/assets/muzza_padptd.png',
		precio: 500,
	},
];

localStorage.setItem("pizzas", JSON.stringify(pizzas));

const pizzasLocal = JSON.parse(localStorage.getItem("pizzas"));
console.log(pizzasLocal, 'PizzaLocal')

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // Validacion
  if (PizzaId.value === "") {
    alert("Por favor ingrese un id");
    return;
  }
	const buscarId = parseInt(PizzaId.value);
	const pizzaEncontrada = pizzasLocal.filter((pizza) => pizza.id === buscarId);


	localStorage.setItem("pizzaEncontrada", JSON.stringify(pizzaEncontrada));


	let pizzaEncontradaLocal = JSON.parse(localStorage.getItem("pizzaEncontrada"));

	console.log(pizzaEncontradaLocal) //pizza que el usuario eligio (esta guardada en el localstorage)


	if (pizzaEncontradaLocal .length > 0) {
		nombre_Pizza.textContent = pizzaEncontradaLocal[0].nombre;
		precio_Pizza.textContent = "$" + pizzaEncontradaLocal[0].precio;
    	ingredientes.textContent = pizzaEncontradaLocal[0].ingredientes.join(", ");
		img.style = 'display:block'
		img.src = pizzaEncontradaLocal[0].img
    	nombre_Pizza.style.color = "#fff";
	} else {
		nombre_Pizza.textContent = "No poseemos esa pizza en nuestra base de datos";
		nombre_Pizza.style.color = "#ff0000";
		precio_Pizza.textContent = "";
    	ingredientes.textContent = "";
		img.style = 'display:none'
		resultado.style = 'height:350px'
	}
});