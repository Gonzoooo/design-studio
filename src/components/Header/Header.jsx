import React from 'react';
import './Header.css';
import Logo from '../../assets/img/logo.svg';
import Button from '../Button/Button';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={Logo}
        alt="Logo of design studio Sensei media"
      />
      <nav>
        <ul className="nav__items">
          <li>
            <a href="#main">Главная</a>
          </li>
          <li>
            <a href="#services">Услуги</a>
          </li>
          <li>
            <a href="#our-work">Наши работы</a>
          </li>
          <li>
            <a href="#order">Контакты</a>
          </li>
        </ul>
      </nav>
      <Button text={'Заказать звонок'}></Button>
    </header>
  );
}

export default Header;
