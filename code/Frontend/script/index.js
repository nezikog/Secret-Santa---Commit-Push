'use strict';

//IMPORTS

import {callModalWindow} from "./modules/getReadyOrGift/getButtonLogic.js";

//IMPORTS

//VARIABLES

const registerModal = document.querySelector(".register-modal");
const resultModal = document.querySelector(".result-modal");
const button = document.getElementById("get");
//VARIABLES

//CODE
button.addEventListener("click", () => {
    callModalWindow(registerModal);
    callModalWindow(resultModal);
})
//CODE