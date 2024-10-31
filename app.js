//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
// Agregar funcionalidad de descarga en JavaScript
document.getElementById("downloadBtn").addEventListener("click", function() {
    window.location.href = this.href;
});

// Selecciona el elemento de navegación y la sección "inicio"
const nav = document.getElementById("nav");
const inicioSection = document.getElementById("inicio");

// Función para verificar si la sección inicio está mayormente visible
function checkInicioSection() {
    const inicioPosition = inicioSection.getBoundingClientRect();
    
    // Verifica si más del 50% de la sección "inicio" está visible
    const inicioVisible = inicioPosition.top < window.innerHeight * 0.06 && inicioPosition.bottom > window.innerHeight * 0.06;

    if (inicioVisible) {
        nav.classList.add("inicio-active"); // Añade la clase para cambiar el color a blanco
    } else {
        nav.classList.remove("inicio-active"); // Remueve la clase para el color negro
    }
}

// Ejecuta la función al cargar la página para el chequeo inicial
document.addEventListener("DOMContentLoaded", checkInicioSection);

// Ejecuta la función al hacer scroll
window.addEventListener("scroll", checkInicioSection);


//oculto el menu una vez que selecciono una opción
//let links = document.querySelectorAll("nav a");
//for(var x = 0; x <links.length;x++){
  //  links[x].onclick = function(){
    //    menu.style.display = "none";
      //  menu_visible = false;
    //}
//}
// Barras habilidades     ////// No BORRAR
