document.querySelector(".botonmn").addEventListener('click', () => {
    document.querySelector(".menu").classList.toggle("show");
});

ScrollReveal().reveal('.seccionprincipal');
ScrollReveal().reveal('.nuevas-noticias',{delay: 500});
ScrollReveal().reveal('.seccion1',{delay: 500});
ScrollReveal().reveal('.seccion2',{delay: 500});