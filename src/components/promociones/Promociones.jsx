import React from 'react'
import './Promociones.css'
import Opciones from '../opciones/Opciones'

function Promociones() {
  return (
    <div className='promociones'>
      <div className='promociones-contenedor'>
       <h2>Promociones</h2>
       <Opciones />
       <p></p>
      
       <div className='promo'>
         <div className='caja'>
          <img className='caja-img' src="img/faviconPc.png" alt="imagen caja" />
          <h5 className='caja-h'>marca</h5>
          <p className='caja-p'>modelo</p>
          <p className='caja-p'>precio</p>
          <p className='caja-p'>especificicaiones tecnicas de 
            producto
          </p>
          <div className='caja-botones'>
            <button className='caja-btn'>comprar</button>
          </div>
         </div>
         
         <div className='caja'>
          <img className='caja-img' src="img/faviconPc.png" alt="imagen caja" />
          <h5 className='caja-h'>marca</h5>
          <p className='caja-p'>modelo</p>
          <p className='caja-p'>precio</p>
          <p className='caja-p'>especificicaiones tecnicas de 
            producto
          </p>
          <div className='caja-botones'>
            <button className='caja-btn'>comprar</button>
          </div>
         </div>

         <div className='caja'>
          <img className='caja-img' src="img/faviconPc.png" alt="imagen caja" />
          <h5 className='caja-h'>marca</h5>
          <p className='caja-p'>modelo</p>
          <p className='caja-p'>precio</p>
          <p className='caja-p'>especificicaiones tecnicas de 
            producto
          </p>
          <div className='caja-botones'>
            <button className='caja-btn'>comprar</button>
          </div>
         </div>

         <div className='caja'>
          <img className='caja-img' src="img/faviconPc.png" alt="imagen caja" />
          <h5 className='caja-h'>marca</h5>
          <p className='caja-p'>modelo</p>
          <p className='caja-p'>precio</p>
          <p className='caja-p'>especificicaiones tecnicas de 
            producto
          </p>
          <div className='caja-botones'>
            <button className='caja-btn'>comprar</button>
          </div>
         </div>
         
       </div>

       
    </div>
    </div>
    
  )
}

export default Promociones
