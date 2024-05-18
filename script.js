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
    const myDiv8 = document.getElementById("work-text");
    const myDiv15 = document.getElementById("tick");
    const myDiv16 = document.getElementById("copy-mail-svg");
    const myDiv17 = document.getElementById("copy-phone-svg");
    const myDiv18 = document.getElementById("tick2");
    const myDiv19 = document.getElementById("contact-us");
    const myDiv20 = document.getElementById("steps");

    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    const Resources = document.getElementById("Resources");
    // const Contribute = document.getElementById("Contribute");
    const Contact = document.getElementById("Contact");

    const pageHeight = document.documentElement.scrollHeight;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
        if (isMobile && window.innerWidth < 1000) {
            const botpos = myDiv20.getBoundingClientRect().top + window.scrollY || window.pageYOffset;
            if (window.innerWidth < 350){
                myDiv19.style.top = (botpos + 920.0) + "px";
                // console.log((botpos + 920.0) + "px");
            }
            else {
                myDiv19.style.top = (botpos + 740.0) + "px";
                // console.log((botpos + 740.0) + "px");
            }
        } 
          
        else {
            const botpos = myDiv20.getBoundingClientRect().top + window.scrollY || window.pageYOffset;
            myDiv19.style.top = (botpos + 470.0) + "px";
            // console.log((botpos + 470.0) + "px");
        }

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
            const toppos = myDiv3.getBoundingClientRect().top + window.scrollY || window.pageYOffset;
            myDiv8.style.top = (toppos + 165.0) + "px";
            // console.log((toppos + 165.0) + "px");
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
            myDiv8.style.top =  "850px";
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
            myDiv.style.filter = "blur(0px)";
            myDiv2.style.filter = "blur(0px)";
            myDiv8.style.filter = "blur(0px)";
            handleScroll();
        }
        else {
            myDiv5.style.backgroundImage = "url('cross.svg')";
            myDiv6.style.display = "block";
            myDiv.style.filter = "blur(5px)";
            myDiv2.style.filter = "blur(5px)";
            myDiv8.style.filter = "blur(5px)";
        }
    }

    async function copyToClipboard(text) {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    }

    function mailclick() {
        myDiv16.style.visibility = "visible";
        myDiv15.style.visibility = "visible";
        
        copyToClipboard("care.akoume@gmail.com")

        setTimeout(() => {
            myDiv15.style.visibility = "hidden"; 
            myDiv16.style.removeProperty("visibility"); 
          }, 2000);
    }

    function phoneclick() {
        myDiv17.style.visibility = "visible";
        myDiv18.style.visibility = "visible";
        
        copyToClipboard("+91 964 745 3255")

        setTimeout(() => {
            myDiv18.style.visibility = "hidden"; 
            myDiv17.style.removeProperty("visibility");
          }, 2000);
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

    myDiv16.addEventListener("click", function(event) {
        mailclick();
        event.preventDefault();  // Prevent default behavior
    });

    myDiv17.addEventListener("click", function(event) {
        phoneclick();
        event.preventDefault();  // Prevent default behavior
    });

    // Event listener for scrolling 
    window.addEventListener('scroll', handleScroll); 

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