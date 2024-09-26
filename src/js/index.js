let inputBoxes = document.querySelectorAll(".input");
let requiredMessage = document.querySelectorAll(".required-message");
let submitButton = document.querySelector(".send-btn");

function checkingSubmition() {
    for (let i = 0; i < inputBoxes.length; i++) {
        if (inputBoxes[i].value === "") {
            inputBoxes[i].classList.add("not-filled");
            inputBoxes[i].classList.remove("filled");
            requiredMessage[i].classList.add("not-filled");
        } else {
            inputBoxes[i].classList.add("filled");
            inputBoxes[i].classList.remove("not-filled");
            requiredMessage[i].classList.remove("not-filled");
        }
    }
}

submitButton.addEventListener("click", checkingSubmition);