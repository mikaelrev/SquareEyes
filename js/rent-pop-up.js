const rent = document.querySelector(".rent-button");
const buy = document.querySelector(".buy-button");
const closeButton = document.querySelector(".close-button");
const confirmButton = document.querySelector(".confirm-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("pop-up");
const popupBody = document.querySelector(".pop-up_body");

rent.onclick = function() {
    activatePopup();
    popupBody.innerHTML = `<p class="purchase-text">Cofirm purchase 49 kr</p>`;
}

buy.onclick = function() {
    activatePopup();
    popupBody.innerHTML = `<p class="purchase-text">Confirm purchase 149 kr</p>`;
}

function activatePopup() {
    popup.classList.add("active");
    overlay.classList.add("active");
}

closeButton.onclick = function() {
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
    popupBody.innerHTML = `<div class="purchase-message">Movie Title Purchased</div>`;
}
