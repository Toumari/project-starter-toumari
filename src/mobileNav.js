const headerBars = document.querySelector("#header__bars");
const headerLinks = document.querySelectorAll(".header__menu li a ");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile__nav-link");
const mobileLinkAnchors = document.querySelectorAll(".mobile__nav-link a");

headerBars.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "block" ? "none" : "block";

  console.log("hello");
});
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});

// Contains all the starter code for the project
