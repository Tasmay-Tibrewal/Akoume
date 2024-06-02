document.addEventListener('DOMContentLoaded', function() {

    // Get the element
    const navbar = document.getElementById("bg-opacity");
    const Div = document.getElementById("bg-img");
    const Div2 = document.getElementById("cover-text");
    const Div3 = document.getElementById("cover-button");
    const Div4 = document.getElementById("links");
    const Div5 = document.getElementById("dropbtn");
    const Div6 = document.getElementById("dropdown-content");
    const Div7 = document.getElementById("dropdown-list");
    const Div8 = document.getElementById("work-text");
    const Div15 = document.getElementById("tick");
    const Div16 = document.getElementById("copy-mail-svg");
    const Div17 = document.getElementById("copy-phone-svg");
    const Div18 = document.getElementById("tick2");
    const Div19 = document.getElementById("contact-us");
    const Div20 = document.getElementById("serenity");
    const Div21 = document.getElementById("sanctuary");
    const Div26 = document.getElementById("groves");
    const Div27 = document.getElementById("winds");
    const Div28 = document.getElementById("meadows");

    const Home = document.getElementById("Home");
    const About = document.getElementById("About");
    const Resources = document.getElementById("Resources");
    const Repository = document.getElementById("Repository");
    // const Contribute = document.getElementById("Contribute");
    const Contact = document.getElementById("Contact");
    const Volunteer = document.getElementById("Volunteer");

    const pageHeight = document.documentElement.scrollHeight;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    //For windows smaller than 550 px
    if (window.innerHeight < 550) {
        Div7.style.marginTop = "75px";
    }

    else {
        Div7.style.marginTop = "120px";
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
            const botpos = Div20.getBoundingClientRect().top + window.scrollY || window.pageYOffset;
            if (window.innerWidth < 350){
                Div19.style.top = (botpos + 920.0) + "px";
                // console.log((botpos + 920.0) + "px");
            }
            else {
                Div19.style.top = (botpos + 740.0) + "px";
                // console.log((botpos + 740.0) + "px");
            }
        } 
          
        else {
            const botpos = Div20.getBoundingClientRect().top + window.scrollY || window.pageYOffset;
            Div19.style.top = (botpos + 470.0) + "px";
            // console.log((botpos + 470.0) + "px");
        }

        if (window.innerWidth < 945) {
            Div.style.top = "60px";  // Move below the viewport
            Div.style.width = "100%";
            Div.style.minHeight = "500px";
            Div.style.backgroundPosition = "center center";
            Div2.style.top = "480px";
            Div2.style.width = "94%";
            Div2.style.textAlign = "center";
            Div3.style.alignSelf = "center";
            Div4.style.display = "none";
            Div5.style.display = "block";
            const toppos = Div3.getBoundingClientRect().top + window.scrollY || window.pageYOffset;
            Div8.style.top = (toppos + 165.0) + "px";
            // console.log((toppos + 165.0) + "px");
        }

        else {
            // Reset styles if window size increases again
            Div.style.top = "0";
            Div.style.width = "65%";
            Div.style.minHeight = "820px";
            Div.style.backgroundPosition = "right center";
            Div2.style.top = "43px";
            Div2.style.width = "38%";
            Div2.style.textAlign = "left";
            Div3.style.alignSelf = "flex-start";
            Div4.style.display = "block";
            Div5.style.display = "none";
            Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
            Div6.style.display = "none";
            Div8.style.top =  "850px";
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
            Div.style.filter = "blur(0px)";
            Div2.style.filter = "blur(0px)";
            Div8.style.filter = "blur(0px)";
            Div19.style.filter = "blur(0px)";
            handleScroll();
        }
        else {
            Div5.style.backgroundImage = "url('cross.svg')";
            Div6.style.display = "block";
            Div.style.filter = "blur(5px)";
            Div2.style.filter = "blur(5px)";
            Div8.style.filter = "blur(5px)";
            Div19.style.filter = "blur(5px)";
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
        Div16.style.visibility = "visible";
        Div15.style.visibility = "visible";
        
        copyToClipboard("care.akoume@gmail.com")

        setTimeout(() => {
            Div15.style.visibility = "hidden"; 
            Div16.style.removeProperty("visibility"); 
          }, 2000);
    }

    function phoneclick() {
        Div17.style.visibility = "visible";
        Div18.style.visibility = "visible";
        
        copyToClipboard("+91 964 745 3255")

        setTimeout(() => {
            Div18.style.visibility = "hidden"; 
            Div17.style.removeProperty("visibility");
          }, 2000);
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

    Volunteer.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    Contact.addEventListener("click", function(event) {
        Div5.style.backgroundImage = "url('Hamburger_icon.svg')";
        Div6.style.display = "none";
    });

    Div16.addEventListener("click", function(event) {
        mailclick();
        event.preventDefault();  // Prevent default behavior
    });

    Div17.addEventListener("click", function(event) {
        phoneclick();
        event.preventDefault();  // Prevent default behavior
    });

    Div21.addEventListener("click", function(event) {
        window.open("https://chat.whatsapp.com/JfQlYsGDxFM1I9syLnRsVP", '_blank').focus();
        event.preventDefault();  // Prevent default behavior
    });

    Div26.addEventListener("click", function(event) {
        window.open("https://akoume.me/repository/#healing-groves", '_self').focus();
        event.preventDefault();  // Prevent default behavior
    });

    Div27.addEventListener("click", function(event) {
        window.open("https://akoume.me/repository/#whispering-winds", '_self').focus();
        event.preventDefault();  // Prevent default behavior
    });

    Div28.addEventListener("click", function(event) {
        window.open("https://akoume.me/repository/#mindful-meadows", '_self').focus();
        event.preventDefault();  // Prevent default behavior
    });

    Div20.addEventListener("click", function(event) {
        window.open("https://akoume.me/repository/#serenity-leaves", '_self').focus();
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