let carrito = [];
const data = [];
let datos;
const pedirDatos = async () => {
  let peticion = await fetch('../JSON/Productos.json');
  let dataParser = await peticion.json();

  data.push(dataParser[0]);

  datos = JSON.stringify(data);
  localStorage.setItem('carrito', datos);
};
let containerCarrito = document.getElementById('carrito');

pedirDatos();
let datosFunc = JSON.parse(localStorage.getItem('carrito'));

function mostrarCarrito(array) {
  for (const product of array) {
    const cardcarrito = document.createElement('div');
    cardcarrito.classList.add('cardProducto');
    cardcarrito.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${product.imagenUrl}" class="img-fluid rounded-start imagenCarrito" alt="producto del carrito">
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <h5 class="card-title">${product.nombre}</h5>
          <p class="card-text">${product.categoria}</p>
          <p class="card-text"><small class="text-muted">Precio: $${product.precio}</small></p>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-center align-items-center ">
      <p class="card-text ">+   1   -</p>
      </div>
    </div>
  </div
    `;
    containerCarrito.appendChild(cardcarrito);
  }
}
//console.log('esta es la data que entra al carrito', data);
mostrarCarrito(datosFunc);
