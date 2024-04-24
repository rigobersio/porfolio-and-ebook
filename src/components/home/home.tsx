import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
        <div className='saludo1'>
            <h3 className="home-title"><span className="text-color-especialito">console.log("¡Hola Mundo!");</span><br /> Bienvenido a mi sitio web</h3>
            <p className="home-text">“¡Saludos Terrícola! Mi nombre es <strong>Rigoberto Martínez</strong> y soy un entusiasta Desarrollador Web Full Stack que está emergiendo en el mundo de la tecnología. Me fascina el desafío de superar a las máquinas en la batalla de transformar los ceros y unos en soluciones innovadoras. Mi objetivo es utilizar la tecnología para crear experiencias que aporten alegría o soluciones a la vida de las personas. Te invito a descubrir algunos de mis proyectos y a leer mi Ebook para escapar un poco de la rutina.”</p>
        </div>
      
    </div>
  );
};

export default Home;