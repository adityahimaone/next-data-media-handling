import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function PreviewPDF({ url }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
      <div style={{ height: "650px" }}>
        <Viewer
          fileUrl={url}
          //   plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
}

export default PreviewPDF;
