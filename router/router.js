const routes = [
  { path: "/index", action: "index" },
  { path: "/gatos2", action: "gatos2" },
  { path: "/perros2", action: "perros2" },
];

const router = () => {
  //Elimino el # y me queda el path que se encuentra dentro de mis rutas
  let currentPath = location.hash.slice(1);
  //Uso la funcion 'find' para capturar los datos dentro de mi route
  let pathToGo = routes.find((p) => p.path == currentPath);

  //Gracias al action sabemos que vamos a renderizar en el div #app
  switch (pathToGo.action) {
    case routes[0].action: //index
      $("#filaTarjetas").html("Welcome to Indexxx");
      break;
    case routes[1].action: //contact
      $.get("/views/gatos2.html", function (data) {
        $("#filaTarjetas").html(data);
      });
      break;
    case routes[2].action: //contact
      $.get("./views/perros2.html", function (data) {
        $("#filaTarjetas").html(data);
      });
      break;
    default:
      break;
  }
};
