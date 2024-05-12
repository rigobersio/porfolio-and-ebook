import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {

  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const { ref: projectsRef, inView: isProjectsInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    setIsProjectsVisible(isProjectsInView);
  }, [isProjectsInView]);

  return (
    <div id="Proyectos" className="w-[100vh] flex flex-col items-center justify-center" ref={projectsRef}>
      <h2 className="text-center p-[2rem] text-3xl my-2 hover:text-purple-800 transition animate-fade-up animate-once animate-duration-[3500ms]"><strong>Mis Proyectos</strong></h2>
      {isProjectsVisible && (
        <div className="text-justify">
          <div className="mb-5 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
          <h3 className="text-left text-amber-950  text-2xl my-2 hover:text-neutral-900 transition"><strong>Rentify</strong></h3>
          
            <div className="flex gap-10 justify-center mt-5">
            <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
              href="https://github.com/jlcarrascof/PF-Henry-Project" target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-5 h-5 rounded' />
            </a>
            </div>
            <p className="p-4 mx-auto animate-fade-right animate-once animate-duration-[4000ms]">El proyecto se desarrolló en equipo utilizando una metodología de trabajo scrum para desarrollar una aplicación
              web para alquiler de habitaciones de hoteles. Trabajamos de forma asíncrona en un contexto remoto e
              internacional, colaborando en el manejo de tareas y gitflow para evitar conflictos en el código.</p>
            
              <iframe width="560" height="315" src="https://www.youtube.com/embed/s6R8OEWOsV4?si=zD5xsDkKZrQxqe9E" title="Rentify" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

             
          </div>

          <div className="pb-2 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
            <p className="p-4 mx-auto animate-fade-left animate-once animate-duration-[5000ms]">Drivers es una App Web desarrollada de forma individual utilizando una metodología scrum. Esta es una single
              page application (SPA) de corredores de Fórmula Uno para visualizar información detallada de estos corredores
              en formato de cartas individuales. La aplicación ofrece una interfaz intuitiva con filtros, barra de búsqueda y
              formularios seguros para la publicación de nuevos corredores</p>
          </div>
        </div>
      )}

    </div>

  );
};

export default Projects;