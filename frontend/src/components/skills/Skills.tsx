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
      <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 rounded-full p-8 md:p-12 lg:p-16 shadow-lg">
        <div className="bg-white rounded-full p-8 md:p-12 lg:p-16 flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          <h4>hola</h4>
        </div>
      </div>
    </div>
     )}
    </div>
  );
};

export default Skills;