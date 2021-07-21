//Base de datos de objetos creados a partir del constructor del archivo constructor.js

var producto1 = new AlimentoPerros(
  "RoyalCanin",
  "Royal Canin",
  59,
  3000,
  "./img/RoyalCanin1.jpg",
  "Alimento balanceado de alta calidad Premium"
);
var producto2 = new AlimentoPerros(
  "ProPlan",
  "Pro Plan",
  41,
  2600,
  "./img/ProPlan1.png",
  "Alimento balanceado de alta calidad Premium"
);
var producto3 = new AlimentoPerros(
  "Eukanuba",
  "Eukanuba",
  32,
  2300,
  "./img/Eukanuba1.jpg",
  "Alimento balanceado de calidad Premium"
);
var producto4 = new AlimentoPerros(
  "DogChow",
  "Dog Chow",
  70,
  1800,
  "./img/DogChow1.jpg",
  "Alimento balanceado 'Barat'"
);
var producto5 = new AlimentoPerros(
  "Dogui",
  "Dogui",
  140,
  700,
  "./img/Dogui1.jpg",
  "Alimento balanceado baratito"
);
var producto6 = new AlimentoPerros(
  "PEPEPE",
  "PEPEPE",
  1400,
  70021,
  "./img/huella.jpg",
  "Alimento balanceado TRUCHO"
);

//array de productos
data = [producto1, producto2, producto3, producto4, producto5, producto6];

//array de objetos guardado en Local Storage
var guardado = localStorage.setItem("data", JSON.stringify(data));
console.log(localStorage);

//parseado del local storage
var dataStorage = JSON.parse(localStorage.getItem("data"));
console.log(dataStorage);

//Ahora agrega dinamicamente toda la tarjeta al agregar u nuevo producto ej: crear un producto7 y sumarlo al array data.***********(nuevo)
function pintar() {
  for (i = 0; i < data.length; i++) {
    $("#filaTarjetas").append(
      `<div class="col-md-4 col-sm-12 mt-4">
          <div class="card bg-light" id="card${i}" style="width: 18rem">
            <img class="card-img-top bg-white" id="imgC${i}" src="${dataStorage[i].img}" alt="alimento balanceado" />
            <div class="card-body">
              <h3 id="productoC${i}" class="card-title">${dataStorage[i].nombre}</h5>
              <p class="card-text">${dataStorage[i].descripcion}</p>
              <h4 id="precioC${i}" class="card-title text-success">$${dataStorage[i].precio}</h4>
              <h5 class="card-title">Stock: <span id="stockC${i}">${dataStorage[i].stock}</span></h5>
              <button class="btn btn-primary" type="submit">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>`
    );
  }
}

pintar();

//Eventos de los botones - dependiendo de cual apretes seran los datos que devuelva.
const botonesAgregarCarrito = document.querySelectorAll(".btn-primary");
botonesAgregarCarrito.forEach((botonAgregarCarrito) => {
  botonAgregarCarrito.onclick = agregarCarrito;
});

//Esta funcion gracias a la constante card toma los elementos mas cercanos al boton presionado para devolver los datos.
function agregarCarrito(event) {
  const button = event.target;
  const card = button.closest(".card");
  let producto = card.querySelector(".card-title").textContent;
  var precio = card.querySelector(".text-success").textContent;
  var precioNum = precio.slice(1);
  console.log(precio);
  var stock = card.querySelector("span").textContent;
  var imagenMini = `<img src="./img/huella.jpg" alt="a balanceado" style="width: 10%; margin-bottom: 10px;"/>`;
  var cantidad = 2;

  //array de lo agregado al carrito para pintarlo en el carrito
  seleccionados = [
    imagenMini,
    producto,
    parseInt(precioNum),
    parseInt(stock),
    parseInt(cantidad),
    (precioFinal = precioNum * cantidad),
  ];

  //esto es lo que se pinta en el carrito, todavia debo resolver algunos problemas, por ejemplo la "cantidad" y la suma del total a pagar.
  //otro problema que tengo que resolver es que al cliqkear dos veces, se sume la cantidad en vez de pintarse una nueva fila en el carrito.
  const carrito = document.getElementById("carrito2");
  var seleccion = `<div class="row">
              <div class="col-3">
                <div class="shopping-cart-header">
                  ${seleccionados[0]}
                </div>
              </div>
              <div class="col-3">
                <div class="shopping-cart-header">
                  <h6>${seleccionados[1]}</h6>
                </div>
              </div>
              <div class="col-2">
                <div class="shopping-cart-header">
                  <h6>$${seleccionados[2]}</h6>
                </div>
              </div>
              <div class="col-2">
                <div class="shopping-cart-header">
                <h6 >${seleccionados[4]}</h6>
                </div>
              </div>
              <div class="col-2">
                <div class="shopping-cart-header">
                  <h6>$${seleccionados[5]}</h6>
                </div>
              </div>
              <hr>
            </div>
          </div>`;
  function pintar2() {
    carrito.innerHTML += seleccion;
  }
  pintar2();

  $(".btn-primary").click(function (event) {
    event.preventDefault();
  });
}
//FALTA: SUMAR TOTALES, NO DUPLICAR OBJ CARRITO, PODER MODIFICAR CANTIDAD.
