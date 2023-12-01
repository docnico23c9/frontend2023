<script setup>
import { Transition, ref } from "vue";


const collapsed = ref(false);
</script>

<template>
  <!-- este es el boton el cual es en el que clikeamos y se expandera el menu  -->
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
       <p>Bienvenido<img src="../assets/logo.svg" alt="logo"/></p>
      </button>
    </div>
<!-- al dar click en el boton anterior se expandera el menu y mostrara el siguiente contenido  -->
    <div class="menu-items">
      <ul>
        <!-- uno de los lincks a las paginas que nos redireccionara  -->
        <a href="#" >
    <div class="item">
      <div class="icon">
        <img src="../assets/logo.svg" >
      </div>
      <div class="title" v-if="!collapsed">
        hola
      </div>
    </div>
  </a>

  <a href="#" >
    <div class="item">
      <div class="icon">
        <img src="../assets/logo.svg" >
      </div>
      <div class="title" v-if="!collapsed">
        hola
      </div>
    </div>
  </a>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  background-color: rgb(40, 43, 209);
  color: white;
  height: 100vh;
  transition: width 0.3s;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  left: 1;
  top: 1;
}

.header {
  display: flex;
  justify-content: end;
}

.menu-button {
  border: none;
  background-color: transparent;
  color: white;
  padding: 10px;
}
.menu-button img {
  size:.5px;
}

/* we will explain what these classes do next! */
.collapsed {
  width: 80px;
}

.expanded {
  width: 350px;
}

.profile {
  padding: 10px;
  text-align: center;
}
.profile img {
  border-radius: 10%;
  min-width: 10px;
  max-width: 100px;
  width: 100%;
}

.profile-name {
  padding: 10px 0;
  font-size: 22px;
}

.menu-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
  display: block;
}
a:hover {
  background-color: white;
  color: black;
}
.item {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.item .icon {
  width: 30px;
  display: flex;
  justify-content: center;
}
</style>
