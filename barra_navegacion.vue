<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const showMenu = ref(false);

function GoRuta(ruta) {
  console.log(ruta);
  router.push(ruta);
  showMenu.value = false;
}

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

</script>


<template>
  <div style="margin-top: 10px;">
  <button id="btnRoutes" @click="GoRuta('/')">Inicio</button>
  <button id="btnRoutes" @click="GoRuta('/cart')">Blog de publicaciones</button>
  <button id="btnRoutes" @click="GoRuta('/')">Contacto</button>
  <button id="btnRoutes" @click="GoRuta('/cart')">Perfil</button>
  </div>

  <!-- <div>
      <div class="menu-btn-container">
        <div class="menu-btn" :class="{ 'menu-btn-active': showMenu }" @click="toggleMenu()">
          <div class="btn-icon">&#9776;</div>
        </div>
      </div>

      <div v-show="showMenu" class="overlay">
        <div class="menu">
          <ul>
            <li><a @click="GoRuta('/')">Inicio</a></li>
            <li><a @click="GoRuta('/cart')">Blog de publicaciones</a></li>
            <li><a @click="GoRuta('/contacto')">Contacto</a></li>
            <li><a @click="GoRuta('/perfil')">Perfil</a></li>
          </ul>
        </div>
      </div>
    </div> -->
</template>

<style scoped>

#btnRoutes {
  background-color: transparent;
  font-size: 18px;
  margin-right: 3vw;
  margin-left: 3vw;
  border: none;
  font-family: "Roboto", sans-serif;
}
/* 

.menu-btn-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2; 
}

.menu-btn {
  cursor: pointer;
}

.menu-btn-active {
  color: #fff; 
}

.btn-icon {
  font-size: 24px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); 
  z-index: 1;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #000;
  padding: 20px;
  box-sizing: border-box;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-bottom: 15px;
}

.menu a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
} */
</style>
