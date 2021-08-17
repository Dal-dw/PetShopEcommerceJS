function pintarGatos() {
  for (i = 0; i < data.length; i++) {
    $("#filaTarjetasGato")
      .hide()
      //.fadeIn("fast")
      .append(
        `<div class=" col-lg-2 col-md-4 col-sm-4 mt-4">
          <div class="card bg-secondary text-light" id="cardd${i}" style="width: 14rem; height: 30rem;">
            <img class="card-img-top bg-dark" id="imgC${i}" src="${data[i].img}" alt="alimento balanceado" />
            <h6 class="h6">${data[i].id}</h6>
            <div class="card-body">
              <h3 id="productoCC${i}" class="card-title name">${data[i].nombre}</h5>
              <p class="card-text">${data[i].descripcion}</p>
              <h4 id="precioCC${i}" class="card-title text-info">$${data[i].precio}</h4>
              <h5 class="card-title">Stock: <span id="stockCC${i}">${data[i].stock}</span></h5>
              <button id="botonn-${data[i].id}" class="btn btn-success verde" type="submit" onclick="agregarCarritoGatos()">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>`
      );
    $("h6").hide();
  }
}
