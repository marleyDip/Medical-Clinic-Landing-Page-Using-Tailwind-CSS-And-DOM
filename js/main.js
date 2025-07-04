const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcon = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  //console.log("button clicked");

  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
  }
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// faq & answer
// const faqItems = document.querySelectorAll(".faq__item");

// faqItems.forEach((item) => {
//   const faqBtn = item.querySelector(".faq__btn");

//   item.addEventListener("click", () => {
//     const isOpen = item.classList.toggle("open");

//     const iconClass = isOpen ? "ri-subtract-fill" : "ri-add-fill";

//     const iconElement = faqBtn.querySelector("i");

//     iconElement.classList = `${iconClass} text-2xl`
//   });
// });

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const faqBtn = item.querySelector(".faq__btn");

  item.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Close all items first
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("open");
      const otherIcon = otherItem.querySelector(".faq__btn i");
      if (otherIcon) {
        otherIcon.classList = "ri-add-fill text-2xl";
      }
    });

    // If item was not open, open it now
    if (!isOpen) {
      item.classList.add("open");
      const iconElement = faqBtn.querySelector("i");
      iconElement.classList = "ri-subtract-fill text-2xl";
    }
  });
});

// format = numeric =  7; 2-digit = 07; short = Jul, long = July, narrow = J
// date and year bengali = bn-bd; element = el
// const fullDate = new Date().toLocaleDateString("en-us", {
//   weekday: "long",
//   month: "long",
//   day: "numeric",
//   year: "numeric",
// });

// document.querySelectorAll(".fullDate").forEach((element) => {
//   element.textContent = fullDate;
// });

// const dateElement = document.querySelector("#year");
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// dateElement.textContent = year;

// dynamically date and year that won't be changed
document.querySelectorAll(".fullDate").forEach((el) => {
  const rawDate = el.dataset.date;

  if (rawDate) {
    const dateObj = new Date(rawDate);

    const formatted = dateObj.toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    el.textContent = formatted;
  }
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// scroll reveal animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  reset: true, // reset animation on scroll
});

// hero section
sr.reveal(".hero__text", {
  origin: "top",
});

sr.reveal(".hero__img");

// stats section
sr.reveal(".stats__item", {
  origin: "top",
  distance: "100px",
  delay: 600,
  interval: 100,
});

// services section
sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".services__item", {
  origin: "bottom",
  distance: "100px",
  delay: 600,
  interval: 100,
});

// appointment section
sr.reveal(".appointment__title");
sr.reveal(".appointment__form");

// testimonials section
sr.reveal(".testimonial");
sr.reveal(".testimonial__container");

// team section
sr.reveal(".team__title");
sr.reveal(".team__slider");

// faq section
sr.reveal(".faq__tile");
sr.reveal(".faq__item", {
  origin: "bottom",
  distance: "100px",
  delay: 600,
  interval: 100,
});

// departments section
sr.reveal(".departments__bg");
sr.reveal(".departments__container");

// blog section
sr.reveal(".blog__title");
sr.reveal(".blog__post", {
  origin: "bottom",
  distance: "100px",
  delay: 400,
  interval: 100,
});

// brans section
sr.reveal("brands__logo", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
  delay: 600,
});

// newsletter section
sr.reveal(".newsletter");
sr.reveal(".newsletter__container");

// footer section
sr.reveal(".footer__item", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
  delay: 600,
  duration: 800,
  easing: "ease-in-out",
  opacity: 0.2,
  scale: 0.9,
});

sr.reveal(".footer__copyright", {
  origin: "top",
  distance: "40px",
  duration: 600,
  delay: 900,
  easing: "ease-in",
});
