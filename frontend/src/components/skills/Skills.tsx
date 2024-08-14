import React, { useState, useEffect } from "react";


import { useInView } from "react-intersection-observer";

import IconJS from "../icons/LogosJavascript";
import IconTS from "../icons/DeviconTypescript";
import IconReact from "../icons/SkillIconsReactDark";
import IconRedux from "../icons/TablerBrandRedux";
import IconNode from "../icons/DeviconNodejsWordmark";
import IconExpress from "../icons/SkillIconsExpressjsDark";
import IconPostgre from "../icons/DeviconPostgresql";
import IconGit from "../icons/VscodeIconsFileTypeGit";
import IconGitHub from "../icons/AkarIconsGithubFill";
import IconWindows from "../icons/DeviconWindows11";
import IconLinux from "../icons/LogosLinuxTux";
import IconMongoDB from "../icons/mongodbIcon.svg"
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
      <h2 className="text-center pt-[2rem] text-3xl  hover:text-purple-800 transition animate-fade-up animate-once animate-duration-[3500ms]">
        <strong>Estas son algunas de las tecnologías que he ocupado</strong>
      </h2>
      {isSkillsVisible && (
      <div className="flex justify-center items-center m-12 animate-wiggle animate-infinite animate-duration-[23000ms]">
      <div className="bg-gray-200 rounded-full p-4 lg:p-3 shadow-lg">
        <div className="bg-white rounded-full p-4 lg:p-3 flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">

          <IconJS />
          <IconTS />
          <IconReact />
          <IconRedux />
          <IconNode />
          <IconExpress />
          <IconPostgre />
          <img src={IconMongoDB} alt="MongoDB logo" className="w-11 h-11"/>
          <IconGit />
          <IconGitHub />
          <IconWindows />
          <IconLinux />


        </div>
      </div>
    </div>
     )}
    </div>
  );
};

export default Skills;