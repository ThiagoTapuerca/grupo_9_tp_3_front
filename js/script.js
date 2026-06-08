const contenedor = document.getElementById("contenedor-stock");
const buscador = document.getElementById("buscador");

let serviciosGlobal = [];

function mostrarServicios(servicios) {
  contenedor.innerHTML = "";

  servicios.forEach((servicio) => {
    const nombreArchivo = servicio.imagen.split("/").pop();

    const urlImagen = `https://grupo-9-tp-3-back-5.onrender.com/img/${nombreArchivo}`;

    contenedor.innerHTML += `
            <div class="card">
                <img src="${urlImagen}" alt="${servicio.nombre}" style="max-width: 150px; display: block;">
                <h2>${servicio.nombre}</h2>
                <h3>$ ${servicio.precio}</h3>
            </div>
        `;
  });
}

async function obtenerServicios() {
  try {
    const respuesta = await fetch(
      "https://grupo-9-tp-3-back-5.onrender.com/servicios",
    );

    const servicios = await respuesta.json();

    serviciosGlobal = servicios;

    mostrarServicios(servicios);
  } catch (error) {
    console.log("Error al obtener los servicios:", error);
  }
}

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const filtrados = serviciosGlobal.filter((servicio) =>
    servicio.nombre.toLowerCase().includes(texto),
  );

  mostrarServicios(filtrados);
});

obtenerServicios();
