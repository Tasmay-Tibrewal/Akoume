document.addEventListener('DOMContentLoaded', function() {

    // Get the element
    const Div23 = document.getElementById("blog-top");
    const Div24 = document.getElementById("blog-img");

    function repositionDiv() {
        if (window.innerWidth < 768) {
            Div23.style.width = "95%";
            Div24.style.height = "220px";
        }

        else {
            Div23.style.width = "calc(40% + 228px)";
            Div24.style.height = "400px";
        }
    }


    // Call the function initially to check the window size
    repositionDiv();

    // Listen for resize events to reposition on window size change
    window.addEventListener("resize", repositionDiv);

    const lenis = new Lenis({lerp: 0.11, duration: 1.2, easing: (t) =>Math.min(1,1.001 - Math.pow(2,-10*t)) });

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    //     });
    
    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);  
});