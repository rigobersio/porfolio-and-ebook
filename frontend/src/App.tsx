import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Porfolio from './components/porfolio/Porfolio';
import PdfViewCV from './components/pdfViewCV/PdfViewCV';
import RigobertoEbook from './components/ebook/reactRender/rigobertoEbook/RigobertoEbook';
import HolaMundo from './components/holaMundo/HolaMundo';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Porfolio />} />
      <Route path="/cv" element={<PdfViewCV />} />
      <Route path="/holamundo" element={<HolaMundo />} />
      <Route path="/rigobertoebook" element={<RigobertoEbook />} />
    </Routes>
  );
};

export default App;