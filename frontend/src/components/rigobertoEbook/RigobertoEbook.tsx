import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

const RigobertoEbook: React.FC = () => {
  const [location, setLocation] = useState<string | number>(0)
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        title='Facultad Prosôdica: Departamento de Economía y Menaje'
        //url="https://react-reader.metabits.no/files/alice.epub"
        //url="./001.epub"
        //url="./002.epub"
        //url="./003.epub"
        //url="./rigoberto.epub"
        //url="./004.epub"
        //url="./005.epub"
        //url="./006.epub"
        //url="./007.epub"
        //url="./eBookRigoberto.epub"

        //original amazon
        //url="./original.epub"
        url="frontend\libroAmazon\original.epub"


        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
      />
    </div>
  )
};

export default RigobertoEbook;