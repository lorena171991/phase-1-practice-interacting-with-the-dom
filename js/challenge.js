const timer = document.getElementById("counter");
let count = 0;
function incrementTimer() {
    count++;
    timer.innerText = count;
}

function startTimer() {
    setInterval(incrementTimer, 1000);
}

window.addEventListener("load", startTimer);


const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.addEventListener("click", function() {
    const currentValue = parseInt(timer.innerText, 10);
    timer.innerText = currentValue + 1;
});

minusButton.addEventListener("click", function() {
    const currentValue = parseInt(timer.innerText, 10);
    timer.innerText = currentValue - 1;
});
