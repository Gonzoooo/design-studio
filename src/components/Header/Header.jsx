import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/img/logo.svg';
import Button from "../Button/Button";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="Logo of design studio Sensei media"/>
            <nav>
                <ul className="nav__items">
                    <li>Главная</li>
                    <li>Услуги</li>
                    <li>Наши работы</li>
                    <li>Контакты</li>
                    {/*<li><NavLink>Услуги</NavLink></li>*/}
                    {/*<li><NavLink>Наши работы</NavLink></li>*/}
                    {/*<li><NavLink>Контакты</NavLink></li>*/}
                </ul>
            </nav>
            <Button text={"Заказать звонок"}></Button>
        </header>
    );
}

export default Header;
