import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './componentes/Home'
import Contact from './routes/Contact'


function App() {
  return (
    <><header>
      <a href='/'>Home</a>
      <a href='/contact'>Contact</a>



    </header>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/favs" element={<Favs />} />
        <Route path="/dentist/:id" element={<Detail />} /> */}



      </Routes></>



  )
}

export default App
