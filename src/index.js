import myImage from "./img/background-main.jpg";
import './styles/fontsAndReset.css';
import './styles/styles.css';


document.body.style.backgroundImage = `url(${myImage})`;
document.body.style.backgroundSize = "cover";           // 🔥 Makes it cover the whole screen
document.body.style.backgroundRepeat = "no-repeat";      // 🔥 Prevents tiling/repeating
