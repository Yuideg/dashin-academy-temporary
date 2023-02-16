import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) ;

root.render(
  <>
    <HelmetProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HelmetProvider>
  </>
);

serviceWorker.unregister();

reportWebVitals();
