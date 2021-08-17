function perros() {
  // GET Perros
  $.get("../db/stockPerros.json", function (datos) {
    data1 = datos;
    //VUELVE EL GET CON LOS DATOS

    stockOriginal = [
      `${data1[0].stock}`,
      `${data1[1].stock}`,
      `${data1[2].stock}`,
      `${data1[3].stock}`,
      `${data1[4].stock}`,
      `${data1[5].stock}`,
    ];

    $("h6").hide();

    //pinta las tarjetas con los productos obtenidos del JSON dinamicamente
    pintar();

    //controla lo que hace los botones "agregar al carrito" de las tarjetas con alimento de perros
    botonesPerros();
    $("#boton-comprar").fadeIn("slow");
    $(".CarritoDeCompra").fadeIn("slow");
    $("#botonHome").show();
    $("#filaTarjetasGato").hide();
    //muestra perros y oculta gatos (y viceversa)
    $("#mostrarPerros").on("click", function () {
      $("#filaTarjetasGato").hide();
      $("#filaTarjetasPerro").fadeIn("fast");
    });
    $("#mostrarGatos").on("click", function () {
      $("#filaTarjetasPerro").hide();
      $("#filaTarjetasGato").fadeIn("fast");
    });
  });
}
