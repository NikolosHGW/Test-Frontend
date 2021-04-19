import React from "react";
import { NavLink } from "react-router-dom";
import './styles/index.css';

function NavigatLink({ endPoint, activeSelector, modificator, text }) {
  return (
    <NavLink exact to={endPoint} activeClassName={activeSelector} className={`NavigatLink ${modificator}`}>
      <span className="NavigatLink__span">{text}</span>
    </NavLink>
  );
}

export default React.memo(NavigatLink);
