<script>
// Define un objeto para almacenar los usuarios registrados
const usuariosRegistrados = [];

// Obtén una referencia al formulario y a los campos de entrada
const form = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre');
const apellidosInput = document.getElementById('apellidos');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');
const generoInput = document.getElementById('genero');

// Escucha el evento de envío del formulario
form.addEventListener('submit', function (event) 
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene los valores de los campos de entrada
    const nombre = nombreInput.value;
    const apellidos = apellidosInput.value;
    const correo = correoInput.value;
    const contrasena = contrasenaInput.value;
    const genero = generoInput.value;

    // Crea un objeto de usuario
    const usuario = 
        nombre,
        apellidos,
        correo,
        contrasena,
        genero,
    ;

    // Agrega el usuario al objeto de usuarios registrados
    usuariosRegistrados.push(usuario);

    // Limpia los campos de entrada
    nombreInput.value = '';
    apellidosInput.value = '';
    correoInput.value = '';
    contrasenaInput.value = '';
    generoInput.value = 'masculino'; // Restablece el valor predeterminado

    // Puedes mostrar un mensaje de confirmación o realizar otras acciones aquí
);
</script>



// Simulación de una lista de libros (puedes reemplazar esto con datos reales de una base de datos)
const books = [
    { title: "Libro 1", genre: "Ficción" },
    { title: "Libro 2", genre: "No Ficción" },
    { title: "Libro 3", genre: "Ficción" },
    // Agrega más libros aquí
];

const genreSelect = document.getElementById('genreSelect');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const bookList = document.getElementById('bookList');

function filterBooks() {
    const selectedGenre = genreSelect.value;
    const searchKeyword = searchInput.value.toLowerCase();

    const filteredBooks = books.filter(book => {
        return (selectedGenre === 'Todos' || book.genre === selectedGenre) &&
               (searchKeyword === '' || book.title.toLowerCase().includes(searchKeyword));
    });

    displayBooks(filteredBooks);
}

function displayBooks(books) {
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.textContent = book.title;
        bookList.appendChild(bookDiv);
    });
}

genreSelect.addEventListener('change', filterBooks);
searchButton.addEventListener('click', filterBooks);

// Cargar la lista de libros al cargar la página
filterBooks();
