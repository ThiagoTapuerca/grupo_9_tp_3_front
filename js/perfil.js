const contenedorPerfil = document.getElementById("perfil-container");

async function obtenerPerfil() {

    try {

        const respuesta = await fetch("http://localhost:3000/perfil/1");

        const usuario = await respuesta.json();

        console.log(usuario);

        contenedorPerfil.innerHTML = `

     <div class="perfil">

       <img src="../assets/img/${usuario.foto}" alt="${usuario.nombre}" width="200">

       <h1>${usuario.nombre}</h1>

       <p>Email: ${usuario.mail}</p>

       <p>Fecha de registro: ${usuario.fechaRegistro}</p>

       <h2>Últimos pedidos:</h2>

       <ul>

         ${usuario.ultimosPedidos.map(pedido => `<li>${pedido}</li>`).join("")}

       </ul>

     </div>

     `;

    } 
      
    catch (error) {

        console.log("Error:", error);

    }

}

obtenerPerfil();