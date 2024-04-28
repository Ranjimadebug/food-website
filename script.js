"use strict";

/*
Food Names:['Pizza', 'Sandwich', 'Noodles', 'Chowmein', 'Burger', 'Steak', 'Chilli Chicken', 'Fried Rice', 'Mixed Chowmein', 'Mixed Fried Rice', 'Coffee', 'Grilled Sandwich', 'Chicken Sandwich', 'Egg Sandwich', 'Fish Fry']
*/

const daysRemaining = document.querySelectorAll(".color--changer");
const today = new Date();
const daysLeft = new Date(today.getFullYear(), 4, 25);
// console.log(daysLeft);
if (today.getMonth() == 11 && today.getDate() > 25) {
  daysLeft.setFullYear(daysLeft.getFullYear() + 1);
}
const one_day = 1000 * 60 * 60 * 24; // 1second = 1000 miliseconds
const diff = Math.ceil((daysLeft.getTime() - today.getTime()) / one_day);
// console.log(diff);
daysRemaining[0].innerText = `${diff} Days remaining`;
daysRemaining[1].innerText = `${diff - 1} Days remaining`;
daysRemaining[2].innerText = `${diff + 2} Days remaining`;
daysRemaining[3].innerText = `${diff - 4} Days remaining`;

// SECTION REVEAL

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);

  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// SLICK SLIDER

$(".popular--item_slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 500,
  prevArrow:
    '<span class="previous-btn"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow:
    '<span class="next-btn"><i class="fa-solid fa-angle-right"></i></span>',
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Search By Food

$(".search--grid--box").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 500,
  prevArrow:
    '<span class="previous-btn search--btn"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow:
    '<span class="next-btn search--btn"><i class="fa-solid fa-angle-right"></i></span>',
  slidesToShow: 6,
  slidesToScroll: 1,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const btnOpenNow = document.querySelectorAll(".btn--open--now");

btnOpenNow.forEach((btn) => {
  if (btn.innerText === "Open Now") {
    btn.style.color = "#79B93C";
    btn.style.background = "#e7ffd0";
  }
});

const toggleButton = document.getElementById("toggleButton");
const sectionHidden = document.getElementById("sectionHidden");

toggleButton.addEventListener("click", function () {
  sectionHidden.classList.toggle("section--hidden");
  toggleButton.innerHTML = sectionHidden.classList.contains("section--hidden")
    ? "View More"
    : "View Less";
});


// LOGIN || REGISTRATION FORM

var registrationPopup = document.getElementById('registration--login-form');

function loginFormHandler(){
  registrationPopup.style.display = 'block';
  document.body.classList.add('disable-scroll');
}
function closePopup() {
  registrationPopup.style.display = 'none';
  document.body.classList.remove('disable-scroll');
}


