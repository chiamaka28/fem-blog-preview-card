import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <h1 className='sr-only'>QR CODE COMPONENT</h1>
      <App />
    </main>
  </StrictMode>
);
