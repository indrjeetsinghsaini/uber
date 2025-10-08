import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import CaptainContext from './context/CaptainContext.jsx'; // Corrected the typo
import { SocketProvider } from './context/SocketContext.jsx'; // Added curly braces {}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <CaptainContext>
          <SocketProvider>
            <App />
          </SocketProvider>
        </CaptainContext>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
