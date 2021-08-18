//Mayormente baja el brillo, ese puede mejorar.
function noche() {
  $("#noche").on("click", function () {
    $("#botonesNoche").css("filter", "brightness(0.8)");
    $("body").css("background-color", "dimgray", "filter", "brightness(0.4)");
    $("#portada").css("filter", "brightness(0.7)");
    $("#filaTarjetas").css("filter", "brightness(0.8)");
    $("#filaTarjetasGatos").css("filter", "brightness(0.8)");
    $("#bienvenida").css("filter", "brightness(0.8)");
    $("#botones").css("filter", "brightness(0.7)");
    $(".modal-content").css("filter", "brightness(0.9)");
    $(".w-100").css("color", "white");
    //$("#carrito2").css("color", "white");
  });
  $("#dia").on("click", function () {
    $("#botonesNoche").css("filter", "brightness(1)");
    $("body").css("background-color", "white", "filter", "brightness(1)");
    $("#portada").css("filter", "brightness(1)");
    $("#filaTarjetas").css("filter", "brightness(1)");
    $("#filaTarjetasGatos").css("filter", "brightness(1)");
    $("#bienvenida").css("filter", "brightness(1)");
    $("#botones").css("filter", "brightness(1)");
    $(".modal-content").css("filter", "brightness(1)");
    $(".w-100").css("color", "black");
    //$("#carrito2").css("color", "black");
  });
}
