import React from 'react';
import './Services.css';
import Button from "../Button/Button";

function Services() {
    return (
        <section className="services">
            <h2 className="services__header">Наши услуги</h2>
            <div className="services__items">
                <div className="services__item">
                    <div className="item__body">
                        <h3 className="item__header">Рекламные материалы</h3>
                        <ul>
                            <li>Верстка макетов</li>
                            <li>Флаеры</li>
                            <li>Визитки</li>
                            <li>Брошюры</li>
                            <li>Листовки</li>
                        </ul>
                        <div className="item__price">от&nbsp;<p>2000 руб.</p></div>
                    </div>
                    <Button text={"Подробнее"}/>
                </div>
                <div className="services__item">
                    <div className="item__body">
                        <h3 className="item__header">бренд дизайн</h3>
                        <ul>
                            <li>Логотипы</li>
                            <li>Фирменный стиль</li>
                            <li>Айдентика</li>
                            <li>Концепция бренда</li>
                            <li>Гайдлайн</li>
                        </ul>
                        <div className="item__price">от&nbsp;<p>2000 руб.</p></div>
                    </div>
                    <Button text={"Подробнее"}/>
                </div>
                <div className="services__item">
                    <div className="item__body">
                        <h3 className="item__header">дизайн вывесок и рекламы</h3>
                        <ul>
                            <li>Дизайн вывесок</li>
                            <li>Фотопривязки</li>
                            <li>Роллапы</li>
                        </ul>
                        <div className="item__price">от&nbsp;<p>2000 руб.</p></div>
                    </div>
                    <Button text={"Подробнее"}/>
                </div>
                <div className="services__item">
                    <div className="item__body">
                        <h3 className="item__header">Digital Дизайн</h3>
                        <ul>
                            <li>WEB дизайн</li>
                            <li>Креативы для рекламы</li>
                            <li>Презентации</li>
                        </ul>
                        <div className="item__price">от&nbsp;<p>2000 руб.</p></div>
                    </div>
                    <Button text={"Подробнее"}/>
                </div>
                <div className="services__item">
                    <div className="item__body">
                        <h3 className="item__header">Smm</h3>
                        <ul>
                            <li>Stories Instagram</li>
                            <li>Post instagram</li>
                            <li>Оформление аккаунта</li>
                            <li>Рекламные креативы</li>
                            <li>Оформление группы</li>
                        </ul>
                        <div className="item__price">от&nbsp;<p>2000 руб.</p></div>
                    </div>
                    <Button text={"Подробнее"}/>
                </div>
            </div>
        </section>
    );
}

export default Services;
