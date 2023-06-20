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
  constructor(nombre, precio, categoria, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
    this.cantidad = Number(cantidad);
  }
  sumarIva() {
    this.precio = this.precio * 1.21;
  }
  vender(cantidadCompra) {
    this.cantidad = this.cantidad - cantidadCompra;
  }
}
let productos = [];
const producto1 = new Producto("Zapatillas Nike", 80, "calzado", 20);
const producto2 = new Producto("Reloj CASIO", 30, "accesorios", 12);
const producto3 = new Producto("Camiseta Adidas", 60, "ropa", 10);
console.log(producto1, producto2, producto3);
producto1.sumarIva();
producto2.sumarIva();
producto3.sumarIva();
console.log(producto1, producto2, producto3);
producto1.vender(2);
console.log(producto1);
