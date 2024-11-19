// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de que la ruta sea correcta

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Si no hay usuario autenticado, redirige al login
    return <Navigate to="/" />;
  }

  // Si hay usuario autenticado, muestra el contenido de la ruta protegida
  return children;
};

export default ProtectedRoute;
