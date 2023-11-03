import React from 'react'
import style from './Footer.module.css'
import Logo from '../utils/Logo/Logo'

export default function Footer(){
  
  return (
    
    <footer className={style.footerContainer}>
      <div className={style.about}>
          
          <Logo 
            fontColor={"#fcfcfb"}
          />
           <p className={style.aboutDescription}>
            PurpleBird is a free open source e-mail sender.<br/>
            with PurpleBird you can send faster emails using the <br/>
            EmailJS API to send them, so you can have a better <br/>
            experience and faster results.
           </p>

      </div>
        
        <div className={style.iconsSource}>
          <a  href="https://icons8.com/icon/VJd4TEEr0kDo/bird">bird</a> 
          icon by <a href="https://icons8.com">Icons8</a>
        </div>

        <div className={style.credits}>
            <p>Made With <span className={style.hearth}>❤</span> By Dário Silva</p>
        </div>

    </footer>
  )
}