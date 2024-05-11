const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";
document.addEventListener('DOMContentLoaded', function () {
    // Get the "YES" button
    var yesButton = document.getElementById('yes-btn');

    // Add click event listener to the "YES" button
    yesButton.addEventListener('click', function () {
        // Redirect to index.html
        window.location.href = 'index1.html';
    });
});
