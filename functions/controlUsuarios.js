//Sistema de Login
function controlUsuarios() {
  $("form").submit(function (event) {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    event.preventDefault();

    switch (usuario) {
      case users[0].userName:
        if (contraseña == users[0].password) {
          $(function () {
            $("#exampleModal").modal("toggle");
          });
          $("#panelAdmin").fadeIn("slow");
          $("#informacionAdmin").html(`
            <ul class="list-group">
              <li class="list-group-item">USUARIO: ${data[0].userName}</li>

              <li class="list-group-item list-group-item-primary">
                NOMBRE: ${data[0].name}
              </li>
              <li class="list-group-item list-group-item-secondary">
                APELLIDO: ${data[0].surname}
              </li>
              <li class="list-group-item list-group-item-success">
                ADMINISTRADOR: ${data[0].isAdmin}
              </li>
              
            </ul>`);
          $("#panelUser").hide();
        } else {
          alert("contraseña incorrecta");
        }
        break;
      case users[1].userName:
        if (contraseña == users[1].password) {
          $(function () {
            $("#exampleModal").modal("toggle");
          });
          $("#panelUser").fadeIn("slow");
          $("#informacionUser").html(`
            <ul class="list-group">
              <li class="list-group-item">USUARIO: ${data[1].userName}</li>

              <li class="list-group-item list-group-item-primary">
                NOMBRE: ${data[1].name}
              </li>
              <li class="list-group-item list-group-item-secondary">
                APELLIDO: ${data[1].surname}
              </li>
              <li class="list-group-item list-group-item-success">
                ADMINISTRADOR: ${data[1].isAdmin}
              </li>
              
            </ul>`);
          $("#panelAdmin").hide();
        } else {
          alert("contraseña incorrecta");
        }
        break;
      case users[2].userName:
        if (contraseña == users[2].password) {
          $(function () {
            $("#exampleModal").modal("toggle");
          });
          $("#panelUser").fadeIn("slow");
          $("#informacionUser").html(`
            <ul class="list-group">
              <li class="list-group-item">USUARIO: ${data[2].userName}</li>

              <li class="list-group-item list-group-item-primary">
                NOMBRE: ${data[2].name}
              </li>
              <li class="list-group-item list-group-item-secondary">
                APELLIDO: ${data[2].surname}
              </li>
              <li class="list-group-item list-group-item-success">
                ADMINISTRADOR: ${data[2].isAdmin}
              </li>
              
            </ul>`);
          $("#panelAdmin").hide();
        } else {
          alert("contraseña incorrecta");
        }
        break;
      case users[3].userName:
        if (contraseña == users[3].password) {
          $(function () {
            $("#exampleModal").modal("toggle");
          });
          $("#panelUser").fadeIn("slow");
          $("#informacionUser").html(`
            <ul class="list-group">
              <li class="list-group-item">USUARIO: ${data[3].userName}</li>

              <li class="list-group-item list-group-item-primary">
                NOMBRE: ${data[3].name}
              </li>
              <li class="list-group-item list-group-item-secondary">
                APELLIDO: ${data[3].surname}
              </li>
              <li class="list-group-item list-group-item-success">
                ADMINISTRADOR: ${data[3].isAdmin}
              </li>
              
            </ul>`);
          $("#panelAdmin").hide();
        } else {
          alert("contraseña incorrecta");
        }
        break;

      default:
        alert("Lo lamentamos, no tenemos registrado a" + " " + usuario + ".");
    }
  });
}
