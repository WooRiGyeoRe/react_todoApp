import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import App_immer from './immer/App_immer';
import Map_practice from './map/Map_practice';
import MapComponents_practice from './map/MapComponents_practice';
import Immer_example from './immer/Immer_example';
import UseRef_example from './useRef/UseRef_example';
import UseRef_todoApp_App from './useRef/UseRef_todoApp_App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App_immer /> */}
    {/* <Map_practice /> */}
    {/* <MapComponents_practice /> */}
    {/* <Immer_example /> */}
    {/* <UseRef_example /> */}
    <UseRef_todoApp_App />
  </StrictMode>,
);
