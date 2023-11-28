<script setup>
// Importa las funciones necesarias de vue-router y vue
import { useRouter } from 'vue-router';

// Obtiene la instancia del enrutador
const router = useRouter();

// Función para navegar a una ruta y ocultar el menú
function GoRuta(ruta) {
  // Muestra la ruta en la consola (puede ser útil para depuración)
  console.log(ruta);
  // Navega a la ruta especificada utilizando vue-router
  router.push(ruta);
  // Oculta el menú después de navegar
  showMenu.value = false;
}
</script>

<template>
  <!-- Contenedor principal del componente -->
  <div style="margin-top: 10px;">
    <!-- Botones que llaman a la función GoRuta con rutas específicas -->
    <button id="btnRoutes" @click="GoRuta('/')">Inicio</button>
    <button id="btnRoutes" @click="GoRuta('/cart')">Blog de publicaciones</button>
    <button id="btnRoutes" @click="GoRuta('/')">Contacto</button>
    <button id="btnRoutes" @click="GoRuta('/cart')">Perfil</button>
  </div>

  
</template>

<style scoped>
/* Estilos CSS aplicados al componente (scoped para limitar el alcance) */

#btnRoutes {
  background-color: transparent;
  font-size: 18px;
  margin-right: 3vw;
  margin-left: 3vw;
  border: none;
  font-family: "Roboto", sans-serif;
}

</style>
