function gatos() {
  $.get("../db/stockGatos.json", function (datos) {
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

    pintarGatos();
    botonesGatos();
    $("h6").hide();
  });
}
