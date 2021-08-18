location.href = "index.html#/index";
//router
$(document).ready(function () {
  window.onload = router();

  $(window).on("hashchange", function () {
    router();
  });

  //funciones varias
  botonesPerros();
  botonesGatos();
  botonComprar();
  botonHomeyAdmin();
  noche();

  //esconde el carrito al cargar la pagina, si no se presiona el boton "Shop"
  $("#boton-comprar").hide();
  $(".CarritoDeCompra").hide();

  //previene cerrar modal sin el boton volver
  $("#exampleModal").modal({
    backdrop: "static",
    keyboard: false, // to prevent closing with Esc button (if you want this too)
  });

  //borra el contenido del carrito al cambiar de pagina SPA
  $("#botonProductos").on("click", function () {
    $(".fs-4").text("");
  });
});
