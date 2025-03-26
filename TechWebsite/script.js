const subscribeButton = document.querySelector(".subscribe-button");

if (subscribeButton) {
    subscribeButton.addEventListener("click", () => {
        alert("Thanks for visiting Tech Vision! More updates coming soon.");
    });
} else {
    console.error("Subscribe button not found.");
}