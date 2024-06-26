document.addEventListener('DOMContentLoaded', function() {

    // Get the element
    const navbar = document.getElementById("bg-opacity");
    const Div4 = document.getElementById("links");
    const Div5 = document.getElementById("dropbtn");
    const Div6 = document.getElementById("dropdown-content");
    const Div7 = document.getElementById("dropdown-list");
    const Div9 = document.getElementById("about");
    const Div10 = document.getElementById("bottom-txt");
    const Div11 = document.getElementById("team");
    const Div12 = document.getElementById("team-title");
    const Div13 = document.getElementsByClassName("founder-img");
    const Div14 = document.getElementById("back-filter");

    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    const Resources = document.getElementById("Resources");
    const Repository = document.getElementById("Repository");
    // const Contribute = document.getElementById("Contribute");
    const Contact = document.getElementById("Contact");
    const Volunteer = document.getElementById("Volunteer");

    var body = document.body,
    html = document.documentElement;

    var height_el = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    Div14.style.height = height_el + 'px';

    //For windows smaller than 550 px
    if (window.innerHeight < 550) {
        Div7.style.marginTop = "75px";
    }

    else {
        Div7.style.marginTop = "120px";
    }

    function repositionDiv() {
        const toppos = Div10.getBoundingClientRect().top + window.scrollY || window.pageYOffset;

        var body = document.body,
        html = document.documentElement;

        var height_el = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
        Div14.style.height = height_el + 'px';

        if (window.innerWidth < 977) {
            Div12.style.textAlign = "center";
        }

        else{
            Div12.style.textAlign = "start";
        }

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

        if (window.innerWidth > 800) {
            Div11.style.top = (toppos + 360.0) + "px";
            // console.log((toppos + 360.0) + "px");
            for (var i = 0; i < Div13.length; i++)
            {
                Div13[i].style.width = "350px";
                Div13[i].style.height = "450px";
            }
        }

        else if (window.innerWidth > 600) {
            Div11.style.top = (toppos + 470.0) + "px";
            // console.log((toppos + 470.0) + "px");
            for (var i = 0; i < Div13.length; i++)
            {
                Div13[i].style.width = "350px";
                Div13[i].style.height = "450px";
            }
        }
        
        else if (window.innerWidth > 400) {
            Div11.style.top = (toppos + 650.0) + "px";
            // console.log((toppos + 650.0) + "px");
            for (var i = 0; i < Div13.length; i++)
            {
                Div13[i].style.width = "270px";
                Div13[i].style.height = "350px";
            }
        }

        else {
            Div11.style.top = (toppos + 740.0) + "px";
            // console.log((toppos + 740.0) + "px");
            for (var i = 0; i < Div13.length; i++)
            {
                Div13[i].style.width = "270px";
                Div13[i].style.height = "350px";
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
            Div9.style.filter = "blur(0px)";
            Div11.style.filter = "blur(0px)";
        }
        else {
            Div5.style.backgroundImage = "url('cross.svg')";
            Div6.style.display = "block";
            Div9.style.filter = "blur(5px)";
            Div11.style.filter = "blur(5px)";
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