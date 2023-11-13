function redirectToGenrePage(selectElement) {
    var selectedGenre = selectElement.value;
    if (selectedGenre !== "Todos") {
        window.location.href = "generos.html?genre=" + selectedGenre;
        // Reemplaza "genero.html" con la ruta de tu página de género
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Tu array de libros (puedes obtener estos datos desde una fuente externa)
    var libros = [
        { titulo: 'Libro 1', genero: 'Ficción' },
        { titulo: 'Libro 2', genero: 'No Ficción' },
        // ... Añade más libros con sus respectivos géneros ...
    ];

    // Función para renderizar los libros
    function renderizarLibros(libros) {
        var container = document.getElementById('bookContainer');
        container.innerHTML = ''; // Limpia el contenido actual

        libros.forEach(function(libro) {
            var libroSection = document.createElement('section');
            libroSection.className = 'book-section ' + libro.genero.toLowerCase();

            var libroInfo = document.createElement('div');
            libroInfo.className = 'book-info';
            libroInfo.innerHTML = `
                <h2>${libro.titulo}</h2>
                <p>Editorial: ${obtenerEditorial()}</p>
                <p>Precio: ${obtenerPrecio()}</p>
            `;

            libroSection.appendChild(libroInfo);
            container.appendChild(libroSection);
        });
    }

    // Función para filtrar libros por género
    function filtrarPorGenero(genero) {
        if (genero === 'Todos') {
            renderizarLibros(libros);
        } else {
            var librosFiltrados = libros.filter(function(libro) {
                return libro.genero === genero;
            });
            renderizarLibros(librosFiltrados);
        }
    }

    // Función para buscar libros por título
    function buscarPorTitulo(titulo) {
        var librosEncontrados = libros.filter(function(libro) {
            return libro.titulo.toLowerCase().includes(titulo.toLowerCase());
        });
        renderizarLibros(librosEncontrados);
    }

    // Manejador de eventos para el cambio de género
    document.getElementById('genreSelect').addEventListener('change', function() {
        var selectedGenre = this.value;
        filtrarPorGenero(selectedGenre);
    });

    // Manejador de eventos para la búsqueda por título
    document.getElementById('searchButton').addEventListener('click', function() {
        var searchInput = document.getElementById('searchInput').value;
        buscarPorTitulo(searchInput);
    });

    // Al cargar la página, muestra todos los libros
    renderizarLibros(libros);
});



