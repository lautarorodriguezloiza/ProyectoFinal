/* Informacion del Usuario*/

let informacionUsuario = document.getElementById("informacion");
informacionUsuario.addEventListener("submit", agregarInformacion)
Toastify({

    text: "Agregue su Nombre, Usuario y edad en el pie de pagina, para conocerte!",

    duration: 3000

}).showToast();

function agregarInformacion(e) {
    e.preventDefault()
    let nombre = e.target[0].value
    let nombreUsuario = e.target[1].value
    let edad = e.target[2].value
    let nombreEdad = document.createElement("div")
    nombreEdad.innerHTML = `Usted se registro con el nombre de:  ${nombre} Usuario: ${nombreUsuario} Su edad es: ${edad} `
    document.body.appendChild(nombreEdad)
    setTimeout(() => {
        Toastify({

            text: `Hola bienvenido!!  ${nombre}`,

        }).showToast();
    }, 3000)



    /*class para cambiar un poco el diseño al texto*/

    informacion.className = "infouser"
    nombreEdad.classList.add("informacion-usuario")


    /*local y json*/
    let nombreGuardado = JSON.parse(localStorage.getItem(nombre, nombreUsuario, edad))
    if (nombreGuardado) {
        nombreGuardado.innerHTML = "Su informacion:"
    } else {
        localStorage.setItem("Nombre", JSON.stringify(nombre))
    } {
        localStorage.setItem(" NombreUsuario", JSON.stringify(nombreUsuario))
    } {
        localStorage.setItem(" Edad", JSON.stringify(edad))
    }

}




