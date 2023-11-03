import React from 'react'
import PropTypes from 'prop-types'
import style from './Button.module.css'

export default function Button ({buttonText, buttonLink, name, event}) {
  return (
    <button className={style.button} name={name} onClick={event}>
        <a href={buttonLink}>
            <p>
              {buttonText}
            </p>
        </a>
    </button>
  )
}

Button.propTypes ={
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    event: PropTypes.any
}

Button.defaultProps = {
    buttonText: "Start",
    buttonLink:"",
    name:"show section"
}