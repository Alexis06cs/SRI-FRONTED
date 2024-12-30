// ProtectedRoute.jsx
import React from 'react';

const ProtectedRoute = ({ children }) => {
  // Directamente renderiza los hijos (sin validación de usuario)
  return children;
};

export default ProtectedRoute;
