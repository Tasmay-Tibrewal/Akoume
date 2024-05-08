document.addEventListener('DOMContentLoaded', function() {

    // Get the element
    const navbar = document.getElementById("bg-opacity");
    const myDiv = document.getElementById("bg-img");
    const myDiv2 = document.getElementById("cover-text");
    const myDiv3 = document.getElementById("cover-button");
    const myDiv4 = document.getElementById("links");
    const myDiv5 = document.getElementById("dropbtn");
    const myDiv6 = document.getElementById("dropdown-content");
    const myDiv7 = document.getElementById("dropdown-list");

    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    const OurWork = document.getElementById("Our Work");
    const Resources = document.getElementById("Resources");
    const Contribute = document.getElementById("Contribute");
    const Contact = document.getElementById("Contact");

    const pageHeight = document.documentElement.scrollHeight;

    //For windows smaller than 550 px
    if (window.innerHeight < 550) {
        myDiv7.style.marginTop = "75px";
    }

    else {
        myDiv7.style.marginTop = "120px";
    }

    // Function to change opacity
    function handleScroll() {
        const scrollPosition = window.scrollY || window.pageYOffset; 
        const minOpacity = 0.2; 
        const opacityChangeRate = 0.003; // Adjust for how quickly the fade happens

        // Calculate opacity (clamped between 0 and 1)
        // console.log(scrollPosition);
        let newOpacity = minOpacity + (scrollPosition * opacityChangeRate);
        newOpacity = Math.min(1, Math.min(newOpacity, 1)); 

        // Build the new RGBA color string
        const newBackgroundColor = `rgba(219, 239, 237, ${newOpacity})`;
        // console.log(newBackgroundColor);

        // Update the element's background color
        navbar.style.backgroundColor = newBackgroundColor;
    }

    function repositionDiv() {
        if (window.innerWidth < 945) {
            myDiv.style.top = "60px";  // Move below the viewport
            myDiv.style.width = "100%";
            myDiv.style.minHeight = "500px";
            myDiv.style.backgroundPosition = "center center";
            myDiv2.style.top = "480px";
            myDiv2.style.width = "94%";
            myDiv2.style.textAlign = "center";
            myDiv3.style.alignSelf = "center";
            myDiv4.style.display = "none";
            myDiv5.style.display = "block";
        }

        else {
            // Reset styles if window size increases again
            myDiv.style.top = "0";
            myDiv.style.width = "65%";
            myDiv.style.minHeight = "820px";
            myDiv.style.backgroundPosition = "right center";
            myDiv2.style.top = "43px";
            myDiv2.style.width = "38%";
            myDiv2.style.textAlign = "left";
            myDiv3.style.alignSelf = "flex-start";
            myDiv4.style.display = "block";
            myDiv5.style.display = "none";
            myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
            myDiv6.style.display = "none";
        }
    }

    function drop() {
        if (myDiv5.style.backgroundImage == 'url("cross.svg")') {
            myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
            myDiv6.style.display = "none";
            handleScroll();
        }
        else {
            myDiv5.style.backgroundImage = "url('cross.svg')";
            myDiv6.style.display = "block";
            navbar.style.backgroundColor = "rgba(219, 239, 237, 1)";
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

    OurWork.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    Resources.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    Contribute.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    Contact.addEventListener("click", function(event) {
        myDiv5.style.backgroundImage = "url('Hamburger_icon.svg')";
        myDiv6.style.display = "none";
    });

    // Event listener for scrolling 
    window.addEventListener('scroll', handleScroll); 

    // Call the function initially to check the window size
    repositionDiv();

    // Listen for resize events to reposition on window size change
    window.addEventListener("resize", repositionDiv);

    const lenis = new Lenis({lerp: 0.075, duration: 1.2, easing: (t) =>Math.min(1,1.001 - Math.pow(2,-10*t)) });

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    //     });
    
    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);  
});