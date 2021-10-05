function errorMessage(message) {
    if(!message) {
        message = "Oops.. Something wen't wrong. Try again in a few moments";
    }
    return `<div class="error">${message}</div>`;
}