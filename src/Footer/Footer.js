import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-text'>
            <p>Copyright &copy; 2023 by B.Achraf | All Rights Reserved.</p>
        </div>

        <div className='footer-iconTop'>
            <a href='#'>
                <i class="bx bx-up-arrow-alt"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer