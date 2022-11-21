import React from 'react';
import './Introduction.css';

function Introduction() {
    return (
        <section className="introduction">
            <div className="introduction__container">
                <h1 className="introduction__header">Студия дизайна</h1>
                <h2 className="introduction__header_two">полного цикла</h2>
                <p className="introduction__text">От дизайна визиток до дизайна сайтов</p>
                <div className="introduction__buttons">
                    <button className="introduction__button">Комплексные решения</button>
                    <button className="introduction__button">Логотип</button>
                    <button className="introduction__button">Дизайн</button>
                </div>
            </div>
            <div className="introduction__img"></div>
        </section>
    );
}

export default Introduction;
