//import { handleRoute } from "handletRoute";
function goTo(path) {
    history.pushState({}, "", path);
// handleRoute(path);
}
function findAndProccesLink() {
    const els = document.querySelectorAll(".links");
    console.log(els);
    for (let links of els)links.addEventListener("click", (e)=>{
        e.preventDefault();
    });
}
(function main() {
    findAndProccesLink();
    window.addEventListener("load", ()=>{
    //  handleRoute(location.pathname);
    });
})();

//# sourceMappingURL=index.bc9084ba.js.map
