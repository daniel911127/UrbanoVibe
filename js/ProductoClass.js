export class Producto {
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
