import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavigatLink from '../NavigatLink/NavigatLink';
import './styles/SideBar.css';

function SideBar() {
  return (
    <div className="SideBar">
      <Navigation />
      <button className="SideBar__order-button">Подать заявку</button>
      <div className="SideBar__NavigatLink">
        <NavigatLink
          endPoint="/stub"
          activeSelector="NavigatLink_active_help"
          modificator="NavigatLink_type_help"
          text="Помощь"
        />
      </div>
    </div>
  );
}

export default React.memo(SideBar);
