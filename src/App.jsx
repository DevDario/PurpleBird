import './App.css'
import { useState } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Feature from './utils/Feature/Feature.jsx'
import Input from './utils/Input/Input.jsx'
import Form from './components/Form/Form.jsx'
import Button from './utils/Button/Button'
import Image from './utils/Image/Image'

import ReceptorImage from './assets/receptorImage.png'
import SendImage from './assets/safeImage.png'
import EmailImage from './assets/emailImage.png'

import { FaSmile, FaFastForward } from 'react-icons/fa'
import { BsUniversalAccessCircle } from 'react-icons/bs'
import { Fade, Slide } from 'react-awesome-reveal'

export default function App() {

  const [userEmail, setUserEmail] = useState("")
  const [isSectionVisible, setIsSectionVisible] = useState(false)

  const toggleSectionVisibility = () => {
    setIsSectionVisible(!isSectionVisible)
  }

  const handleShowSectionButton = (e) => {
      e.preventDefault()

      const formSection = document.getElementsByClassName('form-section')[0]
      const emailSection = document.getElementsByClassName('user-email')[0]
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const email = userEmail;

      //checks if the email is correct

      if (emailPattern.test(email)) {
        
        emailSection.classList.add('hide')
        formSection.classList.add('show')
        toggleSectionVisibility()

      } else {

          alert('Invalid email address');
          setUserEmail("")
      }

  }

  return (
    <div className='app'>
      <Navbar/>

    
      <Slide direction='left'>
        <h1 className='homeTitle'>
          Send fast E-mails to your <br/>
          friend using this amazing <br/>
          browser tool !
        </h1>
      </Slide>

    <Fade cascade>
      <section className="instructions">
        <Image
          imageSource={ReceptorImage}
          width={"240px"}
          height={"240px"}
        />

        <Image
          imageSource={EmailImage}
          imageTitle={"Write your message"}
          alternativeText={"write your email"}
          imageDescription={"write the content of your message, adding the subject and other informations, then just click to send it"}
          width={"230px"}
          height={"230px"}
        />

        <Image
          imageSource={SendImage}
          imageTitle={"Be safe while sending it"}
          alternativeText={"send your email"}
          imageDescription={"We keep you safe while you're sending your e-mail, with our safety endpoints and measures"}
          width={"240px"}
          height={"240px"}
        />
      </section>
      </Fade>

      <section className="features">

        <h1 className="sectionTitle">
          Why you should use it
        </h1>

        <Fade cascade>
          <div className="features-info">
            <Feature
              icon={<BsUniversalAccessCircle size={"40px"} color={"rgb(191, 100, 255)"} cursor={"help"}/>}
            />
          
            <Feature
              icon={<FaSmile size={"40px"} color={"rgb(191, 100, 255)"} cursor={"help"}/>}
              alternativeText={"fun to use icon"}
              title={"it's fun"}
              description={"with an intuitive and user-friendly UI, we focused in proposing a fun experience for all users, using calm colors, and smooth fonts, with an easy and fast way to send your emails"}
            />
            <Feature
              icon={<FaFastForward size={"40px"} color={"rgb(191, 100, 255)"} cursor={"help"}/>}
              alternativeText={"fast tool icon"}
              title={"it's fast"}
              description={"Our tool is very fast, so you dont have to waste your time login in others services to simple send an email. We use an simple and fast protocol and tools, for you to have a better and faster experience"}
            />
          </div>
        </Fade>
      </section>

      <section className="user-email">
          <h2>Type your email</h2>
          <Input 
            value={userEmail}
            event={(e) => {setUserEmail(e.target.value)}}
          />
          <Button 
            event = {handleShowSectionButton}
          />
      </section>

      <section className="form-section">
        {
          isSectionVisible && (
            <Form 
              reply_to={userEmail}
            />
          )
        }
      </section>

      <Footer/>
    </div>
  )
}
