import React, { useEffect, useRef } from 'react';
import ePub, { Rendition } from 'epubjs';

const EpubjsReader: React.FC = () => {
  const epubContainerRef = useRef<HTMLDivElement>(null);
  const renditionRef = useRef<Rendition | null>(null);

  useEffect(() => {
    if (epubContainerRef.current) {
      const book = ePub('frontend\libroAmazon\original.epub');
      const rendition = book.renderTo(epubContainerRef.current, {
        width: '100%',
        height: '100%',
      });

      rendition.display();
      renditionRef.current = rendition;

      return () => {
        // Limpiar el rendimiento cuando el componente se desmonte
        if (renditionRef.current) {
          renditionRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div
      ref={epubContainerRef}
      style={{ width: '100%', height: '100vh', border: '1px solid black' }}
    ></div>
  );
};

export default EpubjsReader;
