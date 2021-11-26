import "./pages/Home";
import { Router } from "@vaadin/router";

function initRouter() {
  const router = new Router(document.querySelector("#app"));

  router.setRoutes([
    {
      path: "/",
      component: "my-home",
    },
    {
      path: "/about",
      component: "my-about",
      action: () => import("./pages/About"),
    },
  ]);
}

window.addEventListener("load", () => initRouter());
