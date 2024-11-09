/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const nav = document.querySelector(".navbar__menu");
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll("[data-nav]");
const button = document.querySelector("button");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function scrollToTop() {
  window.scrollTo({ behavior: "smooth", top: 0 });
}
function position(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.top < window.innerHeight / 2;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
  for (let i = 0; i < sections.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = `Section ${i + 1}`;
    a.setAttribute("href", `#section${i + 1}`);
    a.className = "menu__link";
    li.appendChild(a);
    ul.appendChild(li);
  }
}

// Add class 'active' to section when near top of viewport
function active() {
  sections.forEach((item) => {
    const secId = item.getAttribute("id");
    const a = document.querySelector(`a[href="#${secId}"]`);
    if (position(item)) {
      item.classList.add("your-active-class");
      a.classList.add("active");
    } else {
      item.classList.remove("your-active-class");
      a.classList.remove("active");
    }
  });
}

// Scroll to anchor ID using scrollTO event
function scroll(e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  const targetSection = document.querySelector(id);
  targetSection.scrollIntoView({ behavior: "smooth" });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();

// Scroll to section on link click
document.querySelectorAll("li a").forEach((item) => {
  item.addEventListener("click", scroll);
});

// Set sections as active
window.addEventListener("scroll", active);

// scoll to top
button.addEventListener("click", scrollToTop);
