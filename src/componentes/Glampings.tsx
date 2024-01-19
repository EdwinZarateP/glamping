import '../estilos/Glampings.css';
import g1 from '../imagenes/g1.jpg';
import g2 from '../imagenes/g2.jpg';
import g3 from '../imagenes/g3.jpg';
import g4 from '../imagenes/g4.jpg';
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Glampings = () => {
    const fotosEinfo = [
        { titulo: "Terrojo", imagen: g4, costo:310000, fecha:'1 enero', distancia:400},
        { titulo: "Bajo el Xielo", imagen: g2, costo:100000, fecha:'11 enero', distancia:400},
        { titulo: "Paihuen", imagen: g3, costo:350000, fecha:'19 enero', distancia:400 },
        { titulo: "Constelacion Glamping", imagen: g1, costo:400000, fecha:'18 enero', distancia:400 },
        { titulo: "Bajo el Xielo", imagen: g2, costo:300000, fecha:'12 enero', distancia:400 },
        { titulo: "Paihuen", imagen: g3, costo:180000, fecha:'14 enero', distancia:400 },
        { titulo: "Terrojo", imagen: g4, costo:180000, fecha:'21 enero', distancia:400 },
        { titulo: "Constelacion Glamping", imagen: g1, costo:120000, fecha:'13 enero', distancia:400 },
        { titulo: "Bajo el Xielo", imagen: g2, costo:200000, fecha:'11 enero', distancia:400 },
        { titulo: "Paihuen", imagen: g3, costo:305000, fecha:'21 enero', distancia:400 }
        
    ];

    const [corazonRojo, setCorazonRojo] = useState(Array(fotosEinfo.length).fill(false));

    const handleCorazonClick = (index:number) => {
        const newCorazonRojo = [...corazonRojo];
        newCorazonRojo[index] = !newCorazonRojo[index];
        setCorazonRojo(newCorazonRojo);
    };

    return (
        <div className='contenedorPrincipalImagenes'>
    
            <div className='contenedorImagenesDetalle'>

                {fotosEinfo.map((elemento, index) => (

                    <div key={index} className="tarjeta-glamping">

                        <div className="glamping-imagen">
                            
                            <img className="glamping-imagen-foto" src={elemento.imagen} alt={elemento.titulo} />
                        
                            {/* Flecha para desplazar a izquierda iconos */}
                            <div className="flecha-izquierda-foto" >
                                <MdOutlineKeyboardArrowLeft />
                            </div>

                            <div
                                className={`icono-corazon ${corazonRojo[index] ? 'rojo' : ''}`}
                                onClick={() => handleCorazonClick(index)}
                            >
                                <FaHeart />
                            </div>

                            {/* Flecha para desplazar a derecha fotos */}
                            <div className="flecha-derecha-foto" >
                                        <MdOutlineKeyboardArrowRight />
                            </div>
                        </div>
                         
                        
                        <div className="glamping-info">
                            <h3>{elemento.titulo}</h3>
                            <p>A {elemento.distancia} km de distancia</p>
                            <p>{elemento.fecha}</p>
                            <div className='precio'>
                                <h4>${elemento.costo}</h4>
                                <p> noche</p>
                            </div>
                            {/* Agrega más información según tus necesidades */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Glampings;
