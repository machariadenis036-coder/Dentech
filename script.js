/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {

    const isOpen = navigation.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", isOpen);

});


/* =========================
   CLOSE MENU AFTER CLICKING
========================= */

navigation.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


/* =========================
   AUTOMATIC COPYRIGHT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("senderEmail").value.trim();

    const message = document.getElementById("message").value.trim();


    // Email subject
    const subject = encodeURIComponent(
        "Portfolio enquiry from " + name
    );


    // Email message
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    // Open visitor's email application
    window.location.href =
        "mailto:machariadenis036@gmail.com?subject=" +
        subject + "&body=" + body;

});