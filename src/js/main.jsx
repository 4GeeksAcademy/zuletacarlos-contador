import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css";


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css
import '../styles/index.css'

// components
import Home from './components/Home';

let segundos = 0;

setInterval(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home seconds={segundos} />
    </React.StrictMode>
  );
  segundos++;
}, 1000);

