import React from 'react';
import logo from '../../images/logo.svg';
import ToolBar from '../ToolBar/ToolBar';
import './styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header__logo-container">
        <img className="Header__logo" src={logo} alt="Логотип" />
      </div>
      <div className="Header__info-container">
        <h1 className="Header__title">Мой профиль</h1>
        <ToolBar />
      </div>
    </header>
  );
}

export default React.memo(Header);
