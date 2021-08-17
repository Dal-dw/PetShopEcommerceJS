$("#panelAdmin").hide();
$("#panelUser").hide();
users = [];

$.get("../db/users.json", function (datos) {
  data = datos;

  users = [datos[0], datos[1], datos[2], datos[3]];

  //Controla el login.
  controlUsuarios();
});
