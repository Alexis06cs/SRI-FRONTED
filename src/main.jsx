/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './components/auth/login/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './components/auth/login/AuthContext';

// Encuentra el elemento root
const rootElement = document.getElementById('root');

// Crea un root usando createRoot
const root = ReactDOM.createRoot(rootElement);

// Renderiza la aplicación
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);