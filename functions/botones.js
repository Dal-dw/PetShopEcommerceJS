function botones() {
  botonesAgregarCarrito = document.querySelectorAll(".btn-primary");

  botonesAgregarCarrito.forEach((botonAgregarCarrito) => {
    botonAgregarCarrito.onclick = agregarCarrito;
  });
  return botones;
}
