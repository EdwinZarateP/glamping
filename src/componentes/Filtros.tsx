import '../estilos/Filtros.css'
import { FaHouseFloodWater, FaUmbrellaBeach, FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { BsTreeFill } from "react-icons/bs";
import { PiMountainsBold } from "react-icons/pi";
import { GiDesert } from "react-icons/gi";
import { MdCabin } from "react-icons/md";
import { TbFilterEdit } from "react-icons/tb";


const Filtros = () => {
    
    //creamos una constante con las caracteristicas y sus logos

    const iconos=[
        {titulo:"Sol", icono:<FaUmbrellaBeach />},
        {titulo:"Clima calido", icono:<FaTemperatureArrowUp />},
        {titulo:"Clima frio", icono:<FaTemperatureArrowDown />},
        {titulo:"Naturaleza", icono:<BsTreeFill />},
        {titulo:"En la montaña", icono:<PiMountainsBold />},
        {titulo:"Desierto", icono:<GiDesert />},
        {titulo:"Flotantes", icono:<FaHouseFloodWater />},
        {titulo:"Cabañas", icono:<MdCabin />}
       
    ];
    
    
    return (
        <div className='contenedorFiltros'>

            {/* Utilizamos map para recorrer el array de iconos y renderizar cada elemento */}
            {iconos.map((elemento, index) => (
            <div key={index} className="filtro">
                <span>{elemento.titulo}</span>
                <div className="icono">{elemento.icono}</div>
            </div>
            ))}

            <div className='multifiltro'>
                <TbFilterEdit />
            </div>

        </div>
    );
};

export default Filtros;