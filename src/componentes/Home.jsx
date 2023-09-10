export function Home(user, setUser){

    const handleLogout = () =>{
        setUser([])
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}