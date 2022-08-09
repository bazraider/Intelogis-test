import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../static/logo_main_new.png'

export default function Header() {
  return (
    <header>
      <div className="navigation">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/notfound">Не главная</NavLink>
      </div>
    </header>
  )
}
