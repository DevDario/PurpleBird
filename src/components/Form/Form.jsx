import React from 'react'
import propTypes from 'prop-types'
import Input from '../../utils/Input/Input'
import Button from '../../utils/Button/Button'
import style from './Form.module.css'

const Form = () => {

    const handleFormSubmit = () => {
        alert('your email')
    }

  return (
    <form className={style.form}>
        <div className={style.formSection}>
            <label htmlFor='email'>your friends email</label>
            <Input
                name="email"
                placeholder="ex: johndoe@gmail.com"
                textAlign={"left"}
                width={"40rem"}
            />
            <label htmlFor="message">email</label>
            <Input
                name="message"
                placeholder="hello, John !"
                textAlign={"start"}
                width={"40rem"}
                height={"200px"}
                type={"text"}
                borderRadius={"20px"}
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