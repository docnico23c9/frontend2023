<template>
  <header>
    <!-- Barra de navegación -->
    <nav>
      <!-- Lista de navegación -->
      <ul>
        <div class="logo">
          <router-link to="/">
            <!-- Imagen del logo -->
            <img src="../assets/logo_transparent.png" alt="img" />
          </router-link>
        </div>
        <li><router-link to="/">Inicio</router-link></li>
        <li><a href="#">¿Qué quieres comprar hoy?</a></li>
        <li><a href="#">Servicios</a></li>
        <li><router-link to="/" id="userLink">Iniciar Sesión/Registrarse</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // Nombre del componente
  name: 'AppHeader',
  // TODO: Agregar lógica y estado del componente si es necesario
};
</script>

<style scoped>
/* Estilos para el encabezado y la barra de navegación */
header, nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Estilos para el encabezado */
header {
  padding: 3%;
}
/* Estilos para la barra de navegación */
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f0f322;
  max-height: 13vh;
  overflow-y: hidden;
}
/* Estilos para la imagen del logo */
.logo a img {
  width: 120px;
  height: 120px;
  padding: 5px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
}
/* Estilos para la imagen del logo cuando se pasa el cursor sobre ella */
.logo a img:hover {
  transform: scale(1.2);
  color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
}
/* Estilos para la lista de navegación */
ul {
  list-style: none;
  display: flex;
  align-items: center;
}
/* Estilos para los elementos de la lista de navegación */
ul li {
  padding: 10px;
}
/* Estilos para los enlaces de la lista de navegación */
ul li a {
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: 12px;
  padding: 15px;
  text-align: center;
}
/* Estilos para los enlaces de la lista de navegación cuando se pasa el cursor sobre ellos */
ul li a:hover {
  background-color: rgba(65, 65, 65, 0.557);
  border-radius: 50px;
}
/* Consulta de medios para dispositivos con un ancho máximo de 768px */
@media (max-width: 768px) {
  /* Estilos para el encabezado en dispositivos más pequeños */
  header {
    padding: 2%;
  }
  /* Estilos para la barra de navegación en dispositivos más pequeños */
  nav {
    flex-direction: column;
    max-height: 30vh;
  }
  /* Estilos para la imagen del logo en dispositivos más pequeños */
  .logo a img {
    width: 80px;
    height: 80px;
  }
  /* Estilos para la lista de navegación en dispositivos más pequeños */
  ul {
    flex-direction: column;
  }
  /* Estilos para los elementos de la lista de navegación en dispositivos más pequeños */
  ul li {
    padding: 10px;
  }
}
/* Consulta de medios para dispositivos con un ancho máximo de 480px */
@media (max-width: 480px) {
  /* Estilos para el encabezado en dispositivos aún más pequeños */
  header {
    padding: 1%;
  }
  /* Estilos para la imagen del logo en dispositivos aún más pequeños */
  .logo a img {
    width: 60px;
    height: 60px;
  }
}
</style>
