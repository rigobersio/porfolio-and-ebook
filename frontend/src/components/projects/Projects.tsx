import React, { useState, useEffect } from "react";
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
      <h2 className="text-center p-[3rem] text-3xl my-2 hover:text-purple-800 transition animate-fade-up animate-once animate-duration-[3500ms]"><strong>Mis Proyectos</strong></h2>
      <div className="border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
      {isProjectsVisible && (
          <p className="mb-4mx-auto animate-fade-right animate-once animate-duration-[4000ms]">El proyecto se desarrolló en equipo utilizando una metodología de trabajo scrum para desarrollar una aplicación
          web para alquiler de habitaciones de hoteles. Trabajamos de forma asíncrona en un contexto remoto e
          internacional, colaborando en el manejo de tareas y gitflow para evitar conflictos en el código. Me asignaron
          responsabilidades tanto en el desarrollo del backend como en la creación de componentes frontend.</p>
        )}
      </div>
    </div>

  );
};

export default Projects;