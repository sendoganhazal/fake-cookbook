import { PrimeReactProvider } from "primereact/api";
import { createRoot } from 'react-dom/client';
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-teal/theme.css"
import './index.css'
import App from './App.jsx'
import 'primeicons/primeicons.css';
        

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
)
