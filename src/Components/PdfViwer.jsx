import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PdfViwer = ({ pdfUrl }) => {
  return (
    <div>PdfViwer
              <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default PdfViwer
