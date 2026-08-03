// =========================
// BOTONES LOGIN Y REGISTRO
// =========================

document.getElementById("btn__iniciar-sesion")
.addEventListener("click", iniciarSesion);

document.getElementById("btn__registrarse")
.addEventListener("click", register);

window.addEventListener("resize", anchoPage);

// =========================
// VARIABLES
// =========================

var formulario_login =
document.querySelector(".formulario__login");

var formulario_register =
document.querySelector(".formulario__register");

var contenedor_login_register =
document.querySelector(".contenedor__login-register");

var caja_trasera_login =
document.querySelector(".caja__trasera-login");

var caja_trasera_register =
document.querySelector(".caja__trasera-register");

// =========================
// RESPONSIVE
// =========================

function anchoPage(){

    if(window.innerWidth > 850){

        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";

    }else{

        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";

        caja_trasera_login.style.display = "none";

        formulario_login.style.display = "block";

        contenedor_login_register.style.left = "0px";

        formulario_register.style.display = "none";
    }
}

anchoPage();

// =========================
// LOGIN
// =========================

function iniciarSesion(){

    if(window.innerWidth > 850){

        formulario_login.style.display = "block";

        contenedor_login_register.style.left = "10px";

        formulario_register.style.display = "none";

        caja_trasera_register.style.opacity = "1";

        caja_trasera_login.style.opacity = "0";

    }else{

        formulario_login.style.display = "block";

        contenedor_login_register.style.left = "0px";

        formulario_register.style.display = "none";

        caja_trasera_register.style.display = "block";

        caja_trasera_login.style.display = "none";
    }
}

// =========================
// REGISTRO
// =========================

function register(){

    if(window.innerWidth > 850){

        formulario_register.style.display = "block";

        contenedor_login_register.style.left = "410px";

        formulario_login.style.display = "none";

        caja_trasera_register.style.opacity = "0";

        caja_trasera_login.style.opacity = "1";

    }else{

        formulario_register.style.display = "block";

        contenedor_login_register.style.left = "0px";

        formulario_login.style.display = "none";

        caja_trasera_register.style.display = "none";

        caja_trasera_login.style.display = "block";

        caja_trasera_login.style.opacity = "1";
    }
}

// =========================
// CAMBIO DE TEMA
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

<<<<<<< HEAD
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
=======
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
>>>>>>> 8ec5390b618fb253d49405857027bf26ce88d079

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "theme",
<<<<<<< HEAD
            "light"
=======
            "dark"
>>>>>>> 8ec5390b618fb253d49405857027bf26ce88d079
        );

    }else{

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "theme",
<<<<<<< HEAD
            "dark"
=======
            "light"
>>>>>>> 8ec5390b618fb253d49405857027bf26ce88d079
        );
    }
});

// =========================
// GUARDAR TEMA
// =========================

<<<<<<< HEAD
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
=======
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");
>>>>>>> 8ec5390b618fb253d49405857027bf26ce88d079

    themeBtn.textContent = "☀️";
}