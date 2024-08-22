document.addEventListener("DOMContentLoaded", function() {

let count = 0;

// Get the elements from the DOM 
const display = document.getElementById("display");
const message = document.getElementById("message");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

// Define your thresholds and messages for each number the person reaches. 
const threshold = [
    {threshold: 5, message: "WOW Great Job! Now Click To 25!"},
    {threshold: 25, message: "Amazing! Do You Think You Can Click To 100?"},
    {threshold: 100, message: "You Are Better Than Expected! Now Click To 1k."},
    {threshold: 1000, message: "Get To 1 Million. Text Me The Code. Win A Worth While Prize."}, 
    {threshold: 1000000, message: "Text Me This: LEAN GOBLIN!!"}
];

function updateMessage() {
    // Find the highest threshold met. 
    for (let i = threshold.length - 1; i >=0; i--) {
        if (count >=threshold[i].threshold) {
            message.innerText = threshold[i].message;
            return;
        }
    } 
    // Default message if no threshold is met. 
    message.innerText = "Increase The Number By 5!";
}

if (display && increaseBtn && decreaseBtn) {
    increaseBtn.addEventListener("click", function () {
        count++;
        display.innerText = count;
        updateMessage();
    });

    decreaseBtn.addEventListener("click", function() {
        count--;
        display.innerText = count;
        updateMessage();
    });

    // Initial message
    updateMessage();
} else {
    console.error("One or more elements not found.");
}
});