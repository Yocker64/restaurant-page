import myImage from "./img/landing-page-background.jpg";

const img = document.createElement("img");
img.src = myImage;
img.alt = 'My Image';
img.width = 300;
document.body.appendChild(img);
