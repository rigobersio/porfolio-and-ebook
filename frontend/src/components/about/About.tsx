import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const About: React.FC = () => {

    return (
      <div className="relative top-10 text-center pt-10 lg:w-[100%] bg-orange-50">
       <div className="relative top-20">
       <h2 className=" text-2xl">console.log(<strong>"Hello World"</strong>);</h2>
        <h2 className="text-3xl my-2">My name is <strong>Rigoberto</strong></h2>
        <p className="w-3/4 mx-auto">I am a web developer, que no sabe demasiado ingles, por lo tanto, te invito a descargar mi CV en castellano.</p>
        <button className="gap-2 px-[20px] py-[5px] rounded mt-6 bg-[#1484d6] border border-[#cccfec] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6]">Descarga mi CV</button>
        <div>
          <div className="flex gap-10 justify-center mt-5">
            <a href="https://github.com/rigobersio" target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-7 h-7 rounded'/>
            </a>
            <a href="https://www.linkedin.com/in/rigoberto-martinez/" target="_blank" rel="noopener noreferrer">
              <ImLinkedin className='w-7 h-7 rounded' />
            </a>
          </div>
            <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
              <img className="object-cover object-center rounded-full h-96 w-96" src="https://res.cloudinary.com/dqh2illb5/image/upload/v1714359052/codigo/equipoViejo_yj3ibg.jpg" alt="computadora vieja con teclado" />
            </div>
        </div>
       </div>
      </div>
    );
}

export default About;