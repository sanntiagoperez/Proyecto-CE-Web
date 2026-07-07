const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme","light");
    }else{
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme","dark");
    }

});

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}
// ============================
// CARRUSELES (Maquinaria, Herramientas, etc.)
// ============================
// Se busca cada bloque .carrusel presente en la página y se le
// engancha su propio prev/next, para que funcionen de forma
// independiente sin importar cuántos carruseles haya.

const carruseles = document.querySelectorAll(".carrusel");

carruseles.forEach((carrusel) => {

    const track = carrusel.querySelector(".cards");
    const next = carrusel.querySelector(".next");
    const prev = carrusel.querySelector(".prev");

    if (!track || !next || !prev) return;

    // Avanza/retrocede el ancho visible del track (3 tarjetas + sus gaps),
    // de modo que cada clic mueve exactamente "una página" del carrusel.
    const mover = () => track.clientWidth;

    next.addEventListener("click", () => {
        track.scrollBy({
            left: mover(),
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        track.scrollBy({
            left: -mover(),
            behavior: "smooth"
        });
    });

});