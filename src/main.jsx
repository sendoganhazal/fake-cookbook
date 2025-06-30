import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client';
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-teal/theme.css"
import './index.css'
import App from './App.jsx'
import 'primeicons/primeicons.css';
        

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </PrimeReactProvider>
)
