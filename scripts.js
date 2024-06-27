// scripts.js

// Datos de ejemplo para los jugadores (puedes modificarlo según tu plantel)
const jugadores = [
    { 
        nombre: "Alan Paz", 
        edad: 31, 
        posicion: "Mediocampista",
        foto: "https://www.topmercato.com/wp-content/uploads/2024/03/franco-mastantuono-river-6.jpg" // URL de la imagen del jugador 1
    },
    { 
        nombre: "Santiago Paz", 
        edad: 27, 
        posicion: "Mediocampista",
        foto: "../images/perrito.jpeg" // URL de la imagen del jugador 2
    },
    { 
        nombre: "Jugador 3", 
        edad: 23, 
        posicion: "Portero",
        foto: "ruta-a-la-imagen-3.jpg" // URL de la imagen del jugador 3
    }
];

// Función para agregar las cartas de los jugadores
function cargarJugadores() {
    const jugadoresLista = document.getElementById('jugadores-lista');

    jugadores.forEach(jugador => {
        const carta = `
        <div class="col-md-4">
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


// Cargar jugadores al cargar la página
document.addEventListener('DOMContentLoaded', cargarJugadores);
