import React from 'react';
import './Recuperar.css';  // Asegúrate de que el archivo CSS esté correctamente importado

const Recuperar = () => {
  return (
    <div className="container_r">
      <div className="image-section_r">
        <img src="/imagenes/seguridad_sri.jpg" alt="Model Image" />
      </div>
      <div className="login-section_r">
        <div className="logo">
          <img src="/imagenes/logo_sri.png" alt="logo_sri" />
        </div>
        <h2>Recuperar Contraseña</h2>
        <form>
          <label htmlFor="new-password">Nueva Contraseña</label>
          <input type="password" id="new-password" name="new-password" placeholder="********" />
          
          <label htmlFor="repeat-password">Repetir Contraseña</label>
          <input type="password" id="repeat-password" name="repeat-password" placeholder="********" />
          
          <button type="submit" className="boton">
            Continuar
          </button>
          
          <p className="signup-link">
            ¿No tienes una cuenta?<a href="#"> Crear cuenta</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Recuperar;
