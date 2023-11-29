<template>
  <div class="container mt-5">
    <h1 class="text-center">¡Bienvenido a Vannie Supermarket!</h1>
    <p class="lead text-center">En Vannie Supermarket, nos enorgullece ofrecer productos frescos, una amplia variedad y un servicio excepcional. Estamos aquí para atenderte, responder tus consultas y hacer tu experiencia de compra inigualable.</p>

    <div class="row mt-5">
      <div class="col-md-6">
        <h2>Información de Contacto</h2>

        <p><strong>Dirección:</strong> Descubre nuestras instalaciones en La Piedad Michoacán, tu destino para productos de calidad y ofertas irresistibles.</p>

        <p><strong>Teléfono:</strong> ¿Necesitas asistencia inmediata? Llámanos al 352-669-88-49 durante nuestras horas de operación.</p>

        <p><strong>Correo Electrónico:</strong> Para preguntas, sugerencias o cualquier otra consulta, escríbenos a vanniesupermarket@gmail.com.</p>

        <h2>Horario de Atención</h2>
        <p><strong>Lunes a Domingo:</strong> Desde las 09:00 a.m hasta las 10:00 p.m. Tus necesidades son nuestra prioridad, y nos esforzamos por responder a todas las consultas en un plazo de 24 horas.</p>

        <h2>Redes Sociales</h2>
        <p>Conéctate con nosotros en nuestras redes sociales para descubrir las últimas ofertas, eventos y novedades.</p>
        <ul>
          <li><a :href="facebookLink" target="_blank">Facebook</a></li>
          <li><a :href="instagramLink" target="_blank">Instagram</a></li>
          <li><a :href="twitterLink" target="_blank">X</a></li>
        </ul>
      </div>

      <div class="col-md-4">
        <h2>Ubicación en el Mapa</h2>
        <div>
          <img src="../assets/Mapa.PNG" alt=""
          style="height: 600px; width: 650px;">
        </div>
        

      </div>
    </div>
  </div>
</template>

<script setup>
const facebookLink = "https://www.facebook.com/";
const instagramLink = "https://www.instagram.com/";
const twitterLink = "https://twitter.com/?lang=es";
</script>

<style scoped>
</style>
