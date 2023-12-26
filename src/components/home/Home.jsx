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
            Por que es tan complicado entrar al mundo de la programacion hoy en dia y mas
            cuando no tienes una base de esnsenanza y eres nuevo y deseas aprender 
            por tu propia cuenta con videos tutoriales y libros. <br/><br/>
            Es frustante al inicio no tener una linea marcada de como iniciar con tanta 
            informacion en internet y con tantos lenguajes de programacion y mas aun 
            con los IDE de desarrollo para lenguajes cual estudiar cual usar cual es mas facil 
            aprender y utilizar<br/><br/>
            Haviendo tanto lenguajes de programacion e IDE de desarrollo y no tener informacion 
            o guia las personas se
            abruman de tanta informacion, pero hoy te contare como recrear tu
            linea de aprendizaje.<br/>
            La repuesta es mas sencilla de lo que piensas y aca te explicare porque 
            y como.
          </p>
        </div>
      </div>

      <div className="home-cajas">
        <div className="home-caja1">
          <h3>Que debo Estudiar y aprender primero</h3>
          <p>
            Lo primero que se debe estudiar y aprender es lo mas basico
            <strong> HTML</strong> Y <strong>CSS</strong>.
            Estructura basicas de una pagina y su elementos internos con su 
            <br/>En mi caso inicie con una computadora
            muy basica con 2G de RAM y 512G de disco duro, por lo que tuve que usar 
            un <strong>IDE</strong> que se adaptara a mi pc siendo rapido y no tan pesado
            que no consumiera mucha memoria RAM este es <a href="https://www.sublimetext.com/">Sublime Text </a> 
            existen muchos otros mas pero nesecitan tener mas conociemientos de codigos y estructura de una pagina web.<br/>


          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
