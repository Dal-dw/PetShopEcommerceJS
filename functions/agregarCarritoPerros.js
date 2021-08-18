//Esta funcion gracias a la constante card toma los elementos mas cercanos al boton presionado para devolver los datos.
function agregarCarritoPerros(e) {
  const button = e.target;

  // captura los elementos mas cercanos al boton presionado gracias a button.closest y la clase .card del div que lo contiene

  const card = button.closest(".card");

  var id = card.querySelector(".h6").textContent;
  //pintar el stock restante con cada click del respectivo boton.
  card.querySelector("span").textContent--;

  //restar del stock con cada click en el respectivo boton. Y agregar una unidad vendida.
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].id == id) {
      data1[i].stock--;
      data1[i].vendidos++;

      //$("#boton-comprar").show();
      $("#carrito2").show(
        `<div class="row row-${data1[i].id} bg-light" id="agregadosP"></div>`
      );
      $(`.row-${data1[i].id}`).html(
        `<div class="col-1 col-${data1[i].id}">
                <div class="shopping-cart-header fila-${data1[i].id}">
                  <img src="${
                    data1[i].img
                  }" alt="mini-foto" style="width: 50%" ; />
                </div>
              </div>
              <div class="col-3 col-${data1[i].id}">
                <div class="shopping-cart-header p">
                  <h6 class="fs-4 p">${data1[i].nombre}</h6>
                </div>
              </div>
              <div class="col-2 col-${data1[i].id}">
                <div class="shopping-cart-header p">
                  <h6 class="fs-4 p">$${data1[i].precio}</h6>
                </div>
              </div>
              <div class="col-2 col-${data1[i].id}">
                <div class="shopping-cart-header p">
                <h6 class="fs-4 text-center p" id="cantidadP-${data1[i].id}">${
          data1[i].vendidos
        }</h6>
                </div>
              </div>
              <div class="col-2 col-${data1[i].id}">
                <div class="shopping-cart-header p ">
                  <span class="text-info mx-1">$</span><h6 style="display: inline;" class="fs-4 text-info precioUnitario-${
                    data1[i].id
                  }">${data1[i].precio * data1[i].vendidos}</h6>
                </div>
                </div>
                <div class="col-2"><button id="btn-${
                  data1[i].id
                }" class="btn btn-danger p mb-3
                ">X</button></div>
                <hr class= "mt-3">
              </div>
              
            </div>`
      );

      //borra el producto agregado al carrito.
      $(`#btn-${data1[i].id}`).click(function () {
        $(`.row-${data1[i].id}`).text("");

        //devuelve el contador de Stock al valor original en pantalla.
        $(`#stockC${[i]}`).text(`${stockOriginal[i]}`);

        //devuelve el contador de Stock al valor original en la base de datos.
        data1[4].stock = parseInt(`${stockOriginal[i]}`);

        //vuelve el contador del carrito a 0
        data1[i].vendidos = 0;
      });
    }
  }
}
