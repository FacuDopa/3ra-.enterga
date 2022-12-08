let boton;
let cantProductos = 0


let seccionCartas = document.querySelector('#seccion-cards');

const constructorProductos = async () => {
   const response = await fetch ('json/productos.json');
   const data = await response.json()

   data.forEach(producto => {

      cantProductos ++

      let div = document.createElement('div');
      div.className = 'card border-dark';

      div.innerHTML = `
      <img class="card-img-top" height="374" src="${producto.imagenCard}" >
      <div class="card-body">
         <h4 class="card-title border-botto"> ${producto.nombre} </h4>
         <p class="card-text"> ${producto.descripcion} <br> Precio: $${producto.precio} </p>
         <button id="${cantProductos}" class="boton-cards botonDOM">Agregar al carrito</button>
      </div>
      `

      seccionCartas.appendChild(div)

      localStorage.setItem('valoresArray', cantProductos)   
   });

}

constructorProductos();

const constructorCarrousel = async () => {
   const response = await fetch("./productosCarrousel.json");
   const data = await response.json();
   data.forEach ( producto => {

      let div = document.createElement('div');
      div.className = 'card border-dark';

      div.innerHTML = `
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
         </div>

         <div class="carousel-inner">
            <div class="carousel-item active">
               <img src="./img/avion.jpg" alt="avion de madera" class="img-fluid d-block">
            </div>
            <div class="carousel-item">
               <img src="./img/avion2.jpg" alt="avion de madera" class="img-fluid d-block">
            </div>
            <div class="carousel-item">
               <img src="./img/avion3.jpg" alt="avion de madera" class="img-fluid d-block">
            </div>
         </div>

         <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
         </button>
      </div>
      <div class="card-body">
         <h4 class="card-title border-botto">Avión de juguete.</h4>
         <p class="card-text">Resistente, no tiene piezas movibles, ideal para chicos pequeños</p>
         <button id="boton-avion" class="boton-cards">Agregar al carrito </button>
      </div>
      `

      seccionCartas.appendChild(div)
   })
}
