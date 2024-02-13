import foodFirst from "./food1.jpg";
import foodSecond from "./food2.jpg";
import foodThird from "./food3.jpg";
import foodFourth from "./food4.jpg";

const menuContent = document.querySelector("#menuContent");

let menuAdded = false;
const nav = document.querySelector("nav");
const showMenu = () => {
  if (!menuAdded) {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");
    menuContent.appendChild(menuDiv);

    const menuTransparent = document.createElement("div");
    menuTransparent.classList.add("transparent");
    menuDiv.appendChild(menuTransparent);

    const menuDivFirst = document.createElement("div");
    menuDivFirst.classList.add("menu-flex");
    menuDivFirst.id = "menuFirst";
    menuDiv.appendChild(menuDivFirst);
    const foodPictureFirst = document.createElement("div");
    foodPictureFirst.classList.add("food-picture");
    menuDivFirst.appendChild(foodPictureFirst);
    const foodNameFirst = document.createElement("div");
    foodNameFirst.classList.add("food-name");
    foodNameFirst.textContent = "STEAK";
    menuDivFirst.appendChild(foodNameFirst);
    const foodImageFirst = new Image();
    foodImageFirst.src = foodFirst;
    foodImageFirst.classList.add("opaque-image");
    foodImageFirst.onload = () => {
      const divWidth = foodPictureFirst.clientWidth;
      const divHeight = foodPictureFirst.clientHeight;
      foodImageFirst.width = divWidth;
      foodImageFirst.height = divHeight;
      foodPictureFirst.appendChild(foodImageFirst);
    };

    const menuDivSecond = document.createElement("div");
    menuDivSecond.classList.add("menu-flex");
    menuDiv.appendChild(menuDivSecond);
    const foodPictureSecond = document.createElement("div");
    foodPictureSecond.classList.add("food-picture");
    menuDivSecond.appendChild(foodPictureSecond);
    const foodNameSecond = document.createElement("div");
    foodNameSecond.classList.add("food-name");
    foodNameSecond.textContent = "OMELETTE";
    menuDivSecond.appendChild(foodNameSecond);
    const foodImageSecond = new Image();
    foodImageSecond.src = foodSecond;
    foodImageSecond.classList.add("opaque-image");
    foodImageSecond.onload = () => {
      const divWidth = foodPictureSecond.clientWidth;
      const divHeight = foodPictureSecond.clientHeight;
      foodImageSecond.width = divWidth;
      foodImageSecond.height = divHeight;
      foodPictureSecond.appendChild(foodImageSecond);
    };

    const menuDivThird = document.createElement("div");
    menuDivThird.classList.add("menu-flex");
    menuDiv.appendChild(menuDivThird);
    const foodPictureThird = document.createElement("div");
    foodPictureThird.classList.add("food-picture");
    menuDivThird.appendChild(foodPictureThird);
    const foodNameThird = document.createElement("div");
    foodNameThird.classList.add("food-name");
    foodNameThird.textContent = "CHICKEN";
    menuDivThird.appendChild(foodNameThird);
    const foodImageThird = new Image();
    foodImageThird.src = foodThird;
    foodImageThird.classList.add("opaque-image");
    foodImageThird.onload = () => {
      const divWidth = foodPictureThird.clientWidth;
      const divHeight = foodPictureThird.clientHeight;
      foodImageThird.width = divWidth;
      foodImageThird.height = divHeight;
      foodPictureThird.appendChild(foodImageThird);
    };

    const menuDivFourth = document.createElement("div");
    menuDivFourth.classList.add("menu-flex");
    menuDiv.appendChild(menuDivFourth);
    const foodPictureFourth = document.createElement("div");
    foodPictureFourth.classList.add("food-picture");
    menuDivFourth.appendChild(foodPictureFourth);
    const foodNameFourth = document.createElement("div");
    foodNameFourth.classList.add("food-name");
    foodNameFourth.textContent = "STEAK PASTA";
    menuDivFourth.appendChild(foodNameFourth);
    const foodImageFourth = new Image();
    foodImageFourth.src = foodFourth;
    foodImageFourth.classList.add("opaque-image");
    foodImageFourth.onload = () => {
      const divWidth = foodPictureFourth.clientWidth;
      const divHeight = foodPictureFourth.clientHeight;
      foodImageFourth.width = divWidth;
      foodImageFourth.height = divHeight;
      foodPictureFourth.appendChild(foodImageFourth);
    };

    menuAdded = true;
  }
  nav.classList.add("button-top");
};

export { showMenu, clearContent, menuAdded };
