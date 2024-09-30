import React, { useState, useEffect } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { useInView } from "react-intersection-observer";
//import { useNavigate } from "react-router-dom";

//import PdfViewCV from "../pdfViewCV/PdfViewCV";


const About: React.FC = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const { ref: introRef, inView: isIntroInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: aboutMeRef, inView: isAboutMeInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsIntroVisible(isIntroInView);
    setIsAboutMeVisible(isAboutMeInView);
  }, [isIntroInView, isAboutMeInView]);

  //const navigate = useNavigate();
  /*
  const openPdfView = () => {
    const newWindow = window.open("/holamundo", "_blank");
    if (newWindow) {
      // La nueva ventana se ha abierto correctamente
      newWindow.focus();
    } else {
      // No se pudo abrir la nueva ventana
      console.error("No se pudo abrir una nueva ventana.");
    }
  };
*/
  return (
    <div className="text-center pt-10 pb-20 lg:w-full">
      <div className="relative top-10" ref={introRef}>
        <h2 className=" text-2xl">console.log(<strong>"Hello World"</strong>);</h2>
        <h2 className="text-3xl my-2">My name is <strong>Rigoberto</strong></h2>
        {isIntroVisible && (
          <p className="w-3/4 mx-auto animate-bounce animate-thrice animate-duration-550 animate-ease-in">
            I am a web developer, que no sabe demasiado ingles, por lo tanto, te invito a descargar mi CV en castellano.</p>
        )}
        {/*<button className="gap-2 px-[20px] py-[5px] rounded mt-6 bg-[#1484d6] border border-[#0e0e0f] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] " onClick={openPdfView}>Descarga mi CV</button>*/}

        <a
          href="/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2 px-[20px] py-[5px] rounded mt-6 bg-[#1484d6] text-white border border-[#f5dabe] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] inline-block"
        >
          Descarga mi CV
        </a>



        <div>
          <div className="flex gap-10 justify-center mt-5">
            <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
              href="https://github.com/rigobersio" target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-7 h-7 rounded' />
            </a>
            <a className=" hover:text-sky-600 transform hover:scale-150 transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/in/rigoberto-martinez/" target="_blank" rel="noopener noreferrer">
              <ImLinkedin className='w-7 h-7 rounded' />
            </a>
            <a className=" hover:text-green-600 transform hover:scale-150 transition-all duration-150 ease-in-out"
              href="https://wa.link/my2g4o" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='w-7 h-7 rounded' />
            </a>
          </div>
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img className="object-cover object-center rounded-full h-96 w-96" src="https://res.cloudinary.com/dqh2illb5/image/upload/v1714359052/codigo/equipoViejo_yj3ibg.jpg" alt="computadora vieja con teclado" />
          </div>
        </div>
      </div>
      <div id="SobreMi" ref={aboutMeRef}>
        <h2 className="pt-[3rem] text-3xl my-2 hover:text-purple-800 transition"><strong>Sobre mí</strong></h2>
        {isAboutMeVisible && (
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

export default About;