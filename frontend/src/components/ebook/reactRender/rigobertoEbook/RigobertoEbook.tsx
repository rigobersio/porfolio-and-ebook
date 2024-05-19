import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

const RigobertoEbook: React.FC = () => {
  const [location, setLocation] = useState<string | number>(0)
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url=".\Facultad-Prosôdica-Rigoberto.epub"
        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
      />
    </div>
  )
};

export default RigobertoEbook