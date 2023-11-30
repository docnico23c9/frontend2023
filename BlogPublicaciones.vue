<template>
  <header class="header">
    <div class="encabezado">

      <div id="logo">
        Blog
      </div>
      <div id="menu">
        <ul>
          <li><a href="" class="active"> Inicio</a></li>
          <li><a href="" class="enlace"> Inicio</a></li>
          <li><a href="" class="enlace"> Inicio</a></li>
          <li><a href="" class="enlace"> Inicio</a></li>
          <li><a href="" class="enlace"> Inicio</a></li>
        </ul>
      </div>

    </div>

  </header>
/<!--En esta seccion se tendran los  contenedores para cada una de las publicaciones que los usuarios realizen o quieran leer-->
  <section id="principal">
    <!--En la seccion de publicaciones se agregaran las etiqetas article las cuales nos serviran como guia para saber cuantas publicaciones 
    son las que se tendran-->
    <section id="publicaciones">
      <!--Mediante el uso del class post se definiran los estilos de la caja de la publicacion-->
      <article class="post">
        <!--El enlace con la clase enlace-post hace que el titulo de la publicacion sea un enlace-->
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="../assets/logo.svg" class="img-post">
        <!--Se utiliza strong para marcar en negritas el dato de por quien y en que fecha fue hecho el comentario o la publicacion-->
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          <!--Estos elementos nos sirven como una separacion en el renglon entre elementos-->
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <!--En este apartado se crean enlaces para poder leer mas acerca de la publicacion asi como tambien mostrar cuantos comentarios se han subido-->
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>

      <article class="post">
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="../assets/logo.svg" class="img-post">
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>

      <article class="post">
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="../assets/logo.svg" class="img-post">
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>

      <article class="post">
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="../assets/logo.svg" class="img-post">
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>
    </section>
  </section>

</template>

<script>

</script>
<!--Se comienzan con los estilos tipo sass-->
<style lang="scss" scoped>
/*Se configura la pagina con la eliminacion del posible margen en la pagina y la separacion entre elementos*/ 
* {
  margin: 0;
  padding: 0;
}
/*Dentro del header se configura el fondo del encabezado,la anchura, el largo, el color de sombreado que tendra y la forma del borde del 
final del header */
header {
  background: #01a9db;
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 30px #A4A4A4;
  border-bottom-style: solid;
  border-bottom-color: #585858;
  border-bottom-width: 5px;
}

#encabezado {
  width: 80%;
  height: 30px;
  margin: auto;
  border: 0px solid #000;
}
/*Se le da formato al logo para que este pueda adaptarse en el header y encabezado */
#logo {
  width: 30%;
  height: auto;
  overflow: hidden;
  float: left;
  color: #fff;
  font-size: 30px;
  margin-top: 55px;
}
/*En la propiedad menu se esta definiendo el color y el ancho que se tendra para los elementos que vienen dentro del menu */
#menu {
  width: 60%;
  height: 30px;
  float: right;
  border: 0px solid red;
  margin-top: 57px;
}

#menu ul {}

/*Configurar estilo para el menu y los elementos o categorias que este posee */
#menu ul li {
  list-style: none;
  display: inline-block;
  margin-top: 10px;
}
/*mediante este se define el tamaño el espaciado, el color y el tipo de letra que seran aquellas categorias que se encuentren dentro del menu con
la clase de enlace */
#menu ul li .enlace {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
}
/*Aqui se agrega un hover a los elementos correspondientes a la clase enlace esto para que cuando se pone el cursor sobre uno de estos elementos aparece un 
color distinto al que se establecio de fondo */
#menu ul li .enlace:hover {
  background: #585858;
  color: #fff;
  border-radius: 5px 5px 0px 0px;
}
// referencia al elemento de la pagina de inicio el cual posee un enlace y contiene la etiqueta de active para establecer un color de fondo,
//el color del texto,el borde que este fondo tendra y el relleno que tendra en el texto.
#menu ul li .active {
  background: #585858;
  color: #fff;
  border-radius: 5px 5px 0px 0px;
  padding: 10px;
}
//Dentro del principal se establece el ancho del contenedor, el alto que tendra el cual se ajustara de acuerdo a los cards que se inserten, el borde
//el margen y la alineacion de los elementos
#principal {
  width: 80%;
  height: auto;
  overflow: hidden;
  border: 1px solid;
  margin: 25px solid;
  align-items: center;
}
//el uso de la clase publicaciones refiere a lo mismo que el de principal sin embargo este ajusta los cards de acuerdo a las propiedades del contenedor principal
#publicaciones {
  width: 70%;
  height: auto;
  overflow: hidden;
  border: 1px solid red;
  margin-top: 10px;
  align-items: center;
}
//en post se define la configuracion que tendran los elementos que se inserten en este ya sea como los titulos, textos, etc en donde definira,
//el ancho que el contenedor tendra, la alineacion del contenido los bordes que este contendra, el sombreado del contenedor y los margenes que tendra

.post {
  width: 90%;
  align-content: center;
  height: auto;
  overflow: hidden;
  padding: 20px;
  background: #fdfdfd;
  border-left-style: solid;
  border-left-width: 15px;
  border-left-color: #0489B1;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #ccc;
  margin-bottom: 25px;
  margin: 50px;
}
//define el estilo que contendra el enlace del titulo de la publicacion
.enlace-post {
  text-decoration: none;
}
//Define los colores y el tamaño de fuente que tendra el titulo de la publicacion
#publicaciones a .titulo-post {
  color: #6e6e6e;
  font-size: 22px;
  font-family: calibri light;
}
//se declara como subrayado al titulo de la publicacion que tendra el enlace
#publicaciones a .titulo-post:hover {
  text-decoration: underline;
}
//define estilos para ajustar la imagen de la publicacion al contenedor declarando el ancho y alto de la imagen, el margen que tendra y el relleno
//los bordes de la imagen
#publicaciones .img-post {
  width: 150px;
  height: 100px;
  float: left;
  margin: 7px 7px 7px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
//se declara el estilo de la fuente de el texto de los datos de la publicacion por ejemplo la fecha y quien lo publico aparte de definir el color
#publicaciones .datos-publicaciones {
  font-family: 'calibri light';
  color: #0489B1;
}
//se define el tamaño, estilo de fuente, color y relleno que tendra la informacion de la publicacion
#publicaciones .parrafo-post {
  font-family: 'calibri light';
  font-size: 16px;
  color: #848484;
  padding: 5px;
}
//define el estilo del boton o la direccion para poder leer mas de la publicacion el color de fondo de este boton, el color del texto, los bordes que 
//este tendra, el margen que tendra entre un elemento y otro y el radio del borde
#publicaciones .leer-mas {
  background: #0489B1;
  color: #fff;
  border: 0px;
  padding: 5px;
  text-decoration: none;
  margin-top: 20px;
  border-radius: 5px;
}
//se definen los estilos para el span que contiene la informacion de cuantos comentarios son los que se han ido agregando a una determinada publicacion
#publicaciones .num-comentarios {
  background: #0b3b39;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
}
</style>