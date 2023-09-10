import { Route } from 'react-router-dom'
import './App.css'
import { Formulario } from './componentes/Formulario'
import { Home } from './componentes/Home'


function App() {
  return(
    <><header>

      <a href='Home'>Home</a>
      <a href='Formulario'>Formulario</a>

    </header>

    <Route>

        <Route path='/' element={<Home />} />
        <Route path='/Formulario' element={<Formulario />} />

      </Route></>


  
  )
}

export default App
