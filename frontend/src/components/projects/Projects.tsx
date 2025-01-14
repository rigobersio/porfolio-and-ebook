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

  const carouselImagesFaith: string[] = [
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624728/porfolio/proyecto_Faith/ahem4rdlmesinjatlhv9.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624728/porfolio/proyecto_Faith/ytvf7l75zwdxhvc8opx4.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624728/porfolio/proyecto_Faith/wcn76hqazhw5iiiwkufa.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624728/porfolio/proyecto_Faith/qhmn4pcigkvlgnpavam8.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624729/porfolio/proyecto_Faith/rpluphowacraoxd30uqf.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624728/porfolio/proyecto_Faith/aeeqxdedi6n1o36bvydo.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624729/porfolio/proyecto_Faith/gdckmwkisiuakruamdpx.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624729/porfolio/proyecto_Faith/boir4zkf338heh8opbqy.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624729/porfolio/proyecto_Faith/azwvrqr0uderec8sskzs.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624727/porfolio/proyecto_Faith/mdovlnvw1uip8x4z3bg1.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736624727/porfolio/proyecto_Faith/hglevnzfgplmwcyezqxj.png"
  ];

  const carouselImagesVictory: string[] = [
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949088/porfolio/proyect-victory/victory1_xstfh1.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949088/porfolio/proyect-victory/victory2_pskjvy.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949088/porfolio/proyect-victory/victory3_bmvni4.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949088/porfolio/proyect-victory/victory4_kb34lc.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949088/porfolio/proyect-victory/victory5_rsggwp.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949089/porfolio/proyect-victory/victory6_b0pper.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949088/porfolio/proyect-victory/victory7_vbzohx.png",
    "https://res.cloudinary.com/dqh2illb5/image/upload/v1736949089/porfolio/proyect-victory/victory8_lqcodi.png"
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
            <p className="p-4 w-3/4 mx-auto animate-fade-right animate-once animate-duration-[1500ms]">El proyecto se desarrolló en equipo utilizando una metodología de trabajo scrum para desarrollar una aplicación
              web para alquiler de habitaciones de hoteles. Trabajamos de forma asíncrona en un contexto remoto e
              internacional, colaborando en el manejo de tareas y gitflow para evitar conflictos en el código.</p>

            <div className="p-2 w-3/4 mx-auto animate-flip-up animate-once animate-duration-[2000ms]">
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
          {/*drivers*/}
          <div className="text-justify">
            <div className="mb-5 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
              <h3 className="w-3/4 mx-auto text-left text-amber-950  text-2xl my-2 hover:text-neutral-900 transition"><strong>Drivers</strong></h3>

              <div className="flex gap-10 justify-center mt-5">
                <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
                  href="https://github.com/rigobersio/pi-drivers-main" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='w-5 h-5 rounded' />
                </a>
              </div>
              <p className="p-4 w-3/4  mx-auto animate-fade-right animate-once animate-duration-[2000ms]">Drivers es una App Web desarrollada de forma individual utilizando una metodología scrum. Esta es una single
                page application (SPA) de corredores de Fórmula Uno para visualizar información detallada de estos corredores
                en formato de cartas individuales. La aplicación ofrece una interfaz intuitiva con filtros, barra de búsqueda y
                formularios seguros para la publicación de nuevos corredores.
              </p>
              <div className="p-2 w-3/4 m-auto">
                <div className="p-2 w-80 h-80 sm:w-96 sm:h-60 relative rounded-2xl overflow-hidden animate-fade animate-once animate-duration-[2500ms]">
                  <Slider className="" {...carouselSettings}>
                    {carouselImages.map((image, index) => (
                      <div key={index}>
                        <img className="w-full h-full object-cover rounded-2xl" src={image} alt={`Carrusel de imágenes. Imagen ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="p-4 w-3/4 mx-auto mt-2">
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">React</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Redux</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Node.js</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Express</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Sequelize</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
          {/*Los Perritos*/}
          <div className="text-justify">
            <div className="mb-5 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
              <h3 className="w-3/4 mx-auto text-left text-amber-950  text-2xl my-2 hover:text-neutral-900 transition"><strong>SPA-Task</strong></h3>

              <div className="flex gap-10 justify-center mt-5">
                <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
                  href="https://github.com/rigobersio/spa_tasks" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='w-5 h-5 rounded' />
                </a>
              </div>
              <p className="p-4 w-3/4  mx-auto animate-fade-right animate-once animate-duration-[3000ms]">
                SPA-Tasks es una aplicación web genial con una interfaz super sencilla y ¡asistida por adorables perritos! 🐶✨ Con ella, puedes crear, visualizar, editar y eliminar tareas, manteniéndolas organizadas en un solo lugar 📝. Este proyecto ha sido desarrollado por dos apasionados programadores, con el objetivo de ofrecer una experiencia entretenida y muy fácil de usar para amigos y familiares de todas las edades 🧑‍💻👩‍💻. ¡Con SPA-Tasks, ¡las tareas se vuelven mucho más divertidas! 🎉🐾📋
              </p>

              <div className="p-2 w-3/4 mx-auto">
                <div className="w-[30%] animate-wiggle animate-once animate-ease-in-out animate-duration-[3500ms]">
                  <img src="https://res.cloudinary.com/dqh2illb5/image/upload/v1723669540/SPA-Tasks/spa-tasks_htpu6s.png" alt="imagen de la App SPA-Tasks" className="w-full rounded-lg" />
                </div>
                <li className="my-4 mt-4 list-none flex items-center gap-4">
                  <CgWebsite className="mr-1" />
                  <a href="https://spa-tasks.onrender.com/" className="ml-2 hover:text-purple-800 transform hover:scale-150
                             transition-all duration-150 ease-in-out" target="_blank" rel="noopener noreferrer"><strong>Ir a SPA-Tasks</strong></a>
                </li>
              </div>

              <div className="p-4 w-3/4 mx-auto mt-2">
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    React
                  </li>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    JavaScript
                  </li>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    Tailwind CSS
                  </li>
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                      Node.js
                  </li>
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                      Express
                    </li>
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                      jsonwebtoken
                    </li>
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                      Zod
                  </li>
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                      MongoDB
                    </li>
                </ul>
              </div>
            </div>
          </div>
          {/*cabahna 4000 4500*/}
          
          {/*Faith*/}
          <div className="text-justify">
            <div className="mb-5 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
              <h3 className="w-3/4 mx-auto text-left text-amber-950  text-2xl my-2 hover:text-neutral-900 transition"><strong>Startup Faith</strong></h3>

              <div className="flex gap-10 justify-center mt-5">
                <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
                  href="https://github.com/rigobersio/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='w-5 h-5 rounded' />
                </a>
              </div>
              <p className="p-4 w-3/4  mx-auto animate-fade-right animate-once animate-duration-[5000ms]">
                Como desarrollador de la startup <strong>Faith</strong>, fui responsable de construir el sitio web de la empresa. Este sitio web destaca los servicios que ofrece <strong>Faith</strong>, incluyendo soluciones de desarrollo web, inteligencia artificial y estrategias digitales. La página cuenta con funcionalidades como un blog gestionado por Decap CMS, un sistema de navegación dinámico y adaptable, y una interfaz intuitiva con secciones informativas y de contacto. Implementé un sistema de enrutamiento para mensajes utilizando protocolos FMTP (de Google y Cloudflare) para la gestión de correos electrónicos. El diseño del sitio web se priorizó para ser elegante, empresarial y responsivo. El proyecto se llevó a cabo de manera remota, asegurando una integración continua y un manejo eficiente del flujo de trabajo con git.
              </p>
              <div className="p-2 w-3/4 m-auto">
                <div className="py-2 w-80 h-80 sm:w-96 sm:h-60 relative rounded-2xl overflow-hidden animate-fade animate-once animate-duration-[5500ms]">
                  <Slider className="" {...carouselSettings}>
                    {carouselImagesFaith.map((image, index) => (
                      <div key={index}>
                        <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={image}
                        alt={`Carrusel de imágenes. Imagen ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <li className="my-4 mt-4 list-none flex items-center gap-4">
                  <CgWebsite className="mr-1" />
                  <a href="https://faith-startup.com/" className="ml-2 hover:text-purple-800 transform hover:scale-150
                             transition-all duration-150 ease-in-out" target="_blank" rel="noopener noreferrer"><strong>Ir a Faith</strong></a>
                </li>
              </div>

              <div className="p-4 w-3/4 mx-auto mt-2">
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Eleventy</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">JavaScript</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">Nunjucks</li>
                  <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">SASS</li>
                </ul>
              </div>
            </div>
          </div>
          {/*Victory*/}
          <div className="text-justify">
            <div className="mb-5 border-gradient-to-r border-2 from-purple-500 via-pink-500 to-red-500 rounded-md p-3 outline-none">
              <h3
                className="w-3/4 mx-auto text-left text-amber-950  text-2xl my-2 hover:text-neutral-900 transition"
                >
                  <strong>Victory Hair</strong>
              </h3>
              <div className="flex gap-10 justify-center mt-5">
                <a className=" hover:text-blue-950 transform hover:scale-150 transition-all duration-150 ease-in-out"
                  href="https://github.com/rigobersio/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='w-5 h-5 rounded' />
                </a>
              </div>
              <p className="p-4 w-3/4  mx-auto animate-fade-right animate-once animate-duration-[6000ms]">
                Este proyecto, encomendado por la startup <strong>Faith</strong> para la empresa <strong>Victory Hair</strong>, es una iniciativa de largo plazo que se encuentra en continuo desarrollo. Actualmente, consiste en una página web estática construida en React, diseñada para escalar hacia una SPA e integrarse con un servidor basado en Django.
                En el marco de este proyecto, <strong>Faith</strong> me asignó el rol de <strong>Team Leader</strong>, con la responsabilidad de entrenar y evaluar a desarrolladores principiantes. Todo el trabajo se ha realizado de manera remota, aplicando metodologías ágiles y priorizando siempre un producto mínimo viable que responda a las necesidades y recursos de <strong>Victory Hair</strong>.
                El diseño, aunque sencillo, ha sido cuidadosamente adaptado para alinearse con los gustos de <strong>Victory Hair</strong> y de sus clientes, garantizando una experiencia completamente responsiva en todos los tamaños de pantalla. Además, soy responsable del despliegue y mantenimiento del sitio web, asegurando su funcionalidad y rendimiento continuo.
              </p>
              <div className="p-2 w-3/4 m-auto">
                <div className="py-2 w-80 h-80 sm:w-96 sm:h-60 relative rounded-2xl overflow-hidden animate-fade animate-once animate-duration-[6500ms]">
                  <Slider className="" {...carouselSettings}>
                    {carouselImagesVictory.map((image, index) => (
                      <div key={index}>
                        <img className="w-full h-full object-cover rounded-2xl"
                        src={image}
                        alt={`Carrusel de imágenes. Imagen ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <li className="my-4 mt-4 list-none flex items-center gap-4">
                  <CgWebsite className="mr-1" />
                  <a href="https://victoryhairbr.com.br"
                    className="ml-2 hover:text-purple-800 transform hover:scale-150 transition-all duration-150 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer">
                      <strong>Ir a Victory Hair</strong></a>
                </li>
              </div>

              <div className="p-4 w-3/4 mx-auto mt-2">
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    React
                  </li>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    JavaScript
                  </li>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    Tailwind CSS
                  </li>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    zustand
                  </li>
                  <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  >
                    SMTP
                  </li>
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
