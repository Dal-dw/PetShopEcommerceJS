//Esta funcion gracias a la constante card toma los elementos mas cercanos al boton presionado para devolver los datos.
function agregarCarritoGatos(e) {
  const button = e.target;

  // captura los elementos mas cercanos al boton presionado gracias a button.closest y la clase .card del div que lo contiene
  const card = button.closest(".card");

  id = card.querySelector(".h6").textContent;

  //pintar el stock restante con cada click del respectivo boton.
  card.querySelector("span").textContent--;

  //restar del stock con cada click en el respectivo boton. Y agregar una unidad vendida.
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      data[i].stock--;
      data[i].vendidos++;

      var carritoo = [
        data[i].nombre,
        data[i].precio,
        data[i].vendidos,
        data[i].precio * data[i].vendidos,
        data[i].stock,
        data[i].img,
      ];

      $("#carrito2").show(
        `<div class="row ${data[i].id}" id="agregados"></div>`
      );
      $(`.row-${data[i].id}`).html(
        `<div class="col-1 columna-${data[i].id}">
                <div class="shopping-cart-header">
                  <img src="${
                    data[i].img
                  }" alt="mini-foto" style="width: 50%" ; />
                </div>
              </div>
              <div class="col-3 columna-${data[i].id}">
                <div class="shopping-cart-header text-dark">
                  <h6 class="fs-4">${data[i].nombre}</h6>
                </div>
              </div>
              <div class="col-2 columna-${data[i].id}">
                <div class="shopping-cart-header text-dark">
                  <h6 class="fs-4">$${data[i].precio}</h6>
                </div>
              </div>
              <div class="col-2 columna-${data[i].id}">
                <div class="shopping-cart-heade ">
                <h6 class="fs-4 text-center text-dark" id="cantidad-${
                  data[i].id
                }">${data[i].vendidos}</h6>
                </div>
              </div>
              <div class="col-2 columna-${data[i].id}">
                <div class="shopping-cart-header ">
                  <span class="text-info mx-1">$</span><h6 style="display: inline;" class="fs-4 text-info precioUnitario-${
                    data[i].id
                  }">${data[i].precio * data[i].vendidos}</h6>
                </div>
                </div>
                <div class="col-2"><button id="btn-${
                  data[i].id
                }" class="btn btn-danger mb-3
                ">X</button></div>
                <hr class= "mt-3">
              </div>
              
            </div>`
      );

      //borra el producto agregado al carrito.
      $(`#btn-${data[i].id}`).click(function () {
        $(`.row-${data[i].id}`).text("");

        //devuelve el contador de Stock al valor original en pantalla.
        $(`#stockC${[i]}`).text(`${stockOriginal[i]}`);

        //devuelve el contador de Stock al valor original en la base de datos.
        data[4].stock = parseInt(`${stockOriginal[i]}`);

        //vuelve el contador del carrito a 0
        data[i].vendidos = 0;
      });
    }
  }
}
