function botonHomeyAdmin() {
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
}
