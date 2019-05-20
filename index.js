import App from './src/javascript/app';

import './src/styles/styles.css';

new App();

const newShadow = document.getElementById("shadow"),
    popup = document.getElementById("callback");




function hidePopup() {
    window.onclick = function () {
        if (popup.checked === false) {
            newShadow.style.display = "none";
        }
    };
}

hidePopup();


