import { findAndProccesLink } from "./main";
import { inboxCreateComp } from "./componet/inbox/inbox";
import { sentCreateComp } from "./componet/send/send";

export function handleRoute(route) {
  const containeEl: any = document.querySelector(".container");
  console.log("funcion del handler", route, containeEl);

  const routes = [
    {
      path: /\/sent/,
      handler: () => sentCreateComp,
    },
    {
      path: /\/inbox/,
      handler: () => inboxCreateComp,
    },
  ];
  for (const r of routes) {
    if (r.path.test(route)) {
      const el: any = r.handler();
      console.log(el, "router log");

      const containeEl = document.querySelector(".contenedor");
      if (containeEl?.firstChild) {
        containeEl.firstChild.remove();
        containeEl?.appendChild(el);
      }
      findAndProccesLink(el);
    }
  }
}
