document.addEventListener('DOMContentLoaded', function() {

    // Get the element
    const navbar = document.getElementById("bg-opacity");
    const Div4 = document.getElementById("links");
    const Div5 = document.getElementById("dropbtn");
    const Div6 = document.getElementById("dropdown-content");
    const Div7 = document.getElementById("dropdown-list");
    const Div22 = document.getElementById("post-nav");
    const Div25 = document.getElementsByClassName("blog-img-element");

    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    const Resources = document.getElementById("Resources");
    const Repository = document.getElementById("Repository");
    // const Contribute = document.getElementById("Contribute");
    const Contact = document.getElementById("Contact");
    const Volunteer = document.getElementById("Volunteer");

    //For windows smaller than 550 px
    if (window.innerHeight < 550) {
        Div7.style.marginTop = "75px";
    }

    else {
        Div7.style.marginTop = "120px";
    }

    function repositionDiv() {

        // console.log(window.innerWidth);

        if (window.innerWidth < 945) {
            Div4.style.display = "none";
            Div5.style.display = "block";
        }

        else {
            // Reset styles if window size increases again
            Div4.style.display = "block";
            Div5.style.display = "none";
            Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
            Div6.style.display = "none";
        }

        if (window.innerWidth < 450) {
            for (let i = 0; i < Div25.length; i++) {
                Div25[i].style.width = "350px";
                Div25[i].style.height = "350px";
            }
        }

        else {
            // Reset styles if window size increases again
            for (let i = 0; i < Div25.length; i++) {
                Div25[i].style.width = "400px";
                Div25[i].style.height = "400px";
            }
        }

        if (window.innerHeight < 550) {
            Div7.style.marginTop = "75px";
        }
    
        else {
            Div7.style.marginTop = "120px";
        }
    }

    function drop() {
        if (Div5.style.backgroundImage == 'url("cross.svg")') {
            Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
            Div6.style.display = "none";
            Div22.style.filter = "blur(0px)";
            // handleScroll();
        }
        else {
            Div5.style.backgroundImage = "url('cross.svg')";
            Div6.style.display = "block";
            Div22.style.filter = "blur(5px)";
        }
    }

    Div5.addEventListener("click", function(event) {
        drop();
        event.preventDefault();  // Prevent default behavior
    });

    Home.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    About.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    Resources.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    Repository.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    // Contribute.addEventListener("click", function(event) {
    //     Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
    //     Div6.style.display = "none";
    // });

    Contact.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    Volunteer.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    // // Event listener for scrolling 
    // window.addEventListener('scroll', handleScroll); 

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