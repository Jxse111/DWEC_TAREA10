   // Array de objetos de estudiantes
   const estudiantes = [
    {
        nombre: "Juan",
        asignaturas: [
            { nombre: "Matemáticas", calificacion: 85 },
            { nombre: "Historia", calificacion: 90 },
            { nombre: "Biología", calificacion: 78 }
        ]
    },
    {
        nombre: "María",
        asignaturas: [
            { nombre: "Matemáticas", calificacion: 91 },
            { nombre: "Historia", calificacion: 88 },
            { nombre: "Biología", calificacion: 95 }
        ]
    },
    {
        nombre: "Pedro",
        asignaturas: [
            { nombre: "Matemáticas", calificacion: 76 },
            { nombre: "Historia", calificacion: 85 },
            { nombre: "Biología", calificacion: 80 }
        ]
    }
];

// Función para mostrar los estudiantes y sus calificaciones
function mostrarEstudiantes() {
    const lista = document.getElementById('student-list');
    lista.innerHTML = "";  // Limpiar cualquier contenido previo

    estudiantes.forEach(estudiante => {
        // Crear el nombre del estudiante como título
        const nombreEstudiante = document.createElement('h2');
        nombreEstudiante.textContent = estudiante.nombre;
        lista.appendChild(nombreEstudiante);

        // Crear una lista ordenada para las asignaturas
        const listaAsignaturas = document.createElement('ul');

        // Crear los puntos con las asignaturas y sus calificaciones
        estudiante.asignaturas.forEach(asignatura => {
            const item = document.createElement('li');
            item.textContent = `${asignatura.nombre}: ${asignatura.calificacion}`;
            listaAsignaturas.appendChild(item);
        });

        // Agregar la lista de asignaturas al contenedor del estudiante
        lista.appendChild(listaAsignaturas);
    });
}

// Llamamos a la función para mostrar los datos al cargar la página
mostrarEstudiantes();