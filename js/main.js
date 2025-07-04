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
