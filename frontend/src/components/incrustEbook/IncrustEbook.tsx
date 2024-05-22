import React, { useState, useEffect } from "react";

const IncrustEbook: React.FC = () => {
  const [currentElement, setCurrentElement] = useState<React.ReactNode>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const elements = [
    {
      component: <img className="w-[60%] sm:h-auto" src="https://res.cloudinary.com/dqh2illb5/image/upload/v1716087229/misLibros/portadaJPGOriginal.jpg" alt="Imagen de la portada del libro" />,
      duration: 3000 // 5 s
    },
    {
      component: (
        <div className="lg:w-2/3 text-justify pb-6 border-t-2 border-b-2 border-[#1484d6] ">
          <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[3000ms]">
            La versión gratuita del libro tiene algunas limitaciones en comparación con la versión Kindle de Amazon. La principal es que los hipervínculos no funcionarán. Es decir, si selecciona un capítulo en el índice, no será redirigido al capítulo correspondiente. Lo mismo ocurre con las notas aclaratorias.
          </p>
          <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[3500ms]">
            📚 Tres recomendaciones esenciales para mejorar tu experiencia de lectura:
          </p>
          <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[4000ms]">
            1. ✏️ Anota el número de página en el que te encuentras. Aunque el sistema puede recordar tu última posición en el libro, esto puede variar según el navegador u otros factores. Una nota en un archivo de texto o en papel es una solución confiable.

            <br />
            <br />

            2. 💌 Comunícate con el autor si tienes algún problema. El autor puede proporcionarte varias soluciones e incluso regalarte una copia de la versión Kindle de Amazon para mejorar tu experiencia.

            <br />
            <br />

            3. 📖 No ignores las notas aclaratorias. Estas notas se encuentran al final del libro y no son demasiadas. Para regresar al punto donde te encontrabas, utiliza la barra de desplazamiento que está en la parte inferior. Aquí es útil seguir la recomendación del punto 1.
          </p>
          <p className="pt-6 w-3/4 mx-auto animate-fade animate-once animate-duration-[4500ms]">
            🚀 Presiona el botón "Continuar" para ir al libro.
          </p>
          <div className="flex justify-center">
            <button className="gap-2 px-[20px] py-[5px] rounded mt-6 bg-[#1484d6] border border-[#0e0e0f] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] " 
              onClick={()=>setCurrentIndex(2)}>
              Continuar
            </button>
          </div>
          
        </div>
      ),
      duration: 168000 // 2.8 min
    },
    {
      component: (
        <iframe
          src="https://archive.org/embed/eBookRigoberto"
          className="w-screen h-screen"
          frameBorder="0"
          allow="fullscreen; webkitallowfullscreen; mozallowfullscreen"
        ></iframe>
      ),
      duration: null // permanente
    },
  ];

  // Leer el índice guardado en localStorage al cargar el componente
  useEffect(() => {
    const savedIndex = localStorage.getItem('currentIndex');
    if (savedIndex) {
      const index = parseInt(savedIndex, 10);
      if (index >= elements.length - 1) {
        setCurrentElement(elements[elements.length - 1].component);
        setCurrentIndex(elements.length - 1);
      } else {
        setCurrentIndex(index);
        setCurrentElement(elements[index].component);
      }
    } else {
      setCurrentElement(elements[0].component);
    }
  }, []);

  useEffect(() => {
    if (currentIndex < elements.length - 1) {
      setCurrentElement(elements[currentIndex].component);

      const duration = elements[currentIndex].duration;
      if (duration !== null) {
        console.log('Current Index Before Update:', currentIndex);
        const timer = setTimeout(() => {
          const newIndex = currentIndex + 1;
          console.log('Setting New Index:', newIndex);
          setCurrentIndex((prevIndex) => prevIndex + 1); // Utilizamos la función de actualización del estado para asegurarnos de que el estado anterior se utilice correctamente
          localStorage.setItem('currentIndex', newIndex.toString());
        }, duration);

        return () => clearTimeout(timer);
      }
    } else if (currentIndex === elements.length - 1) {
      setCurrentElement(elements[currentIndex].component);
      localStorage.setItem('currentIndex', currentIndex.toString());
    }
  }, [currentIndex]); // Solo dependemos de currentIndex


  return (
    <div className="flex justify-center items-center w-full h-full min-h-screen bg-orange-50">
      {currentElement}
    </div>
  );
};

export default IncrustEbook;
