//Base de datos de objetos creados a partir del constructor del archivo constructor.js
//prueba
$(document).ready(function () {
  producto1 = new AlimentoPerros(
    "01",
    "Royal Canin",
    59,
    3000,
    "./img/RoyalCanin1.jpg",
    "Alimento balanceado de alta calidad Premium",
    0
  );
  var producto2 = new AlimentoPerros(
    "02",
    "Pro Plan",
    41,
    2600,
    "./img/ProPlan1.png",
    "Alimento balanceado de alta calidad Premium",
    0
  );
  var producto3 = new AlimentoPerros(
    "03",
    "Eukanuba",
    32,
    2300,
    "./img/Eukanuba1.jpg",
    "Alimento balanceado de calidad Premium",
    0
  );
  var producto4 = new AlimentoPerros(
    "04",
    "Dog Chow",
    70,
    1800,
    "./img/DogChow1.jpg",
    "Alimento balanceado 'Barat'",
    0
  );
  var producto5 = new AlimentoPerros(
    "05",
    "Dogui",
    140,
    700,
    "./img/Dogui1.jpg",
    "Alimento balanceado baratito",
    0
  );
  var producto6 = new AlimentoPerros(
    "06",
    "PEPEPE",
    1400,
    70021,
    "./img/huella.jpg",
    "Alimento balanceado TRUCHO",
    0
  );

  //array de productos
  data = [producto1, producto2, producto3, producto4, producto5, producto6];

  //array de objetos guardado en Local Storage
  var guardado = localStorage.setItem("data", JSON.stringify(data));
  console.log(localStorage);

  //parseado del local storage
  var dataStorage = JSON.parse(localStorage.getItem("data"));
  console.log(dataStorage);

  //Ahora agrega dinamicamente toda la tarjeta al agregar u nuevo producto ej: crear un producto7 y sumarlo al array data. ***ACA JQUERY***
  function pintar() {
    for (i = 0; i < data.length; i++) {
      $("#filaTarjetas")
        .hide()
        .append(
          `<div class="col-md-4 col-sm-12 mt-4">
          <div class="card bg-light" id="card${i}" style="width: 18rem">
            <img class="card-img-top bg-white" id="imgC${i}" src="${dataStorage[i].img}" alt="alimento balanceado" />
            <h6>${dataStorage[i].id}</h6>
            <div class="card-body">
              <h3 id="productoC${i}" class="card-title name">${dataStorage[i].nombre}</h5>
              <p class="card-text">${dataStorage[i].descripcion}</p>
              <h4 id="precioC${i}" class="card-title text-success">$${dataStorage[i].precio}</h4>
              <h5 class="card-title">Stock: <span id="stockC${i}">${data[i].stock}</span></h5>
              <button id="boton-${data[i].id}" class="btn btn-primary" type="submit">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>`
        )
        .slideDown(300);
    }
  }
  pintar();

  function botones() {
    for (i = 0; i < data.length; i++) {
      botonesAgregarCarrito = document.querySelectorAll(`#boton-${data[i].id}`);
      botonesAgregarCarrito.forEach((botonAgregarCarrito) => {
        botonAgregarCarrito.onclick = agregarCarrito;
      });
    }
  }
  botones();

  //JQUERY esconde el nro de ID
  $("h6").hide();
  //Animaciones Jquery -primeras
  $(".CarritoDeCompra").hide();

  $(".CarritoDeCompra").delay(1000).fadeIn(800);

  //Eventos de los botones - dependiendo de cual apretes seran los datos que devuelva.

  //Esta funcion gracias a la constante card toma los elementos mas cercanos al boton presionado para devolver los datos.

  function agregarCarrito(event) {
    event.preventDefault();
    const button = event.target;
    // captura los elementos mas cercanos al boton presionado gracias a button.closest y la clase .card del div que lo contiene
    const card = button.closest(".card");
    var imagenMini = `<img src="./img/huella.jpg" alt="a balanceado" style="width: 10%; margin-bottom: 10px;"/>`;
    var id = card.querySelector("h6").textContent;
    //pintar el stock restante con cada click del respectivo boton.
    card.querySelector("span").textContent--;

    //restar del stock con cada click en el respectivo boton. Y agregar una unidad vendida.
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i].stock--;
        data[i].vendidos++;

        var carritoo = [
          data[i].nombre,
          data[i].precio,
          data[i].vendidos,
          data[i].precio * data[i].vendidos,
        ];

        $("#carrito2").show(
          `<div class="row row-${data[i].id}" id="agregados"></div>`
        );
        $(`.row-${data[i].id}`).html(
          `<div class="col-1 col-${data[i].id}">
                <div class="shopping-cart-header fila-${data[i].id}">
                  ${data[i].id}
                </div>
              </div>
              <div class="col-3 col-${data[i].id}">
                <div class="shopping-cart-header">
                  <h6>${data[i].nombre}</h6>
                </div>
              </div>
              <div class="col-2 col-${data[i].id}">
                <div class="shopping-cart-header">
                  <h6>$${data[i].precio}</h6>
                </div>
              </div>
              <div class="col-2 col-${data[i].id}">
                <div class="shopping-cart-header">
                <h6 id="cantidad-${data[i].id}">${data[i].vendidos}</h6>
                </div>
              </div>
              <div class="col-2 col-${data[i].id}">
                <div class="shopping-cart-header ">
                  <h6>$${data[i].precio * data[i].vendidos}</h6>
                </div>
                </div>
                <div class="col-2"><button id="btn-${
                  data[i].id
                }" class="btn btn-danger mb-3
                ">X</button></div>
                <hr>
              </div>
              
            </div>
          `
        );
        $(`#btn-${data[i].id}`).click(function () {
          $(`.row-${data[i].id}`).fadeOut("slow", function () {
            $(`.row-${data[i].id}`).hide();
            `${data[i].stock}` + 1000;
          });
        });
      }
      //aca funciona el X
      $(`#btn-${data[i].id}`).click(function () {
        $(`.row-${data[i].id}`).fadeOut("slow", function () {
          data[i].stock + 1000;
          $(`.row-${data[i].id}`).hide();
        });
      });

      //JQUERY Animacion concatenada. Esta funcion controla el boton eliminar "X" y borra el elemento creado al agregar al carrito.
    }
  }
});

//Problema a solucionar: Que al borrar un producto del carrito se lo pueda volver a agregar y que el stock vuelva al valor inicial.-
