// Footers.tsx
import { useState, useEffect } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import "../estilos/Footers.css";

// Declaración de la propiedad 'data' en el objeto 'Window'
declare global {
  interface Window {
    data?: {
      scrollY: number;
    };
  }
}

const iconosfooter = [
  { titulo: "Explorar", icono: <FiSearch /> },
  { titulo: "Favoritos", icono: <IoIosHeartEmpty /> },
  { titulo: "Mensajes", icono: <FaRegMessage /> },
  { titulo: "Perfil", icono: <AiOutlineUser /> },
];

const Footers = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
  
    // Check if scrolling up or down
    setIsScrollingUp(
      currentScrollY <
        (window.data && typeof window.data.scrollY === 'number'
          ? window.data.scrollY
          : currentScrollY) || currentScrollY === 0
    );
  
    // Save the current scroll position for the next check
    window.data = {
      scrollY: currentScrollY,
    };
  };
  

  useEffect(() => {
    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`contenedor-Footer ${isScrollingUp ? "visible" : "oculto"}`}
    >
      <div className="contenedor-iconoFooter">
        {iconosfooter.map((elemento, index) => (
          <div key={index} className="iconos-footer">
            <span>{elemento.titulo}</span>
            <div className="iconoFooter">{elemento.icono}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footers;
