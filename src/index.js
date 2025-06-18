import myImage from "./img/background-main.jpg";
import chefPic from "./img/chef.jpeg";
import locationPic from "./img/restaurant-location.png";
import './styles/fontsAndReset.css';
import './styles/styles.css';
import hawaian from "./img/hawaii.jpg";
import pepp from "./img/pepp.jpeg";
import margarita from "./img/pizza-margarita.jpg";
import cuatroquesos from "./img/pizza-cuatro-quesos.jpg";



const content = document.getElementById("content");


function loadHome() {
    content.innerHTML = ""; // Clear previous content if needed
    let desc = document.createElement("div");
    let subtitle = document.createElement("h2");
    let subSubtitle1 = document.createElement("h3");
    let subSubtitle2 = document.createElement("h3");
    let chefImage = document.createElement("img");

    chefImage.setAttribute("id", "chefImage");
    chefImage.src = chefPic;
    desc.setAttribute("id", "desc");

    subtitle.textContent = "We are gonna serve you the best Pizza";
    subSubtitle1.textContent = "Our traditional pizza since 1900";
    subSubtitle2.textContent = "Order online or visit us!";

    desc.appendChild(subtitle);
    desc.appendChild(subSubtitle1);
    desc.appendChild(chefImage);
    desc.appendChild(subSubtitle2);

    content.appendChild(desc);
}

function createOption( name,src) {
    let pizzaImg = document.createElement("img");
    pizzaImg.src = src;
    let option = document.createElement("div");
    let desc = document.createElement("p");
    desc.textContent=name;
    option.setAttribute("class","option");
    pizzaImg.alt = name;
    option.appendChild(pizzaImg);
    option.appendChild(desc);

    return option;
}

function loadMenu() {
    
    
    content.innerHTML = ""; // Clear previous content if needed
    let menu = document.createElement("div");
    menu.setAttribute("id","menu");
        menu.appendChild(createOption("Margarita",margarita));
        menu.appendChild(createOption("4 Cheese",cuatroquesos));
        menu.appendChild(createOption("Pepperoni",pepp));
        menu.appendChild(createOption("Hawaiian",hawaian));
    
    content.appendChild(menu);

}

function loadAbout() {
    content.innerHTML = ""; // Clear previous content if needed
    let desc = document.createElement("div");
    let subtitle = document.createElement("h2");
    let subSubtitle1 = document.createElement("h3");
    let subSubtitle2 = document.createElement("h3");
    let location = document.createElement("img");

    location.setAttribute("id", "locationImg");
    location.src = locationPic;
    desc.setAttribute("id", "desc");

    subtitle.textContent = "Call us to: 123-456-7890";
    subSubtitle1.textContent = "We are located at: Around the corner";
    subSubtitle2.textContent = "Order online or visit us!";

    desc.appendChild(subtitle);
    desc.appendChild(subSubtitle1);
    desc.appendChild(location);
    desc.appendChild(subSubtitle2);

    content.appendChild(desc);
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundImage = `url(${myImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    const homeButton = document.getElementById("homeButton");
    const menuButton = document.getElementById("menuButton");
    const aboutButton = document.getElementById("aboutButton");

    homeButton.addEventListener("click", loadHome);
    menuButton.addEventListener("click", loadMenu);
    aboutButton.addEventListener("click", loadAbout);
    loadHome(); // load Home by default
});
