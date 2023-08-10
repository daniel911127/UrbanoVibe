//RUTAS IMAGENES:
// 1. ../assets/camisetaAdidas2.jpg
// 2. ../assets/zapatillasNike.jpg
import { Producto } from './ProductoClass.js';

let productos = [];
let datos;

const pedirDatos = async () => {
  let peticion = await fetch('../JSON/Productos.json');
  let dataParser = await peticion.json();

  datos = JSON.stringify(dataParser);
  localStorage.setItem('productos', datos);
};

pedirDatos();
let data = JSON.parse(localStorage.getItem('productos'));
alert(
  'para una mejor experiancia en el proceso de agregar productos use en el prompt de imagen cualquiera de las 2 rutas que aparecen en el main.js en la linea 1'
);
let producto;
for (const product of data) {
  producto = new Producto(
    product.id,
    product.nombre,
    product.precio,
    product.categoria,
    product.cantidad,
    product.imagenUrl
  );
  producto.sumarIva();
  productos.push(producto);
}

console.log(productos);

const storage = localStorage.getItem('productos');
const parse = JSON.parse(storage);

let agregarProducto = document.getElementById('agregar');
function validar(listaproductos) {
  let nombre = prompt('Ingresa el nombre del producto: ');
  let precio = Number(prompt('Ingresa el precio del producto: '));
  let categoria = prompt('Ingresa la categoria del producto: ');
  let cantidad = parseInt(prompt('Ingresa la cantidad del producto: '));
  let imagenUrl = prompt('Ingresa la imagen del producto: ');
  let id = listaproductos.length + 1;
  let item = new Producto(id, nombre, precio, categoria, cantidad, imagenUrl);

  listaproductos.push(item);
  const ultimo = listaproductos[listaproductos.length - 1];
  ultimo.sumarIva();
  let store = JSON.stringify(listaproductos);
  alert('Producto Agregado!!');
  console.log('Producto agregado', listaproductos);

  localStorage.setItem('productos', store);
  let productoLS = JSON.parse(localStorage.getItem('productos'));

  mostrarProductos(productoLS);
}

agregarProducto.addEventListener('click', () =>
  storage == null ? validar(productos) : validar(parse)
);

let containerProductos = document.getElementById('productos');

storage == null ? mostrarProductos(productos) : mostrarProductos(parse);

function mostrarProductos(array) {
  containerProductos.innerHTML = '';
  for (const product of array) {
    const card = document.createElement('div');
    card.classList.add(
      'card',
      'col-4',
      'm-4',
      'border',
      'border-dark',
      'cardProducto'
    );
    card.innerHTML = `
      <img src="${product.imagenUrl}" class="card-img-top imagenProducto" alt="producto"/>
      <div class="card-body d-flex justify-content-center flex-column">
        <h5 class="card-title d-flex justify-content-center">${product.nombre}</h5>
        <p class="card-text d-flex justify-content-center">Categoría: ${product.categoria}</p>
        <p class="card-text d-flex justify-content-center">Cantidad: ${product.cantidad}</p>
        <p class="card-text d-flex justify-content-center">Precio: $${product.precio}</p>
        <input id="comprar" type="submit" value="Comprar" class="d-flex justify-content-center comprar"/>
      </div>
    `;
    containerProductos.appendChild(card);
  }
}
