import React from "react";
import { Link } from "react-router-dom";
import ContainerScroll from "../ContainerScroll/ContainerScroll";
import './styles/index.css';

function Details() {
  return (
    <div className="Details">
      <Link className="Details__link" to="/">Мои записи</Link>
      <div className="Details__container">
        <ContainerScroll />
      </div>
    </div>
  );
}

export default React.memo(Details);
