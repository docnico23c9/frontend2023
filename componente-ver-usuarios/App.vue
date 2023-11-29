<template>
  <div id="app">
    <div>
      <h1>USUARIOS REGISTRADOS</h1>
    </div>
    
    <!-- El estilo de la tabla se obtiene desde Bootstrap, instalarlo desde la consola npm i bootstrap@5.3.2
    En la carpeta de tu proyecto, en el directorio public hay un arhivo llamdo index.html, ahi se egregan los siguientes links
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> -->

    <table class="table  table-success table-bordered border-secondary">
      <thead class="table-light">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Carrera</th>
          <th scope="col">Número de Control</th>
          <th scope="col">Fecha de Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <!-- Bucle para cada usuario -->
        <!-- La base de datos debe contener los siguientes campos: 
       NoControl, nombre, carrera, Fecha de nacimiento-->
        <tr v-for="user in usuarios" :key="user.NoControl">
          <td>{{ user.nombre }}</td>
          <td v-if="user.Carrera">{{ user.Carrera }}</td>
          <td v-if="user.NoControl">{{ user.NoControl }}</td>
          <td v-if="user.FechaDeNacimiento">{{ user.FechaDeNacimiento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
  name: 'App',
  setup() {
    // Variable reactiva para almacenar la información de los usuarios
    const usuarios = ref([]);

    // Función para obtener la información de los usuarios desde Firestore
    const obtenerInformacionUsuarios = async () => {
      const db = getFirestore();
      const usuariosRef = collection(db, '/usuarios');
      const usuariosSnapshot = await getDocs(usuariosRef);

      // Arreglo de usuarios, se guarda la informacion 
      const usuariosArray = [];
      usuariosSnapshot.forEach((doc) => {
        usuariosArray.push(doc.data());
      });

      // Actualizar la variable 'usuarios' con la información recuperada
      usuarios.value = usuariosArray;
    };

    // En el ciclo de vida 'onMounted', llamar a 'obtenerInformacionUsuarios' para cargar la información al montar el componente
    onMounted(() => {
      obtenerInformacionUsuarios();
    });

    // Devolver las variables y funciones necesarias para el componente
    return {
      usuarios,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #7db8f4;
  margin-top: 60px;
}

h1,
h2 {
  font-size: 2em;
  margin-bottom: 20px;
}


img {
  width: 45px;
}
</style>
