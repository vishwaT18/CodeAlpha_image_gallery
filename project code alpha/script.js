/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});

/* =========================
   MOBILE MENU
========================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }
});

/* =========================
   FILTER GALLERY
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";
            }

        });

    });

});

/* =========================
   LIGHTBOX
========================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const lightboxTitle =
    document.getElementById("lightbox-title");

const closeBtn =
    document.querySelector(".close-btn");

const nextBtn =
    document.querySelector(".next-btn");

const prevBtn =
    document.querySelector(".prev-btn");

let currentIndex = 0;

const images =
    document.querySelectorAll(".gallery-item img");

/* Open Lightbox */

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

    });

});

/* Show Current Image */

function showImage() {

    const image =
        images[currentIndex];

    lightboxImg.src =
        image.src;

    const title =
        image.parentElement.querySelector("h3").innerText;

    lightboxTitle.innerText =
        title;
}

/* Next Image */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});

/* Previous Image */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex =
            images.length - 1;
    }

    showImage();

});

/* Close Lightbox */

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* Click Outside */

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active"))
        return;

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn =
    document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

/* =========================
   SIMPLE SCROLL ANIMATION
========================= */

const cards =
    document.querySelectorAll(
        ".feature-card, .gallery-item"
    );

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    });

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform =
        "translateY(30px)";
    card.style.transition =
        "all 0.6s ease";

    observer.observe(card);

});