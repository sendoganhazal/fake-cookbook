import { PrimeReactProvider } from "primereact/api";
import { createRoot } from 'react-dom/client';
import "primeflex/themes/primeone-light.css";
import "primereact/resources/themes/lara-light-teal/theme.css"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
)
