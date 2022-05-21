import React from 'react';
import {TableExport} from 'tableexport'
import {Button} from 'react-bootstrap'
import '../styles/Component.css'

const Export = (props) => {
    const exportFile = () => {
        let fileName = props.fileName
        let tableRef = props.tableRef.current
        const fileToExport = TableExport(tableRef, {
            headers: true,
            footers: false,
            formats: ["xlsx"],
            filename: {fileName},
            exportButtons: false,
            trimWhitespace: false,
            bootstrap: true,
        })
        let exportDataXLSX = fileToExport.getExportData();
        exportDataXLSX = exportDataXLSX[Object.keys(exportDataXLSX)[0]]['xlsx']  
        fileToExport.export2file(exportDataXLSX.data, exportDataXLSX.mimeType, fileName, exportDataXLSX.fileExtension);
    }

    return (
        <div className="exportButton">
            <Button onClick={exportFile}>Экспорт</Button>
        </div>
    );
};

export default Export;