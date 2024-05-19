import React, { useState, useEffect } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { useInView } from "react-intersection-observer";
//import { useNavigate } from "react-router-dom";

//import PdfViewCV from "../pdfViewCV/PdfViewCV";


const Ebook: React.FC = () => {
  const [isEbookMeVisible, setIsEbookMeVisible] = useState(false);

  const { ref: EbookMeRef, inView: isEbookMeInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsEbookMeVisible(isEbookMeInView);
  }, [isEbookMeInView]);

  
  return (
    <div className="text-center pt-10 pb-20 lg:w-full">
      
      <div id="Ebook" ref={EbookMeRef}>
        <h2 className="pt-[3rem] text-3xl my-2 hover:text-purple-800 transition"><strong>Facultad Prosôdica: Departamento de Economía y Menaje</strong></h2>
        {isEbookMeVisible && (
          <div className="p-5 mr-10 flex justify-around flex-col text-justify lg:flex-row">
            <div className="flex items-center justify-center lg:w-1/3 pl-8">
              <img className="object-cover object-center rounded-r-xl animate-pulse animate-once animate-duration-[3500ms]" 
              src="https://res.cloudinary.com/dqh2illb5/image/upload/v1716087229/misLibros/portadaJPGOriginal.jpg" alt="Imagen de la portada del libro" />
            </div>
          
            <div className="lg:w-2/3">
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[3000ms]">
              <strong>¡Descubre la singular y divertida Facultad Prosôdica en esta hilarante novela epistolar!</strong>
              </p>
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[3500ms]">
                Soy el autor de esta novela y como tal es mi deseo que puedas leerla de forma gratuita si así lo deseas. 😊 Esta es una novela epistolar que presenta la hilarante y absurda historia de la Facultad Prosôdica y sus académicos poco convencionales. A través de esta historia imaginaria, los personajes atraviesan una travesía con los problemas administrativos y económicos que enfrenta la facultad. La historia está narrada con un enfoque humorístico que recuerda al estilo del reconocido grupo Les Luthiers. 📚
              </p>
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[4000ms]">
                Si eres fanático de las historias humorísticas y absurdas, especialmente aquellas que se desarrollan en un entorno académico lleno de personajes excéntricos y situaciones disparatadas, esta novela es definitivamente para ti. Desde problemas administrativos hilarantes 📋 hasta enredos económicos absurdos 💸, pasando por situaciones cotidianas que se convierten en auténticas locuras debido a la naturaleza de los personajes 🤪, esta historia te mantendrá riendo página tras página. 😄 ¡Prepárate para un viaje entretenido y absurdo, entre otros experimentos científicos inesperados! 🧪🔬📚
              </p>
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[4500ms]">
                <strong>Información de registro en Safe Creative:</strong> Identificador 2110309671233, 
                fecha de registro 30-oct-2021 14:24 UTC, 
                <strong> Licencia Creative Commons Attribution-NonCommercial-NoDerivatives 4.0.</strong>
              <br />  
              <br />
                Declaraciones inscritas: <strong>Rigoberto Martínez Quintana</strong>, fecha 30-oct-2021.
                <br />
                Información disponible en la página de Safe Creative.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ebook;