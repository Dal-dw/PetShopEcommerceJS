location.href = "index.html#/index";

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

  //esconde al cargar la pagina si no se presiona el boton "Shop"
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

/*  $("#boton-comprar").hide();
  $("#filaTarjetas").hide();
  $("#filaTarjetasGatos").hide();
  
  $("#botonHome").hide();

  //modo noche (toggle)
  

  //AJAX
  data = [];

  // GET Perros
  $.get("./db/stockPerros.json", function (datos) {
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

    //Renderiza Perros y esconde Gatos

    $("#filaTarjetas").html("");
    pintar();
    botonesPerros();
    $("h6").hide();
  });

  data = [];

  // GET Gatos
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

    //Renderiza Gatos

    pintarGatos();
    $("h6").hide();

    botonesGatos();
  });

  botonComprar();
  botonHomeyAdmin();
});
 */
