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


// Cargar jugadores al cargar la página
document.addEventListener('DOMContentLoaded', cargarJugadores);
