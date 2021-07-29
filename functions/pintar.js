function pintar() {
  for (i = 0; i < data.length; i++) {
    $("#filaTarjetas")
      .hide()
      .append(
        `<div class="col-md-4 col-sm-12 mt-4">
          <div class="card bg-light" id="card${i}" style="width: 18rem;">
            <img class="card-img-top bg-white" id="imgC${i}" src="${data[i].img}" alt="alimento balanceado" />
            <h6>${data[i].id}</h6>
            <div class="card-body">
              <h3 id="productoC${i}" class="card-title name">${data[i].nombre}</h5>
              <p class="card-text">${data[i].descripcion}</p>
              <h4 id="precioC${i}" class="card-title text-success">$${data[i].precio}</h4>
              <h5 class="card-title">Stock: <span id="stockC${i}">${data[i].stock}</span></h5>
              <button id="boton-${data[i].id}" class="btn btn-primary" type="submit" onclick="agregarCarrito()">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>`
      )
      .slideDown(700);
  }
}
