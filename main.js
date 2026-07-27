/* =========================================
   CROSSVERSE GAMING
   MAIN.JS - SECTION 1
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("CrossVerse Gaming Loaded");

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});


/* =========================================
   SECTION 2 - ANIMATED STATS
========================================= */

const statNumbers = document.querySelectorAll(".stat-card h3");

statNumbers.forEach((stat) => {

    const target = parseInt(stat.textContent) || 0;

    let count = 0;

    const speed = Math.max(1, Math.ceil(target / 50));

    function updateCounter() {

        if (count < target) {

            count += speed;

            if (count > target) count = target;

            stat.textContent = count;

            requestAnimationFrame(updateCounter);

        } else {

            stat.textContent = target;

        }

    }

    updateCounter();

});

/* =========================================

   SECTION 3 - SCROLL REVEAL

========================================= */

const revealElements = document.querySelectorAll(

".stat-card, .game-card, .leader-card, .clan-card, .radio, .premium"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".6s ease";

    observer.observe(item);

});

/* =========================================
   SECTION 4 - BUTTON EFFECTS
========================================= */

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});