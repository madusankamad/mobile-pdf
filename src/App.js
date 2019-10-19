import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PdfPage from './pages/pdfPage';
import HomePage from './pages/homePage';
import axios from 'axios';
import { getBlobData } from './utils';

const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

function App() {

  const downloadZip = () => {
    alert('zip downloading');
    instance.get('/zipfile/test.zip', { responseType: 'arraybuffer' })
      .then(function (response) {
        // handle success
        console.log(response);
        const pdfData = response.data;
        console.log(pdfData);

        const blob = new Blob([pdfData], { type: 'application/zip' });
        //const blob = getBlobData(pdfData,'application/zip');
        const fileName = 'samplefile'
        //TODO fallback needed for IE8 & IE9
        if (navigator.appVersion.toString().indexOf('.NET') > 0) {
          //IE 10+
          window.navigator.msSaveBlob(blob, fileName);
        } else {
          //Firefox, Chrome
          var a = document.createElement("a");
          var blobUrl = window.URL.createObjectURL(blob);
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = blobUrl;
          a.download = fileName;
          a.click();
        }



      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', height: '70px', background: 'yellow', position: 'fixed', top: '0' }}>
        <ul style={{
          display: 'flex',
          listStyleType: 'none'
        }}>
          <li style={{
            margin: 'auto 20px'
          }}>
            <Link
              to={{
                pathname: '/home',
                state: { pageName: 'home page' }
              }}>Home</Link>
          </li>
          <li style={{
            margin: 'auto 20px'
          }}>
            <Link
              to={{
                pathname: '/pdf',
                state: { pageName: 'pdfView' }
              }}>Pdf</Link>
          </li>
          <li style={{
            margin: 'auto 20px'
          }}>
            <button onClick={downloadZip}>Download Zip</button>
          </li>
        </ul>

      </header>

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/pdf" component={PdfPage} />
      </Switch>


    </div>
  );
}

export default App;
