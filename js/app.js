function mostrarFlores() {
    const flores = document.querySelectorAll(".flor");

    flores.forEach((flor, index) => {
        setTimeout(() => {
            flor.style.opacity = "1";
            flor.style.transform = "translateY(0)";
        }, index * 150);
    });
}
