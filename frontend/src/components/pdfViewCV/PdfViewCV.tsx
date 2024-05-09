import React from "react";
import { Document, Page, StyleSheet, pdf } from "@react-pdf/renderer";

// Importa el archivo PDF
import CV from "./Rigoberto-CV-develop_C.pdf";

// Estilos
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

const PdfViewCV: React.FC = () => {
  // Función para generar y descargar el PDF
  const handleDownloadPDF = async () => {
    const blob = await pdf(<Document file={CV} />);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <>
      {/* Botón para descargar el PDF */}
      <button onClick={handleDownloadPDF}>Descargar CV</button>

      {/* Renderizar el documento PDF */}
      <Document file={CV}>
        <Page size="A4" style={styles.page}>
          {/* Agregar contenido adicional si es necesario */}
        </Page>
      </Document>
    </>
  );
};

export default PdfViewCV;
