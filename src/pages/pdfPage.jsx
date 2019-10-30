import React from 'react';

const PdfPage = () => (
  <div style={{
    width: '100vw', height: 'calc(100vh - 70px)', position: 'relative', marginTop: '70px', zIndex: '1',
  }}
  >
    Madz ----- PDF Page
    <iframe
      style={{ width: '100%', height: '100%' }}
      title="PDF View"
      src="pdfPlayer/mobile-viewer/viewer.html?pdfUrl=/pdfPlayer/compressed.tracemonkey-pldi-09.pdf"
    />

    {/* <iframe style={{width: '100%',height: '100%'}} title="PDF View" src='pdfPlayer/compressed.tracemonkey-pldi-09.pdf'/> */}

  </div>
);

export default PdfPage;
