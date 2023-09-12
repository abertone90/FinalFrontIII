
import "./Formulario.css"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre === ""|| nombre.length <5 || email === ""|| !email.includes("@")) {
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])
    }

    return (
        <section><h1>Login</h1>
            <form className="formulario"


                onSubmit={handleSubmit}
            >


                <input type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)} 
                    placeholder="Nombre"/>
                    
                <input type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Correo"
                />
                <button>Guardar Contacto</button>
            </form>
            {error && <p>Por favor llene todos los campos</p>}

        </section>
    )

}