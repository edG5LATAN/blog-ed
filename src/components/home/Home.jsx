import React from "react";
import "./Home.css";
import Portada from "../portada/Portada";

function Home() {
  return (
    <div className="home">
      <Portada />
      <div className="home-cajas">
        <div className="home-caja1">
          <h3>Primeros pasos</h3>
          <p>
            Por que es tan complicado entrar al mundo de la programacion hoy en
            dia y mas cuando no tienes una base de esnsenanza y eres nuevo y
            deseas aprender por tu propia cuenta con videos tutoriales y libros.{" "}
            <br />
            <br />
            Es frustante al inicio no tener una linea marcada de como iniciar
            con tanta informacion en internet y con tantos lenguajes de
            programacion y mas aun con los IDE de desarrollo para lenguajes cual
            estudiar cual usar cual es mas facil aprender y utilizar
            <br />
            <br />
            Haviendo tanto lenguajes de programacion e IDE de desarrollo y no
            tener informacion o guia las personas se abruman de tanta
            informacion, pero hoy te contare como recrear tu linea de
            aprendizaje.
            <br />
            La repuesta es mas sencilla de lo que piensas y aca te explicare
            porque y como.
          </p>
        </div>
      </div>

      <div className="home-cajas">
        <div className="home-caja1">
          <h3>Que debo Estudiar y aprender primero</h3>
          <p>
            Lo primero que se debe estudiar y aprender es lo mas basico
            <strong> HTML</strong> <strong>CSS</strong> Y <strong>JS</strong>.
            <br />
            <br />
            <strong>HTML</strong> Como sus siglas lo dicen es HyperText Markup
            Language, es un lenguage que permite definir y darle estructura alas
            paginas web.
            <br />
            Estructura basica interna de una pagina y su elementos luego de
            conocer la estructura de como su idioma titulo cuerpo (
            <strong>body</strong>) sus etiquetas separadores ....etc. <br />
            <br />
            <strong>CSS</strong> Sus siglas Cascading Style Sheets es un
            lenguage el cual permite darle color, tamano y asi dandole forma al
            esqueleto que en este caso seria el HTML teniendo en cuenta que como
            su sigla lo dice en forma de cascadas aspectos de el HTML como
            tamanos de fuentes y estilos colores de fondos colores de texto.
            <br />
            <br />
            <strong>JS</strong> las siglas de JavaScript es un lenguaje de
            desarrollo que hace que tu proyecto de HTML y CSS puedan llegar a
            terner contenido dinamico controlar animaciones sonidos .
          </p>
        </div>
      </div>

      <div className="home-cajas">
        <div className="home-caja1">
          <h2>DIAGRAMA BASICO WEB</h2>
          <img className="diagrama" src="img/diagrama.png" alt="diagrama" />
        </div>
      </div>

      <div className="home-cajas">
        <div className="home-caja1">
          <h3>Que es lo que sigue</h3>
          <p>
            Ya una vez ya hayas manejando lo basico de HTML, CSS y JS podremos
            pasar al siguiente nivel que seria escojer un framework y
            especializarte las mas comunes son
            <br />
            <br />
            <strong>REACT</strong>: El mas utilizado y mas solicitado por empleadores es 
            React un framework o mas bien como libreria creado por FACEBOOK para resolver 
            varios problemas que tenian los frameworks de sus epocas muy facil de aprender y
            ligero donde se instalara solo que se nesecite realizar 
            muchos de los fra.
            <br />
            <br />
            <strong>JS</strong> las siglas de JavaScript es un lenguaje de
            desarrollo que hace que tu proyecto de HTML y CSS puedan llegar a
            terner contenido dinamico controlar animaciones sonidos .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
