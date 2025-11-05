//1.1
const btn = document.querySelector("#btnToClick");

btn.addEventListener("click", (event) => {
    console.log ("Has hecho click!");
    console.log(event);
});

//1.2
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", () => {
    console.log("El valor actual es:", inputFocus.value);
});

//1.3
const inputValue = document.querySelector(".input");

inputValue.addEventListener("input", () =>{
    console.log("Escribiendo:", inputValue.value);
});