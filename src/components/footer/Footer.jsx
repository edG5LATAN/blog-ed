import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { red } from '@mui/material/colors';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <div className='footer-caja'>
         <p>inicio</p>
         <p>contaco</p>
         <p>informacion</p>
        </div>

        <div className='footer-caja footer-email'>
         <form action="">
          <input type="text" placeholder='nombre' required />
          <input type="email" name="" id="" placeholder='ingrese eamil' required />
          <input type="text" placeholder='asunto' required />
          <input type="text" placeholder='texto' required />
          <input type="submit" className='footer-btn' />
         </form>  
        </div>

        <div className='footer-caja'>
          <FacebookIcon color="primary" fontSize="large" className='footer-icon' />
          <InstagramIcon sx={{ color: red[500] }} fontSize="large" className='footer-icon'/>
          <LinkedInIcon color="primary" fontSize="large" className='footer-icon' />
        </div>
      </div>
      <div className='footer-footer'>
        <h6>made for <span>EC</span></h6>
        <p>2023</p>
      </div>
    </div>
  )
}

export default Footer
