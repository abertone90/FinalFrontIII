import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './componentes/Home'
import Contact from './routes/Contact'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'


function App() {
  return (
    <div>
     
<Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/favs" element={<Favs />} />
        <Route path="/dentist/:id" element={<Detail />} /> */}
      </Routes>
      
      <Footer/>


      </div>


  )
}

export default App
