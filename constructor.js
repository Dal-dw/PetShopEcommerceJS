class AlimentoPerros {
  constructor(id, nombre, stock, precio, img, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.img = img;
    this.descripcion = descripcion;
  }
  calcStock(comprado) {
    let restante = comprado - this.stock;
    return restante;
  }
}
