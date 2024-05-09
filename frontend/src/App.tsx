import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Porfolio from './components/porfolio/Porfolio';
import PdfViewCV from './components/pdfViewCV/PdfViewCV';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Porfolio />} />
      <Route path="/cv" element={<PdfViewCV />} />
    </Routes>
  );
};

export default App;