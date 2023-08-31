import './App.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Image from './utils/Image/Image'
import ReceptorImage from './assets/businessman-working-laptop.jpg'

function App() {

  return (
    <div className='app'>
      <Navbar/>

      <h1 className='homeTitle'>
        Send a fast E-mail to your <br/>
        friend using this amazing <br/>
        browser tool !
      </h1>

      <Image 
        imageSource={ReceptorImage}
      />

      <Footer/>
    </div>
  )
}

export default App
