import React from 'react';
import './styles/index.css';
import { useSelector } from 'react-redux';

function ToolBar() {
  const { user, isLoading, error } = useSelector(state => state.user);

  return (
    <div className="ToolBar">
      <button className="ToolBar__item ToolBar__item_type_search" type="button" aria-label="search"></button>
      <button className="ToolBar__item ToolBar__item_type_bell" type="button" aria-label="notification"></button>
      <button className="ToolBar__item ToolBar__item_type_eye" type="button" aria-label="visually impaired"></button>
      <div className="ToolBar__profile">
        <div className="ToolBar__avatar-container">
          {isLoading && (<div className="ToolBar__spinner"></div>)}
          {user[0] && (<img className="ToolBar__avatar" src={user[0].url} alt="Аватар" />)}
          {error && (<img className="ToolBar__avatar" src={error} alt="Аватар" />)}
        </div>
        <button className="ToolBar__button-open" type="button" aria-label="open"></button>
      </div>
    </div>
  );
}

export default React.memo(ToolBar);
