import React from 'react'
import propTypes from 'prop-types'
import style from './Input.module.css'
const Input = ({type, textAlign, textColor, placeholder, padding, borderRadius,name}) => {
  return (
    <input className={style.input} type={type} placeholder={placeholder} name={name} style={{
        color: textColor,
        textAlign:textAlign,
        padding:padding,
        borderRadius:borderRadius
    }}/>
  )
}

Input.propTypes = {
    type:propTypes.string.isRequired,
    textAlign: propTypes.string,
    textColor:propTypes.string,
    placeholder: propTypes.string.isRequired,
    padding:propTypes.string,
    borderRadius:propTypes.string,
    name:propTypes.string.isRequired
}

Input.defaultProps = {
    type:"email",
    textAlign: "center",
    textColor:"#c0c0c0",
    placeholder: "type your email here",
    padding:".8rem 30rem",
    borderRadius:"5rem",
    name:"email"
}

export default Input