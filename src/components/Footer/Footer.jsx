import React from 'react';
import Button from '../Button/Button';
import './Footer.css';
import Logo from '../../assets/img/logo.svg';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div>
          <img
            className="footer-logo"
            src={Logo}
            alt="Logo of design studio Sensei media"
          />
          <a href="/" className="footer-politic">
            Политика конфиденциальности
          </a>
          <Button text="Обратная связь" />
        </div>
        <div>
          <ul>
            Информация
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/">Услуги</a>
            </li>
            <li>
              <a href="/">Наши работы</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            Услуги
            <li>
              <a href="/">Реклама в интеернете</a>
            </li>
            <li>
              <a href="/">Дизайн вывесок и рекламы</a>
            </li>
            <li>
              <a href="/">Дизайн сайтов на Тильде</a>
            </li>
            <li>
              <a href="/">СММ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__rights">
        <p> &#169; {new Date().getFullYear()} Все права защищены</p>
      </div>
    </section>
  );
}

export default Footer;
