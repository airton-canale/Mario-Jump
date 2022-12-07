const marioJump = () => {
        setTimeout(() => {
          window.location.search = "?mario-run";
        }, 300)
}
  
const startGame = () => {
    window.location.search = "?dashboard";
  };
  
  const routes = [...document.querySelectorAll(".route")];
  
  routes.forEach((r) => r.classList.remove("visible"));
  
  const minhaRota = routes.find(
    (r) => r.getAttribute("rota") === window.location.search.slice(1)
    );
  
    window.addEventListener('load', () => !window.location.search && (window.location.search = 'dashboard' ))
  
  minhaRota.classList.add("visible");
  
  