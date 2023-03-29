// Ejercicio 3 fix-wikipedia


// ************ #1 ***********

const h2 = document.getElementById("subtitle");
h2.remove();



// ************ #2 ***********

const span = document.querySelectorAll(".bold");
span.forEach((e) => e.style.fontWeight = "bold");


// ************ #3 ***********

const span2 = document.querySelectorAll(".italics");
span2.forEach((e) => e.style.fontStyle = "italic");



// ************ #4 ***********


const array = ["Introducción", "Biografía", "Obras"];
const ul = document.querySelector("#index > ul");
for (let element of array) {
    const li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
}


// ************ #5 ***********
