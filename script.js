

let button = document.querySelector("#button");

    
function getValue(e) {
    // debugger
    // let nombre = document.querySelector("#nombre").value;
    let nombre = document.querySelector("#nombre").value;
    let telefono = document.querySelector("#telefono").value;
    let email = document.querySelector("#email").value;
    let contraseña = document.querySelector("#contraseña").value;
    
            
    if(!nombre || !telefono || !email){
            // alert("Completa todos los campos!");
            return; //Parar ejecucion
        } else {
            
            let result = document.querySelector(".alerta");
            // result.style.opacity = "1";
            // result.style.top = "0";
            result.style.display= "grid";
            
            let inputNombre = document.querySelector(".nombreValue");
            let inputTelefono = document.querySelector(".telValue");
            let inputEmail = document.querySelector(".emailValue");
            let inputContraseña = document.querySelector(".passwordValue");
            
            inputNombre.innerHTML = "Nombre</br>" + nombre;
            inputTelefono.innerHTML = "Telefono</br>" + telefono;
            inputEmail.innerHTML = "Correo</br>" + email;
            inputContraseña.innerHTML = "Contraseña</br>" + contraseña;
            e.preventDefault();    

                }
            
}

button.addEventListener("click", getValue);









button.addEventListener("click", clearInputs);
function clearInputs() {
// document.querySelector("#button").reset();
let inputs = document.querySelectorAll("input:not(#button)");
// console.log(inputs);
inputs.forEach((e) => {
  e.value = "";
});
}

let cerrar = document.querySelector(".cerrar");

function cerrarR(){
let result = document.querySelector(".alerta");
result.style.display = "none";
// console.log(cerrar);
}

cerrar.addEventListener("click", cerrarR)