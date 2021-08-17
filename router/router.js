const routes = [
  { path: "/index", action: "index" },
  { path: "/users", action: "users", admin: true },
  { path: "/shop", action: "perros" },
  { path: "/nosotros", action: "nosotros" },
];

const router = () => {
  var currentPath = location.hash.slice(1);

  var pathToGo = routes.find((p) => p.path == currentPath);

  switch (pathToGo.action) {
    case routes[0].action: //Index
      $.get("./views/home.html", function (data) {
        $("#bienvenida").html(data);
      });

      break;
    case routes[1].action: //Nosotros
      $.get("./views/users.html", function (data) {
        $("#bienvenida").html(data);
      });
      break;
    case routes[2].action: //Shop
      $.get("./views/shop.html", function (data) {
        $("#bienvenida").html(data);
      });
      break;
    case routes[3].action: //Nosotros
      $.get("./views/nosotros.html", function (data) {
        $("#bienvenida").html(data);
      });
      break;

    default:
      break;
  }
};
