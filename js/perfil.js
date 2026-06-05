const contenedorPerfil = document.getElementById("perfil-container");

const usuarioId = 1;

async function obtenerPerfil(id) {
  try {
    const respuesta = await fetch(
      `https://grupo-9-tp-3-back-5.onrender.com/perfil/${id}`,
    );

    if (!respuesta.ok) {
      throw new Error(`Error al obtener perfil: ${respuesta.status}`);
    }

    const usuario = await respuesta.json();
    console.log("Usuario recibido:", usuario);

    // Renderizado del perfil
    contenedorPerfil.innerHTML = `
            <div class="perfil">
                <img src="../assets/img/${usuario.foto}" alt="${usuario.nombre}" width="200">
                <h1>${usuario.nombre}</h1>
                <p>Email: ${usuario.mail}</p>
                <p>Fecha de registro: ${usuario.fechaRegistro}</p>
                <h2>Últimos pedidos:</h2>
                <ul>
                    ${usuario.ultimosPedidos.map((pedido) => `<li>${pedido}</li>`).join("")}
                </ul>
            </div>
        `;
  } catch (error) {
    console.error("Error en obtenerPerfil:", error);
    contenedorPerfil.innerHTML =
      "<p>No se pudo cargar el perfil del usuario.</p>";
  }
}

obtenerPerfil(usuarioId);
