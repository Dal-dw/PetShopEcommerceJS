//Base de datos de objetos creados a partir del constructor del archivo constructor.js
//prueba
$(document).ready(function () {
  //array de stock original

  data = [];
  // GET

  $.get("./db/stockGatos.json", function (datos) {
    data = datos;
    //VUELVE EL GET CON LOS DATOS

    stockOriginal = [
      `${data[0].stock}`,
      `${data[1].stock}`,
      `${data[2].stock}`,
      `${data[3].stock}`,
      `${data[4].stock}`,
      `${data[5].stock}`,
    ];
    //array de productos
    //dataa = [producto1, producto2, producto3, producto4, producto5, producto6];

    //Ahora agrega dinamicamente toda la tarjeta al agregar u nuevo producto ej: crear un producto7 y sumarlo al array data. ***ACA JQUERY***

    pintar();

    //JQUERY elementos escondidos
    $("h6").hide();
    $("#boton-comprar").hide();
    //Animaciones Jquery - al cargar la pagina primero aparecen las cards y despues el carrito.
    $(".CarritoDeCompra").hide().delay(1000).fadeIn(800);

    botones();

    //Esta funcion controla el funcionamiento del carrito.
    agregarCarrito();
  });
});
