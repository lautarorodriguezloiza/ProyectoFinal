/*Pre-entregas pasadas



// let nombre= prompt("Escriba su nombre y apellido")
// let fechaDeNacimiento = prompt("Fecha de nacimiento")
// let dni = prompt("DNI")




// let seleccioneProducto = Number(prompt("Seleccione una opcion: \n 1 - playstation \n 2 - xboxSeriesX \n 3 - nvidiaRtx \n 4 - nintendoSwitch \n 5 - sillaGamer"))

// const precioPlay = 400000
// const precioxboxSeriesX = 300000
// const precionvidiaRtx   = 1000000
// const precionintentoSwitch = 100000
// const preciosillaGamer    = 50000


// let seleccionCuotasTres = 3
// let seleccionCuotasSeis = 6
// let seleccionCuotasDoce = 12



// numeroDeCuotas(seleccioneProducto)



// function numeroDeCuotas(productos ){

//     let numeroIngresado = parseInt(prompt("Tenemos de 3 ,6 , 12 cuotas sin interes fijate cuanto deberias pagar dependiendo las cuotas"))

//             switch(productos){
//                 case 1:
//                     if(numeroIngresado==3) {
//                         let resultado = precioPlay/seleccionCuotasTres
//                             alert(precioPlay  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precioPlay/seleccionCuotasSeis
//                             alert(precioPlay  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precioPlay/seleccionCuotasDoce
//                             alert(precioPlay  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;



//                 case 2:
//                     if(numeroIngresado==3) {
//                         let resultado = precioxboxSeriesX/seleccionCuotasTres
//                             alert(precioxboxSeriesX  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precioxboxSeriesX/seleccionCuotasSeis
//                             alert(precioxboxSeriesX  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precioxboxSeriesX/seleccionCuotasDoce
//                             alert(precioxboxSeriesX + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;

//                 case 3:

//                     if(numeroIngresado==3) {
//                         let resultado = precionvidiaRtx/seleccionCuotasTres
//                             alert(precionvidiaRtx  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precionvidiaRtx/seleccionCuotasSeis
//                             alert(precionvidiaRtx  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precionvidiaRtx/seleccionCuotasDoce
//                             alert(precionvidiaRtx  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;
//                 case 4:
//                     if(numeroIngresado==3) {
//                         let resultado = precionintentoSwitch/seleccionCuotasTres
//                             alert(precionintentoSwitch  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precionintentoSwitch/seleccionCuotasSeis
//                             alert(precionintentoSwitch  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precionintentoSwitch/seleccionCuotasDoce
//                             alert(precionintentoSwitch  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;

//                 case 5:
//                     if(numeroIngresado==3) {
//                         let resultado = preciosillaGamer/seleccionCuotasTres
//                             alert(preciosillaGamer  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = preciosillaGamer/seleccionCuotasSeis
//                             alert(preciosillaGamer  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = preciosillaGamer/seleccionCuotasDoce
//                             alert(preciosillaGamer  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;
// }
// }



// alert("Espero que le haya servido! :D")

// alert("Elija los productos que desea comprar")



// class Producto{
//     constructor(){
//         this.seleccion = prompt("Seleccione un producto que vio anteriormente \n 1 - playstation: 400000 \n 2 - xboxSeriesX: 300000 \n 3 - nvidiaRtx: 1000000 \n 4 - nintendoSwitch: 100000 \n 5 - sillaGamer: 50000")
//         this.precio = parseInt(prompt("Ponga el precio porfavor"))
//     }
// }
// const arrayDeProducto= []
// let seguirAgregandoAlCarrito= true
// while(seguirAgregandoAlCarrito){
//     let seguirAgregando= new Producto ()
//     arrayDeProducto.push(seguirAgregando)

//     let finalizaCompra= parseInt(prompt("Elija 1 si quiere seguir agregando productos al carrito, elija 2 si no quiere agregar mas "))
//     if(finalizaCompra===2){
//     break}
// }
// function mostrarTotal(){
//     let precioTotal = 0
//     for(productos of  arrayDeProducto){
//         precioTotal = precioTotal+ productos.precio
//     }
//     return precioTotal
// }

// alert("El total de la compra es = " + mostrarTotal())

// alert("Muchas Gracias por su compra!!!")


/* Informacion del Usuario*/

// let informacionUsuario = document.getElementById("informacion");
//   informacionUsuario.addEventListener("submit",agregarInformacion)

//function agregarInformacion(e){
//          e.preventDefault()
//    let nombreUsuario = e.target[0].value
//  let edad = e.target[1].value
//let nombreEdad = document.createElement ("div")
//nombreEdad.innerHTML= `Su nombre de usuario es:  ${nombreUsuario}su edad es: ${edad}` 
//document.body.appendChild(nombreEdad)
//localStorage.setItem('nombreEdad',JSON.stringify(nombreEdad))
//}


//let productosGuardados = JSON.parse(localStorage.getItem(producto))
//if (nombreGuardado) {
//   productosGuardados.innerHTML = "Sus Productos:"
//} else {
//   localStorage.setItem("Playstation 5", JSON.stringify(producto))
//} {
//   localStorage.setItem(" xboxSeries X", JSON.stringify(producto))
//} {
//   localStorage.setItem(" Nvidia 4060", JSON.stringify(producto))
//}

//async function obtenerProductos(){
//return fetch ('./productos.json')
//  .then((res) => res.json())
// .then((data) => data)
//}


/*CARRITO*/

const productos = [{
        id: 1,
        nombre: 'Xbox Series X',
        precio: 250000
    },
    {
        id: 2,
        nombre: 'Playstation 5',
        precio: 400000
    },
    {
        id: 3,
        nombre: 'Nvidia 4060',
        precio: 3000000
    },
]

const carrito = []

function listadoDeProductosUno() {
    for (const producto of productos) {
        let crearElemento = document.createElement('div')
        crearElemento.innerHTML = `
            <h1>${producto.nombre}</h1>
            <h1>$ ${producto.precio}</h1>
            <button class="button" id=${producto.id} >Agregar al carrito</button>
        `
        crearElemento.className = 'card'
        let list = document.getElementById('listadoDeProductos')
        list.append(crearElemento)
        let botonParaAgregar = document.getElementById(`${producto.id}`)
        botonParaAgregar.addEventListener('click', agregarAlCarrito)
    }
}


function agregarAlCarrito(e) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    let id = Number(e.target.getAttribute('id'))
    let productoAAgregar = productos.find((producto) => producto.id === id)
    if (existeCarrito(productoAAgregar)) {
        let productoEnCarrito = carrito.find((producto) => producto.id === productoAAgregar.id)
        let ProductoPresente = carrito.indexOf(productoEnCarrito)
        carrito[ProductoPresente].cantidad += 1
        let productoAnterior = document.getElementById(`producto${productoAAgregar.id}`)
        productoAnterior.innerHTML = `
            <h2 class="nombreproducto">${productoAAgregar.nombre}</h2>
            <h2 class="precioproducto">$ ${productoAAgregar.precio}</h2>
            <h2 class="cantidad">Cantidad: ${carrito[ProductoPresente].cantidad}</h2>
            <h2 class="precio-total"> Precio total de ${productoAAgregar.nombre} : $ ${carrito[ProductoPresente].cantidad*productoAAgregar.precio}</h2>
        `
    } else {
        let productoConCantidad = {
            ...productoAAgregar,
            cantidad: 1
        }
        carrito.push(productoConCantidad)
        let cardCarrito = document.createElement('div')
        cardCarrito.innerHTML = `
            <h3 class="nombreproductodos">${productoConCantidad.nombre}</h3>
            <h3 class="precioproductodos">$ ${productoConCantidad.precio}</h3>
            <h3 class="cantidaddos">Cantidad de productos: 1</h3>
            
        `
        cardCarrito.setAttribute('id', `producto${productoConCantidad.id}`)
        let carritoContendor = document.getElementById('carrito')
        carritoContendor.append(cardCarrito)
    }

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste al Carrito este producto',
        showConfirmButton: false,
        timer: 1000

    })

    function existeCarrito(revisarProducto) {
        return (carrito.some((producto) => producto.id === revisarProducto.id))
    }

}


/*Alertas*/

function finalizarCompra() {
    let finalizar = document.getElementById('fin-compra')
    finalizar.addEventListener('click', productosAgregados)
}

function productosAgregados() {
    Swal.fire({
        title: 'Está seguro de finalizar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, quiero agregar otro producto'

    }).then((result) => {
        if (result.isConfirmed) {
            let sumaTotal = 0
            for (producto of carrito) {
                sumaTotal += producto.precio * producto.cantidad
            }
            Swal.fire(`El total de su compra es $${sumaTotal}`)
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Puede seguir agregando productos al carrito',
                showConfirmButton: false,
                timer: 1000
            })
        }
    })
}


function vaciarCarrito() {
    carrito.length = 0;
    const carritoContenedor = document.getElementById('carrito');
    carritoContenedor.innerHTML = '';

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Vaciaste el Carrito Correctamente!',
        showConfirmButton: false,
        timer: 1000

    })
}

const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


/*Funciones*/

listadoDeProductosUno()
finalizarCompra()


/*JSON Y FETC*/

fetch('productos.json')
    .then(response => response.json())
    .
then(data => console.log(data))
    .
catch(error => console.error(error));



//fetch('./productos.json')
 //   .then((res) => res.json())
  //  .then((data) => {

        //data.forEach((producto) => {
         //   const div = document.createElement('div')
          //  div.innerHTML = `
    //<h4 class="productos-json">${producto.nombre}</h4>
   // <p class="parrafojson">$${producto.precio}</p>
//`
  //          document.body.append(div)
    //    })
    //})



//Mi idea aca era incluir el footer como un agregado de diseño como tiene las demas paginas pero no me termino saliendo 

//let footer = document.createElement('div')
//      footer.innerHTML = `
//     <footer class="fondo-footer footerproductos">
//    <div class="sass">
//       <a href="https://www.instagram.com/entertainmentok2/" target="_blank"><img class="icon" src="../image/ig.svg" alt="icono de instragram(camara de fotos) en blanco y negro"></a>
// <a href="https://twitter.com/home" target="_blank"><img class="icon" src="../image/twiter.svg" alt="icono de twiter (un pajaro volando) en blanco y negro"></a>
//  <a href="https://mail.google.com/mail/u/1/?ogbl#inbox?compose=new"><img class="icon" src="../image/gmail.svg" alt="carta de mail">
//     </div>
//</footer>
// `