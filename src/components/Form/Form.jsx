import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../utils/Input/Input'
import Button from '../../utils/Button/Button'
import style from './Form.module.css'
import emailjs from 'emailjs-com'
import emailjsConfig from '../../emailjsConfig.js'
import {useState} from 'react'


export default function Form({reply_to}){

  const [formData, setFormData] = useState({
    reply_to: reply_to,
    to_email: '',
    message: '',
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
      
        const handleFormSubmit = (e) => {
          e.preventDefault();
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const email = formData.to_email;

          //Tests if the email matches the specified RegEx 
          if(emailPattern.test(email)){
      
          emailjs.send(
            emailjsConfig.serviceID,
            emailjsConfig.templateID,
            formData,
            emailjsConfig.userID
          )
            .then((response) => {
              alert('Email sent successfully!')
            })
            .catch((error) => {
              alert('Error sending the E-mail. Try again in a few seconds');
            });
        } else {
          alert("You have to inform a valid E-mail Address")
        }
        }

  return (
    
    <form className={style.form}>
    
        <div className={style.formSection}>
        
            <label htmlFor='email'>your friends email</label>
            <Input
                name="to_email"
                placeholder="ex: johndoe@gmail.com"
                textAlign={"left"}
                width={"300px"}
                textColor={"#fcfcfb"}
                value={formData.to_email}
                event={handleChange}
            />
            
            <label htmlFor="message">email</label>
            <Input
                name="message"
                placeholder="hello, John !"
                textAlign={"left"}
                width={"300px"}
                textColor={"#fcfcfb"}
                height={"200px"}
                type={"text"}
                borderRadius={"20px"}
                value={formData.message}
                event={handleChange}
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
    reply_to: PropTypes.string.isRequired
}

Form.defaultProps = {
    reply_to: ''
}