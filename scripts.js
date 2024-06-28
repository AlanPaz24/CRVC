// scripts.js

// Datos de ejemplo para los jugadores (puedes modificarlo según tu plantel)
const jugadores = [
    { 
        nombre: "Alan Paz", 
        edad: 31, 
        posicion: "Mediocampista",
        foto: "https://s.hs-data.com/bilder/spieler/gross/84724.jpg?fallback=png" // URL de la imagen del jugador 1
    },
    { 
        nombre: "Santiago Paz", 
        edad: 27, 
        posicion: "Mediocampista",
        foto: "https://s.hs-data.com/bilder/spieler/gross/84724.jpg?fallback=png" // URL de la imagen del jugador 2
    },
    { 
        nombre: "Agustin Piñeiro", 
        edad: 26, 
        posicion: "Mediocampista",
        foto: "https://s.hs-data.com/bilder/spieler/gross/84724.jpg?fallback=png" // URL de la imagen del jugador 3
    },
    { 
        nombre: "Agustín Mohr", 
        edad: 28, 
        posicion: "Defensor",
        foto: "https://s.hs-data.com/bilder/spieler/gross/84724.jpg?fallback=png" // URL de la imagen del jugador 3
    },
    { 
        nombre: "Maximiliano Villavicencio", 
        edad: 30, 
        posicion: "Delantero",
        foto: "https://s.hs-data.com/bilder/spieler/gross/84724.jpg?fallback=png" // URL de la imagen del jugador 3
    }
];

// Función para agregar las cartas de los jugadores
function cargarJugadores() {
    const jugadoresLista = document.getElementById('jugadores-lista');

    jugadores.forEach(jugador => {
        const carta = `
        <div class="col-md-3">
            <div class="card">
                <img src="${jugador.foto}" class="card-img-top" alt="${jugador.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${jugador.nombre}</h5>
                    <p class="card-text">Edad: ${jugador.edad} años<br>Posición: ${jugador.posicion}</p>
                </div>
            </div>
        </div>
        `;

        jugadoresLista.innerHTML += carta;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'images/equipo1.png', alt: 'Imagen 1' },
        { src: 'images/hermanos.png', alt: 'Imagen 2' },
        { src: 'images/hermanos.png', alt: 'Imagen 3' },
        { src: 'images/hermanos.png', alt: 'Imagen 4' },
        { src: 'images/hermanos.png', alt: 'Imagen 5' },
        { src: 'images/perrito.jpeg', alt: 'Imagen 6' },
        // Añade más imágenes según sea necesario
    ];

    images.forEach(image => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card">
                <img src="${image.src}" class="card-img-top" alt="${image.alt}">
            </div>
        `;
        gallery.appendChild(col);
    });

    // Agrega el evento de clic a las imágenes
    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const modalImage = document.getElementById('modalImage');
            modalImage.src = event.target.src;
            modalImage.alt = event.target.alt;
            $('#imageModal').modal('show');
        }
    });
});