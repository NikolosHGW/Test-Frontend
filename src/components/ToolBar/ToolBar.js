import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './styles/ToolBar.css';

function ToolBar() {
  const { url } = React.useContext(CurrentUserContext);

  return (
    <div className="ToolBar">
      <button className="ToolBar__item ToolBar__item_type_search" type="button" aria-label="search"></button>
      <button className="ToolBar__item ToolBar__item_type_bell" type="button" aria-label="notification"></button>
      <button className="ToolBar__item ToolBar__item_type_eye" type="button" aria-label="visually impaired"></button>
      <div className="ToolBar__profile">
        <div className="ToolBar__avatar-container">
          {url && (<img className="ToolBar__avatar" src={url} alt="Аватар" />)}
        </div>
        <button className="ToolBar__button-open" type="button" aria-label="open"></button>
      </div>
    </div>
  );
}

export default React.memo(ToolBar);
