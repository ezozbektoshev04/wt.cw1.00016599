// Adding a scroll event listener to the window to show backtop when the scroll happens
window.addEventListener("scroll", function () {
  // Calling the toggleBacktop function when scrolling occurs
  toggleBacktop();
});

// Getting the element with the id "backtop"
let backtop = document.getElementById("backtop");

// Function to toggle the visibility of the back-to-top button based on scroll position
function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

// to hide animation loading after 1.5s
animation = document.querySelector(".animation");
setTimeout(() => {
  animation.classList.add("hide");
}, 1503);

// Menu button
const toggleIcon = document.querySelector(".toggle-icon");
const navItems = document.querySelector(".nav-links");
// When hamburger button is clicked, show links or hide links
toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("active");
  navItems.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    toggleIcon.classList.remove("active");
    navItems.classList.remove("active");
  })
);
