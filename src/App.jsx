import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PdfPage from './pages/pdfPage';
import HomePage from './pages/homePage';
import TextWrap from './pages/textWrap';
import { getBlobData } from './utils';


const PageContainer = styled.div`
        position: relative;
        top: 50px;
`;

const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

function App() {
  const downloadZip = () => {
    alert('zip downloading');
    instance.get('/zipfile/test.zip', { responseType: 'arraybuffer' })
      .then((response) => {
        // handle success
        console.log(response);
        const pdfData = response.data;
        console.log(pdfData);

        const blob = new Blob([pdfData], { type: 'application/zip' });
        // const blob = getBlobData(pdfData,'application/zip');
        const fileName = 'samplefile';
        // TODO fallback needed for IE8 & IE9
        if (navigator.appVersion.toString().indexOf('.NET') > 0) {
          // IE 10+
          window.navigator.msSaveBlob(blob, fileName);
        } else {
          // Firefox, Chrome
          const a = document.createElement('a');
          const blobUrl = window.URL.createObjectURL(blob);
          document.body.appendChild(a);
          a.style = 'display: none';
          a.href = blobUrl;
          a.download = fileName;
          a.click();
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: 'flex', width: '100%', height: '70px', background: '#ccc', position: 'fixed', top: '0', zIndex: '2',
        }}
      >
        <ul style={{
          display: 'flex',
          listStyleType: 'none',
        }}
        >
          <li style={{
            margin: 'auto 20px',
          }}
          >
            <Link
              to={{
                pathname: '/home',
                state: { pageName: 'home page' },
              }}
            >
              Home

            </Link>
          </li>
          <li style={{
            margin: 'auto 20px',
          }}
          >
            <Link
              to={{
                pathname: '/pdf',
                state: { pageName: 'pdfView' },
              }}
            >
              Pdf

            </Link>
          </li>
          <li style={{
            margin: 'auto 20px',
          }}
          >
            <button onClick={downloadZip}>Download Zip</button>
          </li>
          <li style={{
            margin: 'auto 20px',
          }}
          >
            <Link
              to={{
                pathname: '/textWrap',
                state: { pageName: 'Text' },
              }}
            >
              Text Wrapping

            </Link>
          </li>
        </ul>

      </header>
      <PageContainer>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/pdf" component={PdfPage} />
          <Route path="/textWrap" component={TextWrap} />
        </Switch>
      </PageContainer>


    </div>
  );
}

export default App;
