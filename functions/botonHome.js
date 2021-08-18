//Simplemente el comportamiento del boton Home cuando uno está o no en la página HOME.
function botonHomeyAdmin() {
  $("#botonHome").hide();
  $("#botonHome").on("click", function () {
    $("#filaTarjetas").hide();
    $("#filaTarjetasGatos").hide();
    $("#bienvenida").fadeIn();
    $(".CarritoDeCompra").hide();
    $("#botonHome").hide();
  });
  $("#botonAdmin").on("click", function () {
    $("#filaTarjetas").hide();
    $("#filaTarjetasGatos").hide();
    $("#bienvenida").fadeIn();
    $(".CarritoDeCompra").hide();
    $("#botonHome").show();
  });
  $("#botonProductos").on("click", function () {
    $("#filaTarjetas").hide();
    $("#filaTarjetasGatos").hide();
    $("#bienvenida").fadeIn();
    $(".CarritoDeCompra").hide();
    $("#botonHome").show();
  });
}
