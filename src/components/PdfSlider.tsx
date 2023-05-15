import { useState } from "react";
import styled from "styled-components/macro";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import SliderNavigation from "./SliderNavigation";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const StyledContainer = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  @media (max-width: 1250px) {
    height: auto;
  }
  .slider {
    height: 600px;
    @media (max-width: 1250px) {
      height: auto;
    }
    @media (max-width: 1150px) {
      padding: 5px;
      canvas {
        width: calc(100vw - 450px) !important;
        height: auto !important;
        @media (max-width: 700px) {
          width: 100% !important;
          height: auto !important;
        }
      }
    }
    .annotationLayer {
      display: none;
    }
    .react-pdf__Page__canvas {
      margin: 0 auto;
    }
  }
`;

interface PdfSliderProps {
  pdfFile: any;
}

const PdfSlider = ({ pdfFile }: PdfSliderProps) => {
  console.log(pdfFile);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = (pdf: PDFDocumentProxy) => {
    setNumPages(pdf?._pdfInfo?.numPages || 0);
  };

  const handleNextClick = () => {
    if (!numPages) return;
    setPageNumber((prev) => {
      if (prev < numPages) {
        return prev + 1;
      } else return prev;
    });
  };

  const handlePrevClick = () => {
    if (!numPages) return;
    setPageNumber((prev) => {
      if (prev >= 2) {
        return prev - 1;
      } else return prev;
    });
  };

  return (
    <StyledContainer>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        className={"slider"}
        onLoadError={(error) => console.log(error)}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          className={"slider"}
          onLoadError={(error) => console.log(error)}
        />
      </Document>
      <SliderNavigation
        activeIndex={pageNumber}
        pageLength={numPages}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </StyledContainer>
  );
};

export default PdfSlider;
