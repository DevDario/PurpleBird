import React from 'react'
import propTypes from 'prop-types'
import style from './Input.module.css'
const Input = ({type, textAlign, textColor, placeholder, width, height, borderRadius,name}) => {
  return (
    <input className={style.input} type={type} placeholder={placeholder} autoComplete={"true"}  name={name} style={{
        color: textColor,
        textAlign:textAlign,
        width:width,
        height:height,
        borderRadius:borderRadius
    }} required/>
  )
}

Input.propTypes = {
    type:propTypes.string.isRequired,
    textAlign: propTypes.string,
    textColor:propTypes.string,
    placeholder: propTypes.string.isRequired,
    width:propTypes.string,
    height:propTypes.string,
    borderRadius:propTypes.string,
    name:propTypes.string.isRequired
}

Input.defaultProps = {
    type:"email",
    textAlign: "center",
    textColor:"#c0c0c0",
    placeholder: "type your email here",
    width:"80%",
    height:"4.6rem", 
    borderRadius:"5rem",
    name:"email"
}

export default Input