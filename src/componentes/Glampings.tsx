import '../estilos/Glampings.css';
import g1 from '../imagenes/g1.jpg';
import g2 from '../imagenes/g2.jpg';
import g3 from '../imagenes/g3.jpg';
import g4 from '../imagenes/g4.jpg';

const Glampings = () => {
    const fotosEinfo = [
        { titulo: "Terrojo", imagen: g4, costo:310000, fecha:'1 enero' },
        { titulo: "Bajo el Xielo", imagen: g2, costo:100000, fecha:'11 enero' },
        { titulo: "Paihuen", imagen: g3, costo:350000, fecha:'19 enero' },
        { titulo: "Constelacion Glamping", imagen: g1, costo:400000, fecha:'18 enero' },
        { titulo: "Bajo el Xielo", imagen: g2, costo:300000, fecha:'12 enero' },
        { titulo: "Paihuen", imagen: g3, costo:180000, fecha:'14 enero' },
        { titulo: "Terrojo", imagen: g4, costo:180000, fecha:'21 enero' },
        { titulo: "Constelacion Glamping", imagen: g1, costo:120000, fecha:'13 enero' },
        { titulo: "Bajo el Xielo", imagen: g2, costo:200000, fecha:'11 enero' },
        { titulo: "Paihuen", imagen: g3, costo:305000, fecha:'21 enero' }
        
    ];

    return (
        <div className='contenedorPrincipalImagenes'>
            <div className='contenedorImagenesDetalle'>
                {fotosEinfo.map((elemento, index) => (
                    <div key={index} className="tarjeta-glamping">
                        <img className="glamping-imagen" src={elemento.imagen} alt={elemento.titulo} />
                        <div className="glamping-info">
                            <h3>{elemento.titulo}</h3>
                            <p>${elemento.costo}</p>
                            <p>{elemento.fecha}</p>
                            {/* Agrega más información según tus necesidades */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Glampings;
