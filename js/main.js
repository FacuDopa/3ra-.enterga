// DOM
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

// arrays
let carrito = []


// Variables Globales 
let nombre = carrito.nombre
let precio = carrito.precio


// funciones
let agregarCarrito = (nombre, precio) => {
   if (carrito.length === 0 ) {
      tabla.innerHTML = `
      <h3 class="tabla-carrito-n"> Nombre del Producto </h3>
      <h3 class="tabla-carrito-p"> Precio del Producto </h3>
      `
   }

   carrito.push({nombre: nombre, precio: precio})
   console.log(carrito);

   for ( i = carrito.length; i <= carrito.length; i++ ) {
      let divCarrito = document.createElement('div');
      divCarrito.className = 'div-carrito'

      divCarrito.innerHTML = `
      <p class="nombre-carrito"> ${nombre} </p>
      <p class="precio-carrito"> ${precio} </p>
      `

      seccionCarrito.appendChild(divCarrito)
   }

   localStorage.clear()
   localStorage.setItem('carrito', JSON.stringify(carrito));
}

botonRack.addEventListener('click', () => agregarCarrito('Rack para tv', 5000));
botonAvion.addEventListener('click', () => agregarCarrito('Avion de Juguete', 3000));
botonBanco.addEventListener('click', () => agregarCarrito('Banco', 2000));
botonMesita.addEventListener('click', () => agregarCarrito('Mesita de luz', 4500));
botonLapicero.addEventListener('click', () => agregarCarrito('Lapicero', 1500));
botonCamion.addEventListener('click', () => agregarCarrito('Camion de juguete', 2000));
botonAuricular.addEventListener('click', () => agregarCarrito('Soporte para auricular', 4500));
botonMaceta.addEventListener('click', () => agregarCarrito('Maceta', 2000));