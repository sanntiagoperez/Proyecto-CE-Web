const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme","light");
    }else{
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }

});

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}
// ============================
// CARRUSEL MAQUINARIA
// ============================

const cards = document.getElementById("cards");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

if (cards && next && prev) {

    const mover = () => {
        const card = cards.querySelector(".card");
        return card.offsetWidth + 20;
    };

    next.addEventListener("click", () => {
        cards.scrollBy({
            left: mover(),
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        cards.scrollBy({
            left: -mover(),
            behavior: "smooth"
        });
    });

}