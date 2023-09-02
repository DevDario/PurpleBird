import './App.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Image from './utils/Image/Image'
import ReceptorImage from './assets/receptorImage.png'
import SendImage from './assets/safeImage.png'
import EmailImage from './assets/emailImage.png'
import Feature from './utils/Feature/Feature'
import { FaSmile, FaFastForward } from 'react-icons/fa'
import { BsUniversalAccessCircle } from 'react-icons/bs'
import Input from './utils/Input/Input'
import { useState } from 'react';

function App() {

  const [userEmail, setUserEmail] = useState("")

  return (
    <div className='app'>
      <Navbar/>

      <h1 className='homeTitle'>
        Send a fast E-mail to your <br/>
        friend using this amazing <br/>
        browser tool !
      </h1>

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

      <section className="features">

        <h1 className="sectionTitle">
          Why you should use it
        </h1>

        <div className="features-info">
          <Feature
            icon={<BsUniversalAccessCircle size={"40px"} color={"#505050"} cursor={"help"}/>}
          />
          
          <Feature
            icon={<FaSmile size={"40px"} color={"#505050"} cursor={"help"}/>}
            alternativeText={"fun to use icon"}
            title={"it's fun"}
            description={"with an intuitive and user-friendly UI, we focused in proposing a fun experience for all users, using calm colors, and smooth fonts, with an easy and fast way to send your emails"}
          />
          <Feature
            icon={<FaFastForward size={"40px"} color={"#505050"} cursor={"help"}/>}
            alternativeText={"fast tool icon"}
            title={"it's fast"}
            description={"Our tool is very fast, so you dont have to waste your time login in others services to simple send an email. We use an simple and fast protocol and tools, for you to have a better and faster experience"}
          />
        </div>
      </section>

      <section className="user-email">
          <h2>Type your email</h2>
          <Input 
            value={userEmail}
            event={(e) => {setUserEmail(e.target.value)}}
          />
      </section>

      <Footer/>
    </div>
  )
}

export default App
