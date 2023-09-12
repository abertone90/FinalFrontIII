
// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Formulario } from '../componentes/Formulario'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Formulario/>
    </div>
  )
}

export default Contact;