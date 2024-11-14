       // Array de arrays que contiene las ventas de cada trimestre
       const ventasTrimestrales = [
        [1500, 2300, 1700], // Primer trimestre (Enero, Febrero, Marzo)
        [2100, 1900, 2400], // Segundo trimestre (Abril, Mayo, Junio)
        [3000, 2700, 2900], // Tercer trimestre (Julio, Agosto, Septiembre)
        [3200, 3100, 3300]  // Cuarto trimestre (Octubre, Noviembre, Diciembre)
    ];

    // Función para mostrar las ventas en la tabla
    function mostrarVentas() {
        const tablaVentas = document.getElementById("tablaVentas");

        // Recorrer cada trimestre y agregar filas a la tabla
        ventasTrimestrales.forEach((trimestre, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
      <td>T${index + 1}</td>
      <td>${trimestre[0]}€</td>
      <td>${trimestre[1]}€</td>
      <td>${trimestre[2]}€</td>
    `;
            tablaVentas.appendChild(fila);
        });
    }

    // Llamar a la función para mostrar las ventas
    mostrarVentas();