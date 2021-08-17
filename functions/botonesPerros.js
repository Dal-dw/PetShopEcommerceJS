function botonesPerros() {
  botonesAgregarCarrito = document.querySelectorAll(".amarillo");

  botonesAgregarCarrito.forEach((botonAgregarCarrito) => {
    botonAgregarCarrito.onclick = agregarCarritoPerros;
    //botonAgregarCarrito.onclick = agregarCarritoGatos;
  });
  // esconde Gatos al apretar el boton Perros

  return botonesPerros;
}
