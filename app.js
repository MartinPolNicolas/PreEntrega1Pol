// VARIABLES
let inicio;
let subtotal = 0;
let precioFinal = 0;

// CLASES
// Constructor de productos de surf
class ProductoSurf {
  nombre;
  precio;
  categoria;

  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

// Constructor de cada item de la factura
class ItemFactura {
  nombre;
  precio;
  cantidad;
  subtotal;

  constructor(nombre, precio, cantidad, subtotal) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.subtotal = subtotal;
  }
}

// PRODUCTOS DE SURF
const producto1 = new ProductoSurf('Tabla de Surf', 50000, 'Tablas');
const producto2 = new ProductoSurf('Traje de Neoprene', 120000, 'Trajes');
const producto3 = new ProductoSurf('Leash', 8000, 'Accesorios');
const producto4 = new ProductoSurf('Parafinas', 1500, 'Accesorios');
const producto5 = new ProductoSurf('Grip', 10000, 'Accesorios');
const producto6 = new ProductoSurf('Quillas', 5000, 'Accesorios');
const producto7 = new ProductoSurf('Bata Cambiadora', 50000, 'Accesorios');
const producto8 = new ProductoSurf('Protector Solar Especial', 3500, 'Accesorios');

// ARRAYS
const catalogoSurf = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];
const catalogoStringSurf = catalogoSurf.map((producto, index) => `${index + 1} - ${producto.nombre}: $${producto.precio}`);

const arrayItems = [];

// FUNCIONES
// Calculo del precio total de la compra
function totalProductos(precio, cantidad) {
  precioFinal = precioFinal + precio * cantidad;
  return precioFinal;
}

// Función principal del carrito
function carrito() {
  let eleccion = parseInt(prompt('Escoja un producto de la lista:\n' + catalogoStringSurf.join('\n')));
  while (eleccion <= 0 || eleccion > catalogoSurf.length) {
    eleccion = parseInt(prompt('El valor escogido es incorrecto. Escoja un producto de la lista:\n' + catalogoStringSurf.join('\n')));
  }

  cantidad = parseInt(prompt('Introduzca la cantidad que desea llevar:'));
  while (cantidad < 0) {
    cantidad = parseInt(prompt('El valor ingresado no es válido. Introduzca la cantidad que desea llevar:'));
  }

  subtotal = catalogoSurf[eleccion - 1].precio * cantidad;
  const nuevoItem = new ItemFactura(catalogoSurf[eleccion - 1].nombre, catalogoSurf[eleccion - 1].precio, cantidad, subtotal);
  arrayItems.push(nuevoItem);
  precioFinal = precioFinal + subtotal;

  let seguir = prompt('Producto agregado al carrito. ¿Desea seguir comprando? Ingrese si o no.');
  validarInicio(seguir);
}

// Validación de inicio
function validarInicio(respuesta) {
  while (respuesta.toLowerCase() !== 'no' && respuesta.toLowerCase() !== 'si') {
    respuesta = prompt('Valor ingresado no válido. Inténtelo nuevamente con "si" o "no":');
  }
  if (respuesta.toLowerCase() === 'si') {
    carrito();
  } else {
    const stringItemFactura = arrayItems.map((item, index) =>
      `${index + 1} - Producto: ${item.nombre} | Precio: $${item.precio} | Cantidad: ${item.cantidad} | Subtotal: $${item.subtotal}`
    );
    alert('TICKET DE COMPRA\n\n' + stringItemFactura.join('\n\n') + '\n\n' + `Total a pagar = $${precioFinal}.`);
  }
}

// INICIO DEL PROGRAMA
inicio = prompt('Bienvenido al Carrito de Compras de SURFPOL. ¿Desea iniciar? Escriba "si" o "no":');
validarInicio(inicio);
