function docReady(fn) {
    // credit: https://stackoverflow.com/questions/9899372/vanilla-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-whe
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady( function () {

    document.querySelectorAll('[data-bs-ride="carousel"]').forEach( carousel => {
        new Carousel(carousel)
    });

    if ( typeof KeenSlider !== "undefined") {
        const petCardsSlider = new KeenSlider(
            '#petCardsSlider',
            {
                breakpoints: {
                    "(min-width: 400px)": {
                        slides: {
                            origin: "center",
                            perView: 2,
                            spacing: 15,
                        },
                    },
                    "(min-width: 1000px)": {
                        slides: {
                            centered: true,
                            perView: 4,
                            spacing: 15,
                        },
                    },
                },
                mode: "free-snap",
                slides: {
                    origin: "center",
                    perView: 1,
                    spacing: 15,
                },
                created: () => {
                },
            },
            [
                // add plugins here
            ]
        )
    }

    document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();

    /*
    *  https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
    * */
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);

});

