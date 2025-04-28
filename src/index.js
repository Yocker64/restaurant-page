import myImage from "./img/background-main.jpg";
import chefPic from "./img/chef.jpeg";  // 👈 import chef image
import './styles/fontsAndReset.css';
import './styles/styles.css';

document.body.style.backgroundImage = `url(${myImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

const content = document.getElementById("content");

function LoadHome() {
    let desc = document.createElement("div");
    let subtitle = document.createElement("h2");
    let subSubtitle1= document.createElement("h3");
    let subSubtitle2= document.createElement("h3");
    let chefImage = document.createElement("img");
    chefImage.setAttribute("id","chefImage");
    chefImage.src = chefPic; // Set the source
    desc.setAttribute("id","desc");

    subtitle.textContent = "We are gonna serve you the best Pizza";
    subSubtitle1.textContent = "Our traditional pizza since 1900";
    subSubtitle2.textContent = "Order online or visit us!"
    desc.appendChild(subtitle);
    desc.appendChild(subSubtitle1);
    desc.appendChild(chefImage);
    desc.appendChild(subSubtitle2);

    content.appendChild(desc);
}

LoadHome(); // 👈 call the function
