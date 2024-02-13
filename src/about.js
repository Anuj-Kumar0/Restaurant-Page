const aboutContent = document.querySelector("#aboutContent");

let aboutAdded = false;
const nav = document.querySelector("nav");

const showAbout = () => {
  if (!aboutAdded) {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");
    aboutContent.appendChild(aboutDiv);

    const aboutTransparent = document.createElement("div");
    aboutTransparent.classList.add("transparent");
    aboutDiv.appendChild(aboutTransparent);
    aboutAdded = true;
  }
  nav.classList.add("button-top");
};

export { showAbout };
