const contenedor = document.getElementById("contenedor-stock");

async function obtenerServicios() {

    try {

        const respuesta = await fetch("https://grupo-9-tp-3-back-5.onrender.com");

        const servicios = await respuesta.json();

        console.log(servicios);

        servicios.forEach(servicio => {

            contenedor.innerHTML += `
            
            <div class="card">
                <h2>${servicio.nombre}</h2>
                <h3>$ ${servicio.precio}</h3>
            </div>

            `;

        });

    } catch (error) {

        console.log("Error:", error);

    }

}

obtenerServicios();