import logo from '../imagenes/logo12.png';
import '../estilos/Navbar.css'
import { BiWorld } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
    return (
        <div className='barNav'>
            {/* Parte Izquierda */}
            <div className="contenedorizquierdo">
                <img src={logo} className="logo"/>
            </div>

            {/* Parte media */}
            <div className='contenedormedio'>
                
                <input
                className='inputmedio'
                type='search'
                placeholder=''
                />

                <div className='contenedorMedioBotones'>
                    <button>Lugar</button>
                    <button>Tiempo</button>
                    <button>Grupo talla</button>
                </div>
                
                <div className='lupaBusqueda'>
                <FiSearch />
                </div>

            </div>

            {/* Parte derecha */}
            <div className='contenedorderecho'>
                <p>Alquila un glamping</p>
                <BiWorld />

                <div>
                    <FiMenu />
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    );
};

export default NavBar;