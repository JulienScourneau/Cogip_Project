import { changeActiveClass } from "./classActiveDashboard.js";

changeActiveClass();

const phoneMenu = document.querySelector(".phoneMenu");
const menuItems = document.querySelectorAll(".phoneMenu__item");
const hamburger= document.querySelector(".hamburgerDashboard");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

export function toggleMenu() {
  if (phoneMenu.classList.contains("showMenu")) {
    phoneMenu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    phoneMenu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);