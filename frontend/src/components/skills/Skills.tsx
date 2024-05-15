import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

const Skills: React.FC = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const { ref: skillsRef, inView: isSkillsInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    setIsSkillsVisible(isSkillsInView);
  }, [isSkillsInView]);

  return (
    <div id="Skills" className="lg:w-2/3 sm:w-auto flex flex-col items-center justify-center" ref={skillsRef}>
      <h2 className="text-center p-[2rem] text-3xl my-2 hover:text-purple-800 transition animate-fade-up animate-once animate-duration-[3500ms]"><strong>Tecnologías que he ocupado</strong></h2>
      {isSkillsVisible && (
      <div className="relative h-60  lg:h-96 w-[90%] lg:w-full bg-slate-400 rounded-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Aquí puedes agregar tus iconos de tecnologías */}
        <i className="text-4xl text-white fab fa-html5">Hola</i>
        <i className="text-4xl text-white fab fa-css3">Mundo</i>
        <i className="text-4xl text-white fab fa-js">y fin</i>
        {/* Agrega más iconos según las tecnologías que desees mostrar */}
      </div>
    </div>
     )}
    </div>
  );
};

export default Skills;