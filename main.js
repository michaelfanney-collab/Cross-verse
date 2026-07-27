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