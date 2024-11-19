import React from 'react';
import './Olvidaste.css';  // Asegúrate de que el archivo CSS esté correctamente importado

const Olvidaste = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src="/imagenes/seguridad_sri.jpg" alt="Model Image" />
      </div>
      <div className="login-section">
        <div className="logo">
          <img src="/imagenes/logo_sri.png" alt="logo_sri" />
        </div>
        <h2>¿Olvidaste tu contraseña?</h2>
        <p>Ingresa tu email y te enviaremos los pasos a seguir para recuperarla</p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="cpsoluciones" />
          <button type="submit">
            Recuperar contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default Olvidaste;
