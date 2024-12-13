import React from 'react';
import { Link } from 'react-router-dom';
import './Olvidaste.css';
 
const Olvidaste = () => {
  return (
    <div className="container2">
      <div className="image-section">
        <img src="/imagenes/seguridad_sri.jpg" alt="Imagen de seguridad" />
      </div>
      <div className="login-section">
        <div className="logo">
          <img src="/imagenes/logo_sri.png" alt="Logo SRI" />
        </div>
        <h2>¿Olvidaste tu contraseña?</h2>
        <p>Ingresa tu email y te enviaremos los pasos a seguir para recuperarla</p>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
          />
          <div className="btn-container">
            <Link to="/recuperar" className="btn-link">
              <button type="button" className="btn-recover">
                Recuperar contraseña
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default Olvidaste;
