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