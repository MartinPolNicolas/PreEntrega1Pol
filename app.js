// Definimos un objeto para representar el carrito de compras
const carrito = {
    productos: [],
    agregarProducto: function(nombre, precio) {
      this.productos.push({ nombre, precio });
      console.log(`Se agregó "${nombre}" al carrito.`);
    },
    mostrarProductos: function() {
      console.log("Productos en el carrito:");
      this.productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
      });
    },
    calcularTotal: function() {
      let total = 0;
      this.productos.forEach(producto => {
        total += producto.precio;
      });
      return total;
    }
  };
  
  // Simulación interactiva del carrito de compras con un ciclo while
  console.log("Bienvenido al simulador de carrito de compras.");
  console.log("Puedes agregar productos y ver el total del carrito.");
  
  let continuar = true;
  
  while (continuar) {
    const opciones = [
      "1. Agregar producto",
      "2. Mostrar productos en el carrito",
      "3. Calcular total del carrito",
      "4. Mostrar total en una alerta",
      "5. Salir"
    ];
  
    let opcionesTexto = "Opciones:\n" + opciones.join("\n");
  
    const opcion = parseInt(prompt(opcionesTexto + "\n\nIngrese el número de la opción:"));
  
    switch (opcion) {
      case 1:
        const nombreProducto = prompt("Ingrese el nombre del producto:");
        const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
        carrito.agregarProducto(nombreProducto, precioProducto);
        break;
      case 2:
        carrito.mostrarProductos();
        break;
      case 3:
        const total = carrito.calcularTotal();
        console.log(`Total del carrito: $${total}`);
        break;
      case 4:
        const costoTotal = carrito.calcularTotal();
        alert(`El costo total de los productos es: $${costoTotal}`);
        break;
      case 5:
        continuar = false;
        break;
      default:
        console.log("Opción inválida. Por favor, ingrese una opción válida.");
        break;
    }
  }
  
  console.log("Gracias por utilizar el simulador de carrito de compras. ¡Hasta luego!");
  