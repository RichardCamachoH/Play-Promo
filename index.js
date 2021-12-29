const navToggle = document.querySelector(".header__toggle");
const navMenu = document.querySelector(".header__list");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-visible")
    navMenu.classList.toggle("menu-hidden")
});

const menuOpc = document.querySelectorAll('.header__list a[href^="#"]')

menuOpc.forEach(element => {
    element.addEventListener("click", function() {
        navMenu.classList.toggle("menu-visible")
        navMenu.classList.toggle("menu-hidden")
    })
});

// --------------------------------------------------------------------------

window.addEventListener('load', () => {

    // slide inicial
    let slide = 1;
    
    // slides totales
    let slides = document.querySelectorAll(".musica__slider ul li");
    total = slides.length;

    // muestra el primer slide
    showSlide(1);

    //evento de botones
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var radio3 = document.getElementById("radio3");
    var radio4 = document.getElementById("radio4");
    var radio5 = document.getElementById("radio5");
    var radio6 = document.getElementById("radio6");

    const nav_btn = document.querySelector(".navigation-btn");

    radio1.addEventListener( 'change', function() {
        if(this.checked) {
            showSlide(1);
        } else {
        }
    });

    radio2.addEventListener( 'change', function() {
        if(this.checked) {
            showSlide(2);
        } else {
            // Checkbox is not checked..
        }
    });

    radio3.addEventListener( 'change', function() {
        if(this.checked) {
            showSlide(3);
        } else {
            // Checkbox is not checked..
        }
    });

    radio4.addEventListener( 'change', function() {
        if(this.checked) {
            showSlide(4);
        } else {
            // Checkbox is not checked..
        }
    });

    radio5.addEventListener( 'change', function() {
        if(this.checked) {
            showSlide(5);
        } else {
            // Checkbox is not checked..
        }
    });

    radio6.addEventListener( 'change', function() {
        if(this.checked) {
            showSlide(6);
        } else {
            // Checkbox is not checked..
        }
    });

    function showSlide(n) {
        n--;
        for (i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
        }
    }

});