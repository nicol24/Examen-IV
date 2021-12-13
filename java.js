let big = document.getElementById("big");


let nombre = document.getElementById("nombre");
let color = document.getElementById("color");
let guardar_btn = document.getElementById("guardar_btn");

let arr = [];
const guardar = () => 
{
    arr.push({
        nombre: nombre.value,
        color: color.value,
    });
    localStorage.setItem("arr", JSON.stringify(arr));
    nombre.value ="";
    color.value ="";
}; 
guardar_btn.addEventListener("click", ()=> {guardar()})