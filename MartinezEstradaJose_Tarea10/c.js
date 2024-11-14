// Definimos el inventario de productos
const inventario = [
    { nombre: 'Camiseta', categoria: 'Ropa', precio: 15.99 },
    { nombre: 'Pantalón', categoria: 'Ropa', precio: 29.99 },
    { nombre: 'Zapatos', categoria: 'Calzado', precio: 45.00 },
    { nombre: 'Auriculares', categoria: 'Electrónica', precio: 59.99 },
    { nombre: 'Smartphone', categoria: 'Electrónica', precio: 299.99 },
    { nombre: 'Bolso', categoria: 'Accesorios', precio: 19.99 }
];

// Obtenemos el contenedor para los productos
const contenedor = document.getElementById('productList');

// Generamos y mostramos los productos
inventario.forEach(producto => {
    contenedor.innerHTML += `
        <div class="product">
            <h3>${producto.nombre}</h3>
            <p><strong>Categoría:</strong> ${producto.categoria}</p>
            <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
        </div>
        <hr>  <!-- Separador entre productos -->
    `;
});
