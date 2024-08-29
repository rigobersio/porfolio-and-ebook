import React from "react";

//Importa el archivo PDF
import CV from "./Rigoberto-CV-developer_SPA.pdf";


const PDF_FILE_URL: string = CV;

const PdfViewCV: React.FC = () => {
  const CloudCVPDF: string = "https://archive.org/embed/rigoberto-cv-developer-spa";
  //const CloudCVPDF: string = "https://udeconce-my.sharepoint.com/personal/rigomartinez_udec_cl/_layouts/15/embed.aspx?UniqueId=faffcf27-b056-40c4-89b5-8cec28114b9c";
  // Función para generar y descargar el PDF
  const downloaderFileAtURL = (url: string) => {
    const fileName: any = url.split("/").pop();
    //const fileName: string = "Rigoberto-CV-developer_SPA.pdf";

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
    <div className="bg-orange-50 h-screen">
      
      <div className="flex justify-center items-center h-[85%] lg:h-[93%]">
        <iframe className="w-full h-full border-0" src={CloudCVPDF} frameBorder="0" scrolling="no" allowFullScreen title="Rigoberto-CV-develop_C.pdf"></iframe>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={() => downloaderFileAtURL(PDF_FILE_URL)}
          className="lg:mt-5 mb-0 mt-2 px-[20px] py-[5px] rounded text-white  bg-[#1484d6] border border-[#f5dabe] transition-all duration-700 hover:bg-transparent hover:text-[#1484d6] "
        >
          Descarga mi CV
        </button>
      </div>
    </div>
  </>
);

};

export default PdfViewCV;