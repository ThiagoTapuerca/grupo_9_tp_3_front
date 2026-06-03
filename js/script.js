const contenedor = document.getElementById("contenedor-stock");

async function obtenerServicios() {
  try {
    const respuesta = await fetch(
      "https://grupo-9-tp-3-back-5.onrender.com/servicios",
    );

    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    const servicios = await respuesta.json();
    console.log("Servicios recibidos:", servicios);

    contenedor.innerHTML = "";

    servicios.forEach((servicio) => {
      contenedor.innerHTML += `
        <div class="card">
            <img src="${servicio.imagen}" alt="${servicio.nombre}" style="width:150px;">
            <h2>${servicio.nombre}</h2>
            <h3>$ ${servicio.precio}</h3>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    contenedor.innerHTML =
      "<p>Hubo un error al cargar los servicios. Intenta más tarde.</p>";
  }
}

obtenerServicios();
