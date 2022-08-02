import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">
      </div>
      <div className="navigation">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/notfound">Не главная</NavLink>
      </div>
    </header>
  )
}
