// Obtener el parámetro "id" de la URL (por ejemplo: compra.html?id=5)
const params = new URLSearchParams(window.location.search);
const idProducto = parseInt(params.get("id"));

// Referencias a los elementos del HTML
const img = document.getElementById("producto-img");
const nombre = document.getElementById("producto-nombre");
const descripcion = document.getElementById("producto-descripcion");
const precio = document.getElementById("producto-precio");

// Cargar los productos desde el archivo JSON
fetch("productos/productos.json")
  .then(res => {
    if (!res.ok) throw new Error("Error al cargar productos.json");
    return res.json();
  })
  .then(data => {
    const productos = data.productosCompra;
    const producto = productos.find(p => p.id === idProducto);

    if (!producto) {
      nombre.textContent = "Producto no encontrado";
      descripcion.textContent = "";
      precio.textContent = "";
      return;
    }

    // Mostrar la información del producto
    img.src = producto.imagen;
    img.alt = producto.nombre;
    nombre.textContent = producto.nombre;
    descripcion.textContent = producto.descripcion;
    precio.textContent = producto.precio;
  })
  .catch(err => {
    console.error(err);
    nombre.textContent = "Error al cargar el producto.";
  });
