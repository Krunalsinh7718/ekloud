
document.addEventListener("DOMContentLoaded", () => {
    // BEGIN: sliders ----------------------------
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

    const singleSlide = document.querySelectorAll(".single-slider");

    singleSlide.forEach(e => {
        const splide = new Splide(e, {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            // autoWidth: true,
            // arrows: false,
            pagination: false,
            // gap: 20,
            arrowPath: "M0.498047 9.00336C-0.166016 9.66742 -0.166016 10.7459 0.498047 11.4099L8.99805 19.9099C9.66211 20.574 10.7405 20.574 11.4046 19.9099C12.0687 19.2459 12.0687 18.1674 11.4046 17.5034L5.80523 11.904H25.4987C26.439 11.904 27.1987 11.1443 27.1987 10.204C27.1987 9.26367 26.439 8.50398 25.4987 8.50398H5.80523L11.4046 2.90461C12.0687 2.24055 12.0687 1.16211 11.4046 0.498047C10.7405 -0.166016 9.66211 -0.166016 8.99805 0.498047L0.498047 8.99805V9.00336Z"
        });

        splide.mount();
    })

    const progressSlider = document.querySelectorAll(".progress-slider");
    console.log(progressSlider);
    progressSlider.forEach(e => {
        const bar = e.querySelector( '.my-slider-progress' );
        
        const splide = new Splide(e,{
            pagination: false
        });

        splide.on( 'mounted move', function () {
        let end  = splide.Components.Controller.getEnd() + 1;
        let rate = Math.min( ( splide.index + 1 ) / end, 1 );
        bar.style.width = String( 100 * rate ) + '%';
    } );

        splide.mount();
    })


    // END: sliders ----------------------------
    // BEGIN: nav link click ----------------------------

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (window.innerWidth < 992) {
                e.stopPropagation();

                // remove active from all
                navLinks.forEach(l => l.classList.remove("active"));

                // add active to clicked one
                this.classList.add("active");
            }
        });
    });

    document.addEventListener("click", function () {
        navLinks.forEach(link => link.classList.remove("active"));
    });

    // END: nav link click ----------------------------


});

