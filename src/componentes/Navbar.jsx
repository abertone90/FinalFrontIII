// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>

<Link to="/home">
        DH Odonto
      </Link>
      <ul >
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar