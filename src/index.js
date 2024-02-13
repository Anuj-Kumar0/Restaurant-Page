import "./style.css";
import { showMenu } from "./menu";
import { showAbout } from "./about";

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

menu.addEventListener("click", showMenu);
about.addEventListener("click", showAbout);
