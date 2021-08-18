//botones "agregar al carrito" de cada tarjeta.
function botonesGatos() {
  botonesAgregarCarrito = document.querySelectorAll(".verde");

  botonesAgregarCarrito.forEach((botonAgregarCarrito) => {
    //botonAgregarCarrito.onclick = agregarCarritoPerros;
    botonAgregarCarrito.onclick = agregarCarritoGatos;
  });
  // esconde Perros al apretar el boton Gatos
  $("#botonGatos").on("click", function () {
    $("#filaTarjetas").hide();
    $("#filaTarjetasGatos").fadeIn();
    $("#bienvenida").hide();
    $(".CarritoDeCompra").show();
    $("#botonHome").show();
  });
  return botonesGatos;
}
