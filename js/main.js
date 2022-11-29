// Obtener elementos del DOM
let seccionCarrito = document.getElementById('seccion-carrito')
let tabla = document.getElementById('tabla-carrito')

let botonRack = document.getElementById('boton-rack');
let botonAvion = document.getElementById('boton-avion')
let botonBanco = document.getElementById('boton-banco')
let botonMesita = document.getElementById('boton-mesita')
let botonLapicero = document.getElementById('boton-lapicero')
let botonCamion = document.getElementById('boton-camion')
let botonAuricular = document.getElementById('boton-auricular')
let botonMaceta = document.getElementById('boton-maceta')

let divBotonEliminar = document.getElementById('boton-eliminar')

let botonEliminar = document.createElement('button');
botonEliminar.setAttribute('id', 'eliminar-carrito')
botonEliminar.innerHTML = 'Eliminar el carrito';
botonEliminar.className = 'ocultar';
divBotonEliminar.appendChild(botonEliminar);

let precioFinal = document.createElement('div')
precioFinal.setAttribute('id', 'precio-final')



// Variables Globales 
let carrito = []
let divCarrito;
let totalCarrito;
let vof;


// funciones

const crearTabla = (VoF) => {

   seccionCarrito.className = 'seccion-carrito'
   tabla.className = 'tabla-carrito'
   precioFinal.className = 'div-carrito'
   
   tabla.innerHTML = `
   <h3 class="tabla-carrito-n"> Nombre del Producto </h3>
   <h3 class="tabla-carrito-p"> Precio del Producto </h3>
   `

   if (VoF) {
      carrito.forEach (item => {
         divCarrito = document.createElement('div');
         divCarrito.className = 'div-carrito'
   
         divCarrito.innerHTML = `
         <h4 class="nombre-carrito"> ${item.nombre} </h4>
         <h4 class="precio-carrito"> ${item.precio} </h4>
         `

         tabla.insertAdjacentElement('afterend', divCarrito)

         totalCarrito = carrito.reduce((acum, item) => acum + item.precio, 0);
         precioFinal.innerHTML = `
         <h4 class="nombre-carrito"> Precio Total de la Compra </h4>
         <h4 class="precio-carrito"> ${totalCarrito} </h4>
         `
         seccionCarrito.insertAdjacentElement('beforeend', precioFinal)
      })
   }

   botonEliminar.className = 'mostrar'
}

const agregarCarrito = (Anombre, Aprecio) => {
   if (carrito.length === 0) {
      vof = false
      crearTabla(vof)
   }

   carrito.push({nombre: Anombre, precio: Aprecio})

   for ( i = carrito.length; i <= carrito.length; i++ ) {
      let divCarrito = document.createElement('div');
      divCarrito.className = 'div-carrito'

      divCarrito.innerHTML = `
      <h4 class="nombre-carrito"> ${Anombre} </h4>
      <h4 class="precio-carrito"> ${Aprecio} </h4>
      `

      tabla.insertAdjacentElement('afterend', divCarrito)
   }

   totalCarrito = carrito.reduce((acum, item) => acum + item.precio, 0);
   precioFinal.innerHTML = `
   <h4 class="nombre-carrito"> Precio Total de la Compra </h4>
   <h4 class="precio-carrito"> ${totalCarrito} </h4>
   `
   seccionCarrito.insertAdjacentElement('beforeend', precioFinal)

   localStorage.setItem('carrito', JSON.stringify(carrito));
   let recuperarCarrito = localStorage.getItem('carrito');
   localStorage.setItem('carritoStorage', recuperarCarrito);
}

const eliminarCarrito = () => {
   localStorage.clear()
   carrito = [];
   recuperado = [];

   seccionCarrito.remove()

   let nuevaSeccCarrito = document.createElement('section');
   nuevaSeccCarrito.innerHTML = `<div id="tabla-carrito"></div>`
   nuevaSeccCarrito.setAttribute('id', 'seccion-carrito')
   divBotonEliminar.insertAdjacentElement('beforebegin', nuevaSeccCarrito)


   tabla = document.getElementById('tabla-carrito')
   seccionCarrito = document.getElementById('seccion-carrito')

   botonEliminar.className = 'ocultar';
   seccionCarrito.className = ''
}

// recuperar el carrito desde el storage
let recuperado = JSON.parse(localStorage.getItem('carritoStorage'));
if (recuperado) {
   vof = true
   carrito = recuperado
   crearTabla(vof)
}

botonRack.addEventListener('click', () => agregarCarrito('Rack para tv', 5000));
botonAvion.addEventListener('click', () => agregarCarrito('Avion de Juguete', 3000));
botonBanco.addEventListener('click', () => agregarCarrito('Banco', 2000));
botonMesita.addEventListener('click', () => agregarCarrito('Mesita de luz', 4500));
botonLapicero.addEventListener('click', () => agregarCarrito('Lapicero', 1500));
botonCamion.addEventListener('click', () => agregarCarrito('Camion de juguete', 2000));
botonAuricular.addEventListener('click', () => agregarCarrito('Soporte para auricular', 4500));
botonMaceta.addEventListener('click', () => agregarCarrito('Maceta', 2000));

botonEliminar.addEventListener('click', () => eliminarCarrito())