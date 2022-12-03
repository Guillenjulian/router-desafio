import "./send.css";

export function sentCreateComp() {
  const inboxEl = document.createElement("div");

  inboxEl.innerHTML = ` 
  <div class="container__sent">

  
  <h1 class="prueba2">HOLA soy Sent</h1>
  <ul>
  <li><a href="/inbox/prueba1">prueba 1</a></li>
  <li><a href="/inbox/prueba2">prueba 2</a></li>
  <li><a href="/inbox/prueba3">prueba 3</a></li>
  </ul> 
  </div>
   `;
  return inboxEl;
}
