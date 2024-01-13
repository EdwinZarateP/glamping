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
            <div className='contenedorMedio'>

                <input
                className='inputmedio'
                type='search'
                placeholder='Dónde'
                />

                <div className='contenedorMedioBotones'>
                 
                    <button>Tiempo</button>
                 
                    <button>Quién cuantos</button>
                </div>

                <div className='lupaBusqueda'>
                    <FiSearch />
                    </div>

                

            </div>

            {/* Parte derecha */}
            <div className='contenedorderecho'>
                <p>Ofrece tu glamping</p>
                <BiWorld />
                <div className='contenedorMenu'>
                <FiMenu />
                <AiOutlineUser/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;