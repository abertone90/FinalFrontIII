import "./Formulario.css"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
export function Formulario({setUser}){
    const[nombre, setNombre] = useState("")
    const[pasword, setPasword] = useState("")
    const[error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(nombre === "" || pasword === ""){
            setError(true)
            return    
    }
        setError(false)
        setUser([nombre])
      
        
    
    }
    
    return(
        <section><h1>Login</h1>
        <form className="formulario"
          onSubmit={handleSubmit}
          >
          
            
            <input type="text" 
            value={nombre}
            onChange={e => setNombre(e.target.value)}/>
            <input type="pasword"
            value={pasword}
            onChange={e => setPasword(e.target.value)}
            />
            <button>Iniciar Sesión</button>
        </form>
        {error && <p>Por favor llene todos los campos</p>}
        
        </section>
    ) 

}