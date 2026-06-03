const contenedorEquipo = document.getElementById("seccion-equipo");

async function obtenerEquipo() {
  try {
    const respuesta = await fetch(
      "https://grupo-9-tp-3-back-5.onrender.com/equipo",
    );

    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    const integrantes = await respuesta.json();

    console.log("Datos recibidos:", integrantes);

    contenedorEquipo.innerHTML = "";

    integrantes.forEach((integrante) => {
      contenedorEquipo.innerHTML += `
            <div class="integrante">
                <img src="${integrante.imagen}" alt="${integrante.nombre}">
                <p class="nombre">${integrante.nombre}</p>
                <p class="descripcion">${integrante.descripcion}</p>
            </div>
            `;
    });
  } catch (error) {
    console.error("Error al obtener el equipo:", error);
    contenedorEquipo.innerHTML =
      "<p>Hubo un error al cargar el equipo. Intenta más tarde.</p>";
  }
}

obtenerEquipo();
