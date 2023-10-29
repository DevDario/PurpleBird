/* eslint-disable no-unused-vars */
import React from 'react'
import style from './Logo.module.css'
import PropTypes from 'prop-types'

const Logo = ({fontSize, fontColor,LogoName}) => {
  return (
    <div className={style.logoBox}>

          {
            <img width="48" height="48" alt="Purple Bird" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/7950F2/external-bird-origami-tanah-basah-glyph-tanah-basah.png"/> && (

              <img width="48" height="48" alt="Purple Bird" src="/favicon.png"/>
            )

          }

            <h1 style={{
                fontSize:fontSize,
                color:fontColor
            }}>{LogoName}</h1>

        </div>
  )
}

Logo.propTypes = {
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  LogoName: PropTypes.string.isRequired
}

Logo.defaultProps = {
  fontSize: "24px",
  fontColor: "#212121",
  LogoName: "PurpleBird"
}


export default Logo