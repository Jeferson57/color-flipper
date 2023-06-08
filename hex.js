const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copyButtom = document.querySelector(".copy-button");
const autoButtom = document.querySelector(".generate-auto");
const container = document.querySelector(".container");
// Crear la barra de progreso circular
let circularProgress = document.createElement("div");
let circularProgressBefore = document.createElement("div");
circularProgress.classList.add("circular-progress");
circularProgress.style.position = "relative";
circularProgressBefore.classList.add("circularProgreseBefore");
container.insertAdjacentElement("afterbegin", circularProgress);
circularProgress.insertAdjacentElement("afterbegin", circularProgressBefore);

// // Obtener la referencia de los controladores deslizantes
// const redSlider = document.querySelector('#red-slider');
// const greenSlider = document.querySelector('#green-slider');
// const blueSlider = document.querySelector('#blue-slider');

// //Agregar manejadores de eventos a los deslizantes
// redSlider.addEventListener("input", generateColorRGB);
// greenSlider.addEventListener("input", generateColorRGB);
// blueSlider.addEventListener("input", generateColorRGB);

// function generateColorRGB() {
//     // Obtener los valores de los controladores deslizantes

//     let redValue = redSlider.value;
//     let greenValue = greenSlider.value;
//     let blueValue = blueSlider.value;

//     // Contruir color RGB
//     const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

//     // Utilizar color RGB
//     color.textContent = rgbColor;
//     circularProgressBefore.style.backgroundColor = rgbColor;
// }

function getRamdomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function generateColor() {
    // Crear función de carga
    let progressStarValue = 0;
    let progressEndValue = 100;

    function load() {
        let progress = setInterval(() => {
            progressStarValue++;
            circularProgress.style.background = `conic-gradient(#333 ${progressStarValue * 3.6}deg, #EDEDED 0deg)`;

            if(progressStarValue == progressEndValue) {
                clearInterval(progress);
                progressStarValue = 0;
            }
        }, 20);
    }
    load();

    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRamdomNumber()];
    };
    color.textContent = hexColor;
    circularProgressBefore.style.backgroundColor = hexColor; 
}
btn.addEventListener("click", generateColor);


function copyColorCode() {
    const colorCode = color.textContent;

    navigator.clipboard.writeText(colorCode)
        .then(() => {
            alert("¡Color copiado al portapapeles!");
        })
        .catch((error) => {
            console.error("¡Error al copiar el colo!", error);
        });
};
copyButtom.addEventListener("click", copyColorCode);

let intervalID;
function toggleAutoGenerate() {
    if(intervalID) {
        clearInterval(intervalID);
        intervalID = null;
        circularProgress.style.background = `conic-gradient(#7D2AE8 0deg, #EDEDED 0deg)`;
        autoButtom.textContent = "Auto generate";
    } else {
        intervalID = setInterval(generateColor, 2000)
        autoButtom.textContent = "Stop auto generate";
    }
};
autoButtom.addEventListener("click", toggleAutoGenerate);