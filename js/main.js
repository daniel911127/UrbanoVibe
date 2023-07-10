//RUTAS IMAGENES:
// 1. ../assets/camisetaAdidas2.jpg
// 2. ../assets/zapatillasNike.jpg

// let nombre = prompt("Ingresa tu nombre: ");
// let edad = Number(prompt("Ingresa tu edad: "));
// do {
//   if (edad < 18) {
//     alert("Debes ser mayor de edad para comprar en esta tienda");
//     nombre = prompt("Ingresa tu nombre: ");
//     edad = Number(prompt("Ingresa tu edad: "));
//   }
// } while (edad < 18);

// alert("Bienvenido " + nombre + ", revisa nuestro catálogo de productos");

class Producto {
  constructor(nombre, precio, categoria, cantidad, imagenUrl) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
    this.cantidad = Number(cantidad);
    this.imagenUrl = imagenUrl;
  }
  sumarIva() {
    this.precio = this.precio * 1.21;
    this.precio = Math.round(this.precio * 100) / 100;
  }
  vender(cantidadCompra) {
    this.cantidad = this.cantidad - cantidadCompra;
  }
}

let productos = [];

const producto1 = new Producto(
  'Zapatillas Nike',
  80,
  'calzado',
  20,
  '../assets/zapatillasNike.jpeg'
);
const producto2 = new Producto(
  'Reloj CASIO',
  30,
  'accesorios',
  12,
  '../assets/relojCasio.jpg'
);
const producto3 = new Producto(
  'Camiseta Adidas',
  60,
  'ropa',
  10,
  '../assets/camisetaAdidas.jpeg'
);
const producto4 = new Producto(
  'Reloj ROLEX',
  200,
  'accesorios',
  15,
  '../assets/relojRolex.jpg'
);

producto1.vender(2);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
alert(
  'para una mejor experiancia en el proceso de agregar productos use en el prompt de imagen cualquiera de las 2 rutas que aparecen en el main.js en la linea 1'
);
for (const product of productos) {
  product.sumarIva();
}
console.log(productos);
let agregarProducto = document.getElementById('agregar');
function validar(listaproductos) {
  let nombre = prompt('Ingresa el nombre del producto: ');
  let precio = Number(prompt('Ingresa el precio del producto: '));
  let categoria = prompt('Ingresa la categoria del producto: ');
  let cantidad = parseInt(prompt('Ingresa la cantidad del producto: '));
  let imagenUrl = prompt('Ingresa la imagen del producto: ');
  item = new Producto(nombre, precio, categoria, cantidad, imagenUrl);

  listaproductos.push(item);
  alert('Producto Agregado!!');
  console.log('Producto agregado', listaproductos);
  const ultimo = listaproductos[listaproductos.length - 1];
  ultimo.sumarIva();
  mostrarProductos();
}
agregarProducto.addEventListener('click', () => validar(productos));

let containerProductos = document.getElementById('productos');

function mostrarProductos() {
  containerProductos.innerHTML = '';
  for (const product of productos) {
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
mostrarProductos();
