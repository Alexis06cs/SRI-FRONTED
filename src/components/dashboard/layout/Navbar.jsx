import React from 'react';
import { useAuth } from '../../auth/login/AuthContext'; // Importa el contexto de autenticación
import '../../../styles/Navbar.css';
import searchIcon from './../../../../public/icon-search--black.svg';

const Navbar = () => {
  const { user } = useAuth(); // Obtén el usuario actual

  return (
    <header className="header">
      <nav className="nav">
        <a href="/dashboard" className="nav__cta">
          <figure className="nav__cta__figure">
            <img src="/imagenes/logo_sri.png" alt="Logo SRI" />
          </figure>
        </a>
        <div className="nav__user__info">
          {/* Muestra el nombre y apellido si el usuario está autenticado */}
          <span className="nav__user__info__text">
            {user ? `${user.nombre} ${user.apellido}` : 'Invitado'}
          </span>
          <figure className="nav__user__info__figure">
            <img src="/imagenes/user.jpg" alt="Usuario" />
          </figure>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
