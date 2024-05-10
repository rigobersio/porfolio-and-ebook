import React from 'react';
import PDFFile from './Rigoberto-CV-develop_SPA.pdf';

const PdfBlanco: React.FC = () => {
    

  return (
    <div>
      <embed src={PDFFile} type="application/pdf" width="100%" height="800px" />
    </div>
  );
  };
  
  export default PdfBlanco;
  

