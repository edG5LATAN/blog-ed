import React from "react";
import "./Administrador.css";

function Administrador() {
  return (
    <div className="administrador">
      <div className="administrador-form">
        <h2>datos internos</h2>
        <form action="">
          <input type="text" placeholder="marca" />
          <input type="text" placeholder="modelo" />
          <input type="text" placeholder="precio" />
          <input type="text" placeholder="especificaciones" />
          <input type="text" placeholder="categoria" />
          <div className="administrador-botones">
            <button>agregar</button>
            <button>eliminar</button>
            <button>editar</button>
            <button>limpiar</button>
          </div>
        </form>
      </div>
      <div className="administrador-tabla">
        <h2>Datos Internos</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>marca</th>
              <th>modelo</th>
              <th>precio</th>
              <th>especificaciones</th>
              <th>categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>samsung</td>
              <td>a01</td>
              <td>450</td>
              <td>es el modelo con informacion basica</td>
              <td>telefono</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Administrador;
