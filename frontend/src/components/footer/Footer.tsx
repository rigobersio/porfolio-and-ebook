import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {

  const Year = new Date().getFullYear();

  return (
    <footer className="z-[-999] relative bottom-0 bg-slate-900 text-white">
      <div className="relative top-0 left-0 w-[100%] overflow-hidden">
        <svg data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[600px] fill-orange-50"></path>
        </svg>
        <div className="grid lg:grid-cols-[70%,30%] gap-20 sm:grid-cols-1 p-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-pink-500">Sobre mi Libro</h2>
            <p className="w-3/4 mr-auto text-justify">
              Esta novela presenta la hilarante y absurda historia de la Facultad Prosôdica y sus académicos poco convencionales. Serás transportado a una travesía de problemas administrativos y económicos que enfrenta la facultad y que los académicos intentarán resolver de manera poco ortodoxa.
            </p>
            <div className="lg:w-[18%] mt-2">
              <a href="https://www.amazon.com/dp/B09T4GYLLJ?ref_=cm_sw_r_cp_ud_dp_PJ1NJ0YR2AC0AVY73FZC" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://res.cloudinary.com/dqh2illb5/image/upload/v1716077714/misLibros/portada-miniatura_fxjdk7.png" alt="portada del libro"
                 className="inset-0 w-full h-full cursor-pointer hover:scale-110 transition-transform duration-300"
                />
             </a>
            </div>
            
          </div>



          <div id="Contact" className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-semibold text-pink-500 py-2 uppercase">Contacto</h2>
            <p className="text-[16px] my-4">Email: rigomartinez@udec.cl</p>
            <p className="text-[16px] my-4">WhatsApp: +1(210)6988-222 </p>
            <div className="flex space-x-4 mt-5">
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                href="https://github.com/rigobersio" target="_blank" rel="noopener noreferrer">
                <FaGithub className='w-6 h-6 rounded' />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                href="https://www.linkedin.com/in/rigoberto-martinez/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='w-6 h-6 rounded' />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                href="https://wa.link/ivnase" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='w-6 h-6 rounded' />
              </a>
            </div>
          </div>
        </div>


        <h6 className="text-center">&copy; Rigoberto Antonio Maximiliano Martínez Quintana <br />{Year}</h6>
      </div>
    </footer>
  );
};

export default Footer;