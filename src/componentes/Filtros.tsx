import '../estilos/Filtros.css';
import { FaHouseFloodWater, FaUmbrellaBeach, FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { BsTreeFill } from "react-icons/bs";
import { PiMountainsBold } from "react-icons/pi";
import { GiDesert, GiTreehouse, GiHiking } from "react-icons/gi";
import { MdCabin, MdOutlinePets } from "react-icons/md";
import { TbFilterEdit } from "react-icons/tb";
import { FaCaravan } from "react-icons/fa";

const Filtros = () => {
    const iconos = [
        {titulo: "Playa", icono: <FaUmbrellaBeach />},
        {titulo: "Tropical", icono: <FaTemperatureArrowUp />},
        {titulo: "Clima frio", icono: <FaTemperatureArrowDown />},
        {titulo: "Naturaleza", icono: <BsTreeFill />},
        {titulo: "En la montaña", icono: <PiMountainsBold />},
        {titulo: "Desierto", icono: <GiDesert />},
        {titulo: "Pet Friend", icono: <MdOutlinePets />},
        {titulo: "Flotantes", icono: <FaHouseFloodWater />},
        {titulo: "Cabañas", icono: <MdCabin />},
        {titulo: "Casa del árbol", icono: <GiTreehouse />},
        {titulo: "Caminata", icono: <GiHiking />},
        {titulo: "Remolques", icono: <FaCaravan />}       
    ];

    return (
        <div className='contenedorFiltros'>
            <div className='contenedorFiltrosLista'>
                {iconos.map((elemento, index) => (
                    <div key={index} className="filtro">
                        <span>{elemento.titulo}</span>
                        <div className="icono">{elemento.icono}</div>
                    </div>
                ))}
            </div>
            <div className='multifiltro'>
                <TbFilterEdit />
            </div>
        </div>
    );
};

export default Filtros;
