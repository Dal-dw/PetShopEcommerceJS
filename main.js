//Base de datos de objetos creados a partir del constructor del archivo constructor.js
//prueba

window.onload = router();

//Al momento que el hash se modifique en la url de la web debemos re rutear
$(window).on("hashchange", function () {
  router();
});
botones();
agregarCarrito();
