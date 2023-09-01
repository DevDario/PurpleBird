import './App.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Image from './utils/Image/Image'
import ReceptorImage from './assets/receptorImage.png'
import SendImage from './assets/safeImage.png'
import EmailImage from './assets/emailImage.png'

function App() {

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
      <Footer/>
    </div>
  )
}

export default App
