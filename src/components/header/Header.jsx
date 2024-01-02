import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
 
   let cokie=useNavigate()



  return (
    <div className='header'>
      <section className='header-logo'>
        <img src="img/faviconPc.png" alt="iconoLogo"/>
        <h1>TECNOLOGIA CRACION DE PAGINA WEB</h1>
      </section>
      <nav className='header-nav'>
        <ul>
        <li onClick={()=>cokie('/')}>inicio</li>
        <li onClick={()=>cokie('/cookies')}>Cookies</li>
         <li>contacto</li>
         <li>informacion</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
