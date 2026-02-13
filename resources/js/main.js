
document.addEventListener("DOMContentLoaded", () => {
    // BEGIN: sliders ----------------------------

    const arrowPath = "M0.498047 9.00336C-0.166016 9.66742 -0.166016 10.7459 0.498047 11.4099L8.99805 19.9099C9.66211 20.574 10.7405 20.574 11.4046 19.9099C12.0687 19.2459 12.0687 18.1674 11.4046 17.5034L5.80523 11.904H25.4987C26.439 11.904 27.1987 11.1443 27.1987 10.204C27.1987 9.26367 26.439 8.50398 25.4987 8.50398H5.80523L11.4046 2.90461C12.0687 2.24055 12.0687 1.16211 11.4046 0.498047C10.7405 -0.166016 9.66211 -0.166016 8.99805 0.498047L0.498047 8.99805V9.00336Z"
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
            pagination: false,
            arrowPath: arrowPath
        });

        splide.mount();
    })

    const singleSlideDots = document.querySelectorAll(".single-slider-dots");

    singleSlideDots.forEach(e => {
        const splide = new Splide(e, {
            type: 'loop',
            focus: 'center',
            pagination: true,
            arrows: false
        });

        splide.mount();
    })

    const progressSlider = document.querySelectorAll(".progress-slider");
    progressSlider.forEach(e => {
        const bar = e.querySelector('.my-slider-progress-bar');

        const splide = new Splide(e, {
            pagination: false,
            arrowPath: arrowPath

        });

        splide.on('mounted move', function () {
            let end = splide.Components.Controller.getEnd() + 1;
            let rate = Math.min((splide.index + 1) / end, 1);
            bar.style.width = String(100 * rate) + '%';
        });

        splide.mount();
    })

    const autoWidthSlider = document.querySelectorAll(".auto-width-slider");
    const slidePrevBtn = document.querySelector('.testo-slide-previous');
    const slideNextBtn = document.querySelector('.testo-slide-next');
    autoWidthSlider.forEach(e => {
        const splide = new Splide(e, {
            type: 'loop',
            drag: 'free',
            pagination: false,
            arrows: false,
            autoWidth: true,
            gap: 40,
            autoplay: true,
            breakpoints: {
                768: {
                    gap: 15,
                },
            }
        });

        splide.mount();

        if (slidePrevBtn) {
            slidePrevBtn.addEventListener('click', e => {

                splide.go('-1')
            })
        }
        if (slideNextBtn) {
            slideNextBtn.addEventListener('click', e => {
                splide.go('+1')
            })
        }

    })

    // END: sliders ----------------------------
    // BEGIN: responsive nav button ----------------------------
    const responsiveNavBtn = document.querySelectorAll(".responsive-submenu-btn");
    responsiveNavBtn.forEach(btnEle => {
        btnEle.addEventListener('click', e => {

            const megaMenu = e.currentTarget.nextElementSibling;
            const icon = btnEle.querySelector('i');

            if (megaMenu) {
                if (megaMenu.classList.contains('active')) {
                    megaMenu.classList.remove('active');
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                } else {
                    megaMenu.classList.add('active');
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            }
        })
    })
    // END: responsive nav button ----------------------------
    // BEGIN: number animation counter ----------------------------
    const counters = document.querySelectorAll('.numberAnimCounter');
    const speed = 200;

    function startCounter(counter) {
        const animate = () => {
            const value = +counter.getAttribute('numCount');
            const data = +counter.innerText;

            const time = value / speed;

            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 20);
            } else {
                counter.innerText = value;
            }
        };

        animate();
    }

    // Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target); // run only once
            }
        });
    }, {
        threshold: 0.5   // start when 50% visible
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
    // END: number animation counter ----------------------------


});

