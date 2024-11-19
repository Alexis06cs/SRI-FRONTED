import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Estado del usuario inicializado desde localStorage si existe
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("usuario");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Función de inicio de sesión, guarda el usuario en el contexto y en localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("usuario", JSON.stringify(userData));
  };

  // Función de cierre de sesión, limpia el contexto y localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("usuario");
  };

  // Proveedor de contexto con el usuario y las funciones login/logout
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder fácilmente al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
