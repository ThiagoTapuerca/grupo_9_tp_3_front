const contenedor = document.getElementById("contenedor-stock");
const buscador = document.getElementById("buscador");

let serviciosGlobal = [];

function mostrarServicios(servicios) {
    contenedor.innerHTML = "";

    servicios.forEach(servicio => {
        contenedor.innerHTML += `
            <div class="card">
                <h2>${servicio.nombre}</h2>
                <h3>$ ${servicio.precio}</h3>
            </div>
        `;
    });
}

async function obtenerServicios() {
    try {
        const respuesta = await fetch("http://localhost:3000/servicios");

        const servicios = await respuesta.json();

        serviciosGlobal = servicios;

        mostrarServicios(servicios);

    } catch (error) {
        console.log("Error:", error);
    }
}

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = serviciosGlobal.filter(servicio =>
        servicio.nombre.toLowerCase().includes(texto)
    );

    mostrarServicios(filtrados);
});

obtenerServicios();