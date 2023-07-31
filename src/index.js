import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Provider from './hooks/Provider';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
