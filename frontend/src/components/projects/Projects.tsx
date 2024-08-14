import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { CgWebsite } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import "./Projects.css";

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


  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouselImages: string[] = [
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1715556450/drivers_SPA/12-5-2024__tsxipx.jpg",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1715556450/drivers_SPA/12-5-2024_2_ohny2a.jpg",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1715556450/drivers_SPA/12-5-2024_5_qfolkd.jpg",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1715556450/drivers_SPA/12-5-2024_3_v49fgd.jpg",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1715556450/drivers_SPA/12-5-2024_4_cwysrk.jpg",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1715556450/drivers_SPA/12-5-2024_6_bzqfou.jpg"
  ];

  return (
    <div id="Proyectos" className=" flex flex-col items-center justify-center" ref={projectsRef}>
      <h2 className="text-center p-[2rem] text-3xl my-2 hover:text-purple-800 transition animate-fade-up animate-once animate-duration-[3500ms]"><strong>Mis Proyectos</strong></h2>
      {isProjectsVisible && (
        <div className="text-justify">
          <div className="mb-5 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
            <h3 className="w-3/4 mx-auto text-left text-amber-950  text-2xl my-2 hover:text-neutral-900 transition"><strong>Rentify</strong></h3>

            <div className="flex gap-10 justify-center mt-5">
              <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
                href="https://github.com/jlcarrascof/PF-Henry-Project" target="_blank" rel="noopener noreferrer">
                <FaGithub className='w-5 h-5 rounded' />
              </a>
            </div>
            <p className="p-4 w-3/4 mx-auto animate-fade-right animate-once animate-duration-[4000ms]">El proyecto se desarrolló en equipo utilizando una metodología de trabajo scrum para desarrollar una aplicación
              web para alquiler de habitaciones de hoteles. Trabajamos de forma asíncrona en un contexto remoto e
              internacional, colaborando en el manejo de tareas y gitflow para evitar conflictos en el código.</p>

            <div className="p-2 w-3/4 mx-auto animate-flip-up animate-once animate-duration-[5500ms]">
              <div className="aspect-w-16 aspect-h-19">
                <iframe className="rounded-lg" 
                src="https://www.youtube.com/embed/s6R8OEWOsV4?si=zD5xsDkKZrQxqe9E" 
                title="Rentify" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
                </iframe>
              </div>
            </div>

            <div className="p-4 w-3/4 mx-auto">
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">React</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">TypeScript</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Redux</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Material UI</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Mercado Pago</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Cloudinary</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Firebase</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Node.js</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Express</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">MongoDB</li>
              </ul>
            </div>

          </div>
          {/*</>*/}
          <div className="text-justify">
            <div className="mb-5 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
              <h3 className="w-3/4 mx-auto text-left text-amber-950  text-2xl my-2 hover:text-neutral-900 transition"><strong>SPA-Task</strong></h3>

              <div className="flex gap-10 justify-center mt-5">
                <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
                  href="https://github.com/rigobersio/spa_tasks" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='w-5 h-5 rounded' />
                </a>
              </div>
              <p className="p-4 w-3/4  mx-auto animate-fade-right animate-once animate-duration-[4000ms]">
              SPA-Tasks es una aplicación web genial con una interfaz super sencilla y ¡asistida por adorables perritos! 🐶✨ Con ella, puedes crear, visualizar, editar y eliminar tareas, manteniéndolas organizadas en un solo lugar 📝. Este proyecto ha sido desarrollado por dos apasionados programadores, con el objetivo de ofrecer una experiencia entretenida y muy fácil de usar para amigos y familiares de todas las edades 🧑‍💻👩‍💻. ¡Con SPA-Tasks, ¡las tareas se vuelven mucho más divertidas! 🎉🐾📋
              </p>
            
              <div className="p-2 w-3/4 mx-auto animate-flip-up animate-once animate-duration-[5000ms]">
              <div className="aspect-w-16 aspect-h-19">
                <img src="https://res.cloudinary.com/dqh2illb5/image/upload/v1723669540/SPA-Tasks/spa-tasks_htpu6s.png" alt="imagen de la App SPA-Tasks" className="w-full rounded-lg" />
              </div>
              <li className="my-4 list-none flex items-center gap-3">
              <CgWebsite className="mr-1" />
              <a href="https://spa-tasks.onrender.com/" className="ml-1 text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">Ir a SPA-Tasks</a>
            </li>
            </div>
              
              <div className="p-4 w-3/4 mx-auto mt-2">
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">React</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Node.js</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Express</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">jsonwebtoken</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Zod</li>
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">MongoDB</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;
