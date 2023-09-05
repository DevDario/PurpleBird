import React from 'react'
import style from './Navbar.module.css'
import {DiGithubBadge} from 'react-icons/di'
const Navbar = () => {
  return (
    <div className={style.Navbar}>
        <div className={style.logoBox}>

          {
            <img width="48" height="48" alt="Purple Bird" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/7950F2/external-bird-origami-tanah-basah-glyph-tanah-basah.png"/> && (

              <img width="48" height="48" alt="Purple Bird" src="/public/favicon.png"/>
            )

          }

            <h1>PurpleBird</h1>

        </div>
        <div className={style.Medias}>
            <a href="https://github.com/DevDario/PurpleBird/tree/master" target="_blank" rel="noopener noreferrer">
                <DiGithubBadge size={"35px"} color={"#212121"}/>
            </a>
        </div>
    </div>
  )
}

export default Navbar