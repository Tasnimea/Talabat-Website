
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./services/i18n";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as serviceWorker from "./serviceWorker";

// import 'semantic-ui-css/semantic.min.css'
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
 const loadingMarkup = (

  <div className="py-4 text-center">

    <h3>Loading...</h3>

  </div>

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={loadingMarkup}>

    <App />
    </React.Suspense>

  </React.StrictMode>
);
serviceWorker.unregister();