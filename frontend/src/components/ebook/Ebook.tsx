import React, { useState, useEffect } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { useInView } from "react-intersection-observer";
//import { useNavigate } from "react-router-dom";

//import PdfViewCV from "../pdfViewCV/PdfViewCV";


const Ebook: React.FC = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isEbookMeVisible, setIsEbookMeVisible] = useState(false);
  const { ref: introRef, inView: isIntroInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: EbookMeRef, inView: isEbookMeInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsIntroVisible(isIntroInView);
    setIsEbookMeVisible(isEbookMeInView);
  }, [isIntroInView, isEbookMeInView]);

  
  return (
    <div className="text-center pt-10 pb-20 lg:w-full">
      
      <div id="Ebook" ref={EbookMeRef}>
        <h2 className="pt-[3rem] text-3xl my-2 hover:text-purple-800 transition"><strong>Facultad Prosôdica: Departamento de Economía y Menaje</strong></h2>
        {isEbookMeVisible && (
          <div className="flex justify-around flex-col text-justify lg:flex-row">
            <div className="flex items-center justify-center lg:w-1/3">
              <img className="object-cover object-center rounded-full h-60 w-60 animate-pulse animate-once animate-duration-[3500ms]" src="https://res.cloudinary.com/dqh2illb5/image/upload/v1715016763/myPerfil/1710771555673_Git-Hub_unujoi.jpg" alt="Imagen del programador" />
            </div>
            <div className="lg:w-2/3">
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[3000ms]">
                Soy un apasionado del desarrollo web con un trasfondo en ciencias agronómicas que encontró su verdadera pasión en la vanguardia tecnológica. 💻
              </p>
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[3500ms]">
                Como Full Stack Web Developer Junior, me he decantado por tecnologías clave como <strong>JavaScript, TypeScript, React, Redux, Node, Express, PostgreSQL, Mongo y Git</strong>. Estas herramientas me han permitido crear aplicaciones web funcionales y atractivas. Al mismo tiempo, mi experiencia general en TI ocupando diferentes plataformas webs, programas de escritorio y sistemas operativos me ayudan a ampliar las posibilidades a la hora de solucionar problemas. 💼💻
              </p>
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[4000ms]">
                Mi experiencia en el programa de formación en desarrollo web en "Henry" me ha proporcionado una base sólida en la programación y la resolución de problemas, mientras que mi formación en ciencias agronómicas en la Universidad de Concepción me ha dotado de un enfoque analítico y orientado a soluciones. 🔍💡
              </p>
              <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[4500ms]">
                Estoy en busca de nuevas oportunidades para aplicar mis habilidades y seguir creciendo profesionalmente, estoy emocionado por la posibilidad de colaborar en proyectos innovadores o formar parte de un equipo que comparta mi pasión por la tecnología. 🚀
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ebook;