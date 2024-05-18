document.addEventListener('DOMContentLoaded', function() {

    // Get the element
    const navbar = document.getElementById("bg-opacity");
    const myDiv4 = document.getElementById("links");
    const myDiv5 = document.getElementById("dropbtn");
    const myDiv6 = document.getElementById("dropdown-content");
    const myDiv7 = document.getElementById("dropdown-list");
    const myDiv9 = document.getElementById("about");
    const myDiv10 = document.getElementById("bottom-txt");
    const myDiv11 = document.getElementById("team");
    const myDiv12 = document.getElementById("team-title");
    const myDiv13 = document.getElementsByClassName("founder-img");
    const myDiv14 = document.getElementById("back-filter");

    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    const Resources = document.getElementById("Resources");
    // const Contribute = document.getElementById("Contribute");
    const Contact = document.getElementById("Contact");

    var body = document.body,
    html = document.documentElement;

    var height_el = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    myDiv14.style.height = height_el + 'px';

    //For windows smaller than 550 px
    if (window.innerHeight < 550) {
        myDiv7.style.marginTop = "75px";
    }

    else {
        myDiv7.style.marginTop = "120px";
    }

    function repositionDiv() {
        const toppos = myDiv10.getBoundingClientRect().top + window.scrollY || window.pageYOffset;

        var body = document.body,
        html = document.documentElement;

        var height_el = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
        myDiv14.style.height = height_el + 'px';

        if (window.innerWidth < 977) {
            myDiv12.style.textAlign = "center";
        }

        else{
            myDiv12.style.textAlign = "start";
        }

        if (window.innerWidth < 945) {
            myDiv4.style.display = "none";
            myDiv5.style.display = "block";
        }

        else {
            // Reset styles if window size increases again
            myDiv4.style.display = "block";
            myDiv5.style.display = "none";
            myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
            myDiv6.style.display = "none";
        }

        if (window.innerWidth > 800) {
            myDiv11.style.top = (toppos + 360.0) + "px";
            // console.log((toppos + 360.0) + "px");
            for (var i = 0; i < myDiv13.length; i++)
            {
                myDiv13[i].style.width = "350px";
                myDiv13[i].style.height = "450px";
            }
        }

        else if (window.innerWidth > 600) {
            myDiv11.style.top = (toppos + 470.0) + "px";
            // console.log((toppos + 470.0) + "px");
            for (var i = 0; i < myDiv13.length; i++)
            {
                myDiv13[i].style.width = "350px";
                myDiv13[i].style.height = "450px";
            }
        }
        
        else if (window.innerWidth > 400) {
            myDiv11.style.top = (toppos + 650.0) + "px";
            // console.log((toppos + 650.0) + "px");
            for (var i = 0; i < myDiv13.length; i++)
            {
                myDiv13[i].style.width = "270px";
                myDiv13[i].style.height = "350px";
            }
        }

        else {
            myDiv11.style.top = (toppos + 740.0) + "px";
            // console.log((toppos + 740.0) + "px");
            for (var i = 0; i < myDiv13.length; i++)
            {
                myDiv13[i].style.width = "270px";
                myDiv13[i].style.height = "350px";
            }
        }

        if (window.innerHeight < 550) {
            myDiv7.style.marginTop = "75px";
        }
    
        else {
            myDiv7.style.marginTop = "120px";
        }
    }

    function drop() {
        if (myDiv5.style.backgroundImage == 'url("cross.svg")') {
            myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
            myDiv6.style.display = "none";
            myDiv9.style.filter = "blur(0px)";
            myDiv11.style.filter = "blur(0px)";
        }
        else {
            myDiv5.style.backgroundImage = "url('cross.svg')";
            myDiv6.style.display = "block";
            myDiv9.style.filter = "blur(5px)";
            myDiv11.style.filter = "blur(5px)";
        }
    }

    myDiv5.addEventListener("click", function(event) {
        drop();
        event.preventDefault();  // Prevent default behavior
    });

    Home.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    About.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    Resources.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    // Contribute.addEventListener("click", function(event) {
    //     myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
    //     myDiv6.style.display = "none";
    // });

    Contact.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    // Call the function initially to check the window size
    repositionDiv();

    // Listen for resize events to reposition on window size change
    window.addEventListener("resize", repositionDiv);

    const lenis = new Lenis({lerp: 0.1, duration: 1.2, easing: (t) =>Math.min(1,1.001 - Math.pow(2,-10*t)) });

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    //     });
    
    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);  
});