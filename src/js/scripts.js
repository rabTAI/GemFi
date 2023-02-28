/*!
* Start Bootstrap - Full Width Pics v5.0.5 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let counter = 3; //mint

//Mint 
function increment() {
    counter += 3;
}

function decrement() {
    counter -= 3;
}

function get() {
    return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
    if (input.value < 9) {
        increment();
    }
    input.value = get();
});

dec.addEventListener("click", () => {
    if (input.value > 3) {
        decrement();
    }
    input.value = get();
});
