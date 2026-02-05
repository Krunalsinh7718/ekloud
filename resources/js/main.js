
document.addEventListener("DOMContentLoaded", () => {
    
    const logoSlider = document.querySelectorAll(".logo-slider");
    
    logoSlider.forEach(e => {
        const splide = new Splide(e, {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            autoWidth: true,
            arrows: false,
            pagination: false,
            gap: 20,
        });
    
        splide.mount(window.splide.Extensions);
    })
    
        
    
});

