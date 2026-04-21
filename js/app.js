function mostrarFlores() {
    const flores = document.querySelectorAll(".flor");

    flores.forEach((flor, index) => {
        setTimeout(() => {
            flor.estyles.opacity = "1";
            flor.estyles.transform = "translateY(0)";
        }, index * 150);
    });
}
