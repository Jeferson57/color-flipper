const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "pink"
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // Get random number between 0 - 3 colors[3]
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};