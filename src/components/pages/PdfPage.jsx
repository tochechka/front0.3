import React, {useState} from 'react';
import {Document, Page, pdfjs} from "react-pdf";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfPage = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [dataPdf, setDataPdf] = useState(null);
    const axiosPrivate = useAxiosPrivate();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const report = (e) => {
        e.preventDefault();
        axiosPrivate
            .get(`/reports/omp?from=2023-01-01&to=2023-01-30`, {headers: {"Content-Type": 'arraybuffer'}})
            .then((response) => {
                console.log(response.data);
                setDataPdf(response.data)
            })
            .catch(() => {
            });
    }

    return (
        <div>
            <button className='send-button' onClick={report}>Получить отчет</button>
            <div>
                <Document file={{data: dataPdf}} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        </div>
    );
};

export default PdfPage;