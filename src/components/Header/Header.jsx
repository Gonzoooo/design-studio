import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/img/Logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo of design studio Sensei media"/>
            <nav>
                <ul className="nav">
                    <li>Главная</li>
                    {/*<li><NavLink>Услуги</NavLink></li>*/}
                    {/*<li><NavLink>Наши работы</NavLink></li>*/}
                    {/*<li><NavLink>Контакты</NavLink></li>*/}
                </ul>
            </nav>
            <button className="header__btn">Заказать звонок</button>
        </header>
    );
}

export default Header;
