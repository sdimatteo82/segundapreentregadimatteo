class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  get_datos() {
    console.log("<------------------>");
    console.log("Nombre: ", this.nombre);
    console.log("Precio: ", this.precio);
    console.log("");
  }

  get_stock() {
    if (this.stock <= 0) {
      return false;
    } else {
      return true;
    }
  }

  update_stock(cantidad) {
    if (this.stock >= cantidad) {
      this.stock = this.stock - cantidad;
      return true;
    } else {
      console.log("stock insuficiente");
      return false;
    }
  }
}

// Alta de productos//

let lista_productos = [];

for (let i = 0; i < 4; i = i + 1) {
  let nombre = prompt("ingrese el nombre del producto");
  let precio = prompt("ingrese el precio");
  let stock = prompt("ingrese el stock");
  let producto = new Producto(nombre, precio, stock);

  lista_productos.push(producto);
}
console.log(lista_productos);

//Inicio render de producto//

for (let producto of lista_productos) {
  producto.get_datos();
}

//Compra de usuario//
function buscar_producto(producto) {
  return producto.nombre == compra_ususario;
}

let compra_ususario = prompt(
  " Ingrese el nombre del producto que desea compar"
);
let resultado_find = lista_productos.find(buscar_producto);
console.log(resultado_find);

if (resultado_find != undefined) {
  //Compra
  if (resultado_find.get_stock()) {
    let unidades = prompt("cuentas unidades quiere");
    if (resultado_find.update_stock(unidades))
      console.log("Gracias por su compra");
  } else {
    console.log(" No se pudo procesar su compra");
  }
}
