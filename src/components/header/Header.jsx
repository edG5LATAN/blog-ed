import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <section className='header-logo'>
        <img src="img/faviconPc.png" alt="iconoLogo"/>
        <h1>TECNOLOGIA CRACION DE PAGINA WEB</h1>
      </section>
      <nav className='header-nav'>
        <ul>
         <li>inicio</li>
         <li>contacto</li>
         <li>informacion</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
