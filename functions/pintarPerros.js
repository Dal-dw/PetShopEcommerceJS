//renderiza las tarjetas conteniendo comida de perros.
function pintar() {
  for (i = 0; i < data1.length; i++) {
    $("#filaTarjetasPerro")
      .hide()
      //.fadeIn("fast")
      .append(
        `<div class=" col-lg-2 col-md-4 col-sm-4 mt-4">
          <div class="card bg-secondary text-light" id="card${i}" style="width: 14rem; height: 30rem;">
            <img class="card-img-top bg-light"  id="imgC${i}" src="${data1[i].img}" alt="alimento balanceado" />
            <h6 class="h6">${data1[i].id}</h6>
            <div class="card-body">
              <h3 id="productoC${i}" class="card-title name text-light">${data1[i].nombre}</h5>
              <p class="card-text">${data1[i].descripcion}</p>
              <h4 id="precioC${i}" class="card-title text-info">$${data1[i].precio}</h4>
              <h5 class="card-title">Stock: <span id="stockC${i}">${data1[i].stock}</span></h5>
              <button id="boton-${data1[i].id}" class="btn btn-warning amarillo" type="submit" onclick="agregarCarritoPerros()">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>`
      );
    $("h6").hide();
  }
}
