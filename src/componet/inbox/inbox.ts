import "./inbox.css";

export function inboxCreateComp() {
  const inboxEl = document.createElement("div");

  inboxEl.innerHTML = ` 
  <div class="containe__inbox">
  <h1 class="prueba2">HOLA soy inbox</h1>
  <ul>
    <li><a href="/inbox/prueba1">prueba 1</a></li>
    <li><a href="/inbox/prueba2">prueba 2</a></li>
    <li><a href="/inbox/prueba3">prueba 3</a></li>
  </ul>
  </div> `;
  return inboxEl;
}
