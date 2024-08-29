import React, { useState, useEffect } from "react";
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
              <img className="lg:mt-7 object-cover object-center rounded-r-xl animate-pulse animate-once animate-duration-[3500ms]"
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
              <p className="pt-6 w-3/4 mx-auto text-xs animate-fade animate-once animate-duration-[4500ms]">
                <strong>Información de registro en Safe Creative:</strong> Identificador 2110309671233,
                fecha de registro 30-oct-2021 14:24 UTC,
                <strong> Licencia Creative Commons Attribution-NonCommercial-NoDerivatives 4.0.</strong>
                <br />
                <br />
                Declaraciones inscritas: <strong>Rigoberto Martínez Quintana</strong>, fecha 30-oct-2021.
                <br />
                Información disponible en la página de Safe Creative.
              </p>
              <p className="pt-10 w-3/4 mx-auto animate-fade animate-once animate-duration-[4000ms] font-serif text-lg font-bold text-blue-950">
                Te ofrezco dos opciones: puedes adquirir el ebook en Amazon haciendo clic en el primer botón, o disfrutarlo de forma gratuita en una calidad similar mediante el segundo botón. Este libro es autoeditado, por lo que es posible que contenga algunos errores de redacción u ortográficos. Si notas algún error, te agradecería que me lo comuniques para poder corregirlo en futuras ediciones.
              </p>
              <div className="flex flex-col items-center">
                <a
                  href="https://a.co/d/alnoKcJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] lg:w-[40%] px-[20px] py-[10px] rounded mt-8 text-white bg-[#1484d6] border border-[#f5dabe] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] inline-block text-center"
                >
                  Obtener en Amazon
                </a>

                <a
                  href="/rigobertoebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] lg:w-[40%] px-[20px] py-[10px] rounded mt-8 text-white bg-[#1484d6] border border-[#f5dabe] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] inline-block text-center"
                >
                  Accede gratis
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ebook;
