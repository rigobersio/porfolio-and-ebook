import React from "react";
//import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

//Importa el archivo PDF
import CV from "./Rigoberto-CV-develop_C.pdf";

// Estilos
/*
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
*/
//const PDF_FILE_URL: string = "http://localhost:5173/dowloader-cv";
const PDF_FILE_URL: string = CV;

const PdfViewCV: React.FC = () => {
  // Función para generar y descargar el PDF
  const downloaderFileAtURL = (url: string) => {
    const fileName: string = url.split("/").pop();
    //const fileName: string = "Rigoberto-CV-develop_C.pdf";

    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  /*
  const handleDownloadPDF = async () => {
    const blob = await pdf(<Document file={CV} />);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV.pdf";
    link.click();
  };

*/
return (
  <>
    <div className="bg-stone-100 h-screen">
      <div className="flex gap-10 justify-center mt-[0rem] mb-7">
        <button
          onClick={() => downloaderFileAtURL(PDF_FILE_URL)}
          className="gap-2 px-[20px] py-[5px] rounded mt-6 bg-[#1484d6] border border-[#f5dabe] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] "
        >
          Descarga mi CV
        </button>
      </div>
      <div className="relative h-[80vh]">
        <iframe className="absolute top-0 left-0 w-full h-full border-0" src="https://udeconce-my.sharepoint.com/personal/rigomartinez_udec_cl/_layouts/15/embed.aspx?UniqueId=b0fb60f4-bcba-472b-bafe-041bab3acce7" frameborder="0" scrolling="no" allowfullscreen title="Rigoberto-CV-develop_C.pdf"></iframe>
      </div>
      <div className="flex gap-10 justify-center mt-[0rem] mb-7">
        <button
          onClick={() => downloaderFileAtURL(PDF_FILE_URL)}
          className="gap-2 px-[20px] py-[5px] rounded mt-6 bg-[#1484d6] border border-[#f5dabe] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] "
        >
          Descarga mi CV
        </button>
      </div>
    </div>
  </>
);

};

export default PdfViewCV;



//<div>
//         {/* Renderizar el documento PDF */}
//          <Document file={CV}>
//           <Page size="A4" style={styles.page}>
//             {/* Agregar contenido adicional si es necesario */}
//             <Text>CV</Text>
//           </Page>
//         </Document>
//       </div>

