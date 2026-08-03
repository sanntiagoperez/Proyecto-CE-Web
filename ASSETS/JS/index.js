const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

<<<<<<< HEAD
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme","light");
    }else{
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme","dark");
=======
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme","light");
>>>>>>> 8ec5390b618fb253d49405857027bf26ce88d079
    }

});

<<<<<<< HEAD
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}
=======
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}
>>>>>>> 8ec5390b618fb253d49405857027bf26ce88d079
