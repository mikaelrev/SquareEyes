const rent = document.querySelector(".rent-button");
const buy = document.querySelector(".buy-button");
const cancelButton = document.querySelector(".cancel-button");
const confirmButton = document.querySelector(".confirm-button");
const confirmSection = document.querySelector(".confirm");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("pop-up");
const popupBody = document.querySelector(".pop-up_body");
const rentSection = document.querySelector(".rent");


rent.onclick = function() {
    activatePopup();
    popupBody.innerHTML = `<img src="images/movie-thumbnail-xsmall.jpg"></img>
                            <p class="purchase-text">Cofirm purchase 49 kr</p>`;
}

buy.onclick = function() {
    activatePopup();
    popupBody.innerHTML = `<img src="images/movie-thumbnail-xsmall.jpg"></img>
                            <p class="purchase-text">Confirm purchase 149 kr</p>`;
}

function activatePopup() {
    popup.classList.add("active");
    overlay.classList.add("active");
}

cancelButton.onclick = function() {
    removePopup();
}

overlay.onclick = function() {
    removePopup();
}

function removePopup() {
    popup.classList.remove("active");
    overlay.classList.remove("active");
}

confirmButton.onclick = function() {
    confirmSection.innerHTML = `<div class="purchase-message">Movie Title Purchased</div>`;
    popupBody.innerHTML += ``;
}
