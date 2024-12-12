import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate de React Router
import { useAuth } from './AuthContext'; // Importar el contexto de autenticación
import './Login.css'; // Importar el archivo CSS
import usuarios from './usuarios'; // Importar la lista de usuarios "en duro"

const Login = () => {
  const navigate = useNavigate(); // Inicializar useNavigate para redirección
  const { login } = useAuth(); // Obtener la función login del contexto de autenticación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Buscar el usuario en la lista "en duro"
    const usuarioEncontrado = usuarios.find(
      (user) => user.email === email && user.password === password
    );

    if (usuarioEncontrado) {
      setError("");

      // Guardar en localStorage si "Recuérdame" está activado
      if (remember) {
        localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      }

      // Llamar a la función login del contexto para establecer el usuario actual
      login(usuarioEncontrado);

      // Redirigir al usuario a /dashboard
      navigate('/dashboard');
    } else {
      // Establecer el mensaje de error si las credenciales son incorrectas
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src="./imagenes/seguridad_sri.jpg" alt="portada" />
      </div>
      <div className="login-section">
        <div className="logo">
          <img src="./imagenes/logo_sri.png" alt="logo_sri" />
        </div>
        <h2>¡Te damos la Bienvenida!</h2>
        <p>Por favor ingrese sus datos</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="userr">Usuario</label> 
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password" className="userr">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
          
          <div className="options">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              /> Recuérdame
            </label>
            <Link to="/olvidaste">Olvidaste tu contraseña</Link>
          </div>
          
          <button className='btn_login' type="submit">
            Iniciar Sesión
          </button>
          
          <p className="signup-link" clas= "bg-red mg-2rem">
            ¿No tienes una cuenta?<a href="crear"> Crear cuenta</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
