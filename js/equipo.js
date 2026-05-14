const contenedorEquipo = document.getElementById("seccion-equipo");

async function obtenerEquipo() {

    try {

        const respuesta = await fetch("http://localhost:3000/equipo");

        const integrantes = await respuesta.json();

        console.log(integrantes);

        integrantes.forEach(integrante => {

            contenedorEquipo.innerHTML += `

            <div class="integrante">

                <img src="${integrante.imagen}" alt="${integrante.nombre}">

                <p class="nombre">${integrante.nombre}</p>

                <p class="descripcion">${integrante.descripcion}</p>

            </div>

            `;

        });

    } catch (error) {

        console.log("Error:", error);

    }

}

obtenerEquipo();