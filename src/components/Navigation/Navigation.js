import React from 'react';
import './styles/Navigation.css';
import NavigatLink from '../NavigatLink/NavigatLink';

function Navigation() {
  return (
    <ul className="Navigation">
      <li className="Navigation__nav-line">
        <NavigatLink
          endPoint="/"
          activeSelector="NavigatLink_active_heart"
          modificator="NavigatLink_type_heart"
          text="Профиль"
        />
      </li>
      <li className="Navigation__nav-line">
        <NavigatLink
          endPoint="/doctors"
          activeSelector="NavigatLink_active_stethoscope"
          modificator="NavigatLink_type_stethoscope"
          text="Врачи и клиники"
        />
      </li>
      <li className="Navigation__nav-line">
        <NavigatLink
          endPoint="/mess"
          activeSelector="NavigatLink_active_message"
          modificator="NavigatLink_type_message"
          text="Сообщения"
        />
      </li>
      <li className="Navigation__nav-line">
        <NavigatLink
          endPoint="/test"
          activeSelector="NavigatLink_active_test"
          modificator="NavigatLink_type_test"
          text="Тестирование"
        />
      </li>
      <li className="Navigation__nav-line">
        <NavigatLink
          endPoint="/about"
          activeSelector="NavigatLink_active_book"
          modificator="NavigatLink_type_book"
          text="Полезно знать"
        />
      </li>
    </ul>
  );
}

export default React.memo(Navigation);
