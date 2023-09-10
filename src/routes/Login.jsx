import { Formulario } from "../componentes/Formulario";
import { Home } from "../componentes/Home";
import { useState } from "react";
import "./App.css";


function Login() {
  const [user, setUser] = useState([])

return(
 <div className='App'>
 {!user.length > 0 
 ? <Formulario setUser={setUser}/> 
 : <Home/>}
 </div>
   )
}

export default Login;