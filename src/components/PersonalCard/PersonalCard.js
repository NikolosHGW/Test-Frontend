import React from "react";
import { Link } from "react-router-dom";
import './styles/index.css';

function PersonalCard({ path, modificator, children, title, text }) {
  return (
    <div className="PersonalCard">
      <Link to={path} className="PersonalCard__link">
        <div className={`PersonalCard__image ${modificator}`}></div>
        <div className="PersonalCard__container">
          <h2 className="PersonalCard__title">{title}</h2>
          {children ? children : (
            <p className="PersonalCard__text">{text}</p>
          )}
        </div>
      </Link>
    </div>
  );
}

export default React.memo(PersonalCard);
