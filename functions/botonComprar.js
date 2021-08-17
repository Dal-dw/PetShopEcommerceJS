function botonComprar() {
  $("#boton-comprar").on("click", function () {
    // Suma los precios finales de cada entrada en el carrito y pinta en el modal el precio total.

    preciosUnitarios = [
      parseInt($(".precioUnitario-01").html()),
      parseInt($(".precioUnitario-02").html()),
      parseInt($(".precioUnitario-03").html()),
      parseInt($(".precioUnitario-04").html()),
      parseInt($(".precioUnitario-05").html()),
      parseInt($(".precioUnitario-06").html()),
      parseInt($(".precioUnitario-07").html()),
      parseInt($(".precioUnitario-08").html()),
      parseInt($(".precioUnitario-09").html()),
      parseInt($(".precioUnitario-10").html()),
      parseInt($(".precioUnitario-11").html()),
      parseInt($(".precioUnitario-12").html()),
    ];

    //Array limpio sin los Nan
    myArrClean = preciosUnitarios.filter(Number);
    //suma los valores del array limpio
    var precioTotal = 0;
    for (let i = 0; i < myArrClean.length; i++) {
      precioTotal += myArrClean[i];
    }
    //pinta en el modal
    $("#precioTotal").html(precioTotal);

    //pinta en el modal los productos del carrito
    var orden = $("#carrito2").html();
    var ordenText = $("#carrito2").text();
    $(".modal-body").html(orden);
    $(".btn-danger").hide();
    //eventualmente este dato se podría enviar al backend
    var ordenAlBackend = ordenText;
  });
  //esconde el boton borrar producto para que no se puedan eliminar desde el modal.
  $("#cancelar").on("click", function () {
    $(".btn-danger").fadeIn();
  });
  $("#botonX").on("click", function () {
    $(".btn-danger").fadeIn();
  });
}
