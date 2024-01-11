import logo from '../imagenes/logo12.png';
import '../estilos/Navbar.css'

const NavBar = () => {
    return (
        <div>
            {/* Parte Izquierda */}
            <div className="contenedorNavbar">
                <img src={logo} className="logo"/>
            </div>

            {/* Parte media */}
            {/* Parte derecha */}
            <h3>Glamping Colombia</h3>
        </div>
    );
};

export default NavBar;