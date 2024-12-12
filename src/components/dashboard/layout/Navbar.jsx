import React, { useState } from 'react';
import { useAuth } from '../../auth/login/AuthContext'; // Importa el contexto de autenticación
import "./../../../styles/Navbar.css";
import searchIcon from './../../../../public/icon-search--black.svg';

import hamburger from "../../../assets/icon-hamburger.svg"

const Navbar = () => {
  const { user } = useAuth(); // Obtén el usuario actual

const [isVisibleMenuNav, setIsVisibleMenuNav] = useState(true); // Establece el estado del botón de navegación

  return (
    <header className={`header ${isVisibleMenuNav ? 'nav--visible' : ''}`}>
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
        <div className="nav__btn">
          <button className="nav__btn__container" onClick={() => setIsVisibleMenuNav(!isVisibleMenuNav)}>
            <img className="nav__img" src={hamburger} alt="Btn" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
