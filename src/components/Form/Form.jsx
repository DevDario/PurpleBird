import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../utils/Input/Input'
import Button from '../../utils/Button/Button'
import style from './Form.module.css'
import {useState} from 'react'
const Form = () => {

    const [userEmail, setUserEmail] = useState("")
    const [message,setMessage] = useState("")

    const handleFormSubmit = () =>{
        console.log("Your email")
    }

  return (
    <form className={style.form}>
        <div className={style.formSection}>
            <label htmlFor='email'>your friends email</label>
            <Input
                name="email"
                placeholder="ex: johndoe@gmail.com"
                textAlign={"left"}
                width={"130%"}
                textColor={"#fcfcfb"}
                value={userEmail}
                event={(e)=>{setUserEmail(e.target.value)}}
            />
            <label htmlFor="message">email</label>
            <Input
                name="message"
                placeholder="hello, John !"
                textAlign={"left"}
                width={"130%"}
                textColor={"#fcfcfb"}
                height={"200px"}
                type={"text"}
                borderRadius={"20px"}
                value={message}
                event={(e)=>{setMessage(e.target.value)}}
            />
            <Button
                buttonText = {"send your email"}
                name = {"send"}
                buttonLink = {""}
                event = {handleFormSubmit}
            />
        </div>
    </form>
  )
}

Form.propTypes = {

}

Form.defaultProps = {

}

export default Form