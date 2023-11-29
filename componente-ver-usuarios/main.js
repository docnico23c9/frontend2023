// main.js

// Importa las funciones necesarias de los SDKs que necesitas
import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import App from './App.vue';
// Configuración de tu aplicación Firebase
//Hay que instalar firebase mediante la consola, 
// Aqui se configura lo de tu base de datos, esta configuración la obtienes de tu proyecto de Firebase
// 1.- Ingresando a descripción general 
// 2.- En la parte donde dice app 
// 3.- Se copia el codigo "Configuracion del SDK"
 const firebaseConfig = {
  apiKey: "AIzaSyC5YP_9p4mXXaQ56wcyPQK9BYi1GYCCPfs",
  authDomain: "componente-9cc01.firebaseapp.com",
  projectId: "componente-9cc01",
  storageBucket: "componente-9cc01.appspot.com",
  messagingSenderId: "864925616177",
  appId: "1:864925616177:web:45102df16ef2a1db5cad10",
  measurementId: 'G-0Q14P33KD5' 
}; 

// Inicializa Firebase
initializeApp(firebaseConfig);

// Crea la aplicación Vue y monta tu componente principal
const app = createApp(App);
app.mount('#app');
