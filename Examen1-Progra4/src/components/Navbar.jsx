
const Navbar = ({setView})=>{ 
return(
    <nav className="Navbar">
        <h2>Programación IV</h2>
        <ul>
            <li>
                <button onClick={()=> setView('home')}> Inicio</button>
            </li>
            <li>
                <button onClick={()=> setView('carparts')}> Repuestos</button>
            </li>
        </ul>
    </nav>
)
}
export default Navbar;

