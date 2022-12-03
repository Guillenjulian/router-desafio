import { handleRoute } from "./handletRoute";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
  // findAndProccesLink();
}

export function findAndProccesLink(contenedor: any = document) {
  const els = contenedor.querySelectorAll(".links");
  //console.log(els);

  for (let links of els) {
    links.addEventListener("click", (e: any) => {
      e.preventDefault();
      const ruta = (e.target as any).getAttribute("href");
      console.log(ruta, "ruta");
      goTo(ruta);
    });
  }
}

(function main() {
  // findAndProccesLink();

  const elemente = document.querySelector(".links") as HTMLAnchorElement;
  //console.log(elemente, "elemento funcion main");

  elemente.addEventListener("click", () => goTo("/inbox"));
  elemente.addEventListener("click", () => goTo("/sent"));

  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
})();
