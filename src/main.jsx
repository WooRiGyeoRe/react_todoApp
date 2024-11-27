import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import App_immer from './immer/App_immer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* */}
    <App />
    {/* <App_immer /> */}
  </StrictMode>,
);
