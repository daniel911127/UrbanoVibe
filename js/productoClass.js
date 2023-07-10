let productos = [];
export default class Producto {
  constructor() {
    this.Productos = productos;
  }
  get() {
    return this.Productos;
  }
  getById() {
    return this.Productos.find((producto) => producto.id == id);
  }
  create(producto) {
    const { nombre, precio, categoria, cantidad, imagenUrl } = producto;
    if (!nombre || !precio || !categoria || !cantidad || !imagenUrl) {
      return 'Producto incompleto';
    }
    if (typeof precio !== 'number' || typeof cantidad !== 'number') {
      return 'Los datos de precio y cantidad deben ser numericos';
    }
    producto.id = this.productos.length + 1;
    producto.precio = this.producto.precio * 1.21;
    this.productos.push(producto);
    return producto;
  }
  update(id, producto) {
    let i = this.productos.findIndex((item) => item.id == id);
    this.Productos[i] = producto;
  }
  delete(id) {
    let i = this.productos.findIndex((item) => item.id == id);
    this.productos.splice(i, 1);
  }
  calcularIva() {
    for (const producto of productos) {
      producto.precio = producto.precio * 1.21;
    }
  }
}
