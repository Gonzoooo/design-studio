import React from 'react';
import './OurWork.css';
import AlibabaLogo from '../../assets/img/workAlibabaLogo.svg';
import GoogleAdwords from '../../assets/img/workGoogleAdwordsLogo.svg';
import YandexDirect from '../../assets/img/workYandexDirectLogo.svg';

function OurWork() {
  return (
    <section className="our-work" id="our-work">
      <button className="our-work__btn" />
      <h2 className="our-work__header">Наши работы</h2>
      <div className="our-work__items">
        <div className="our-work__item">
          <div className="company-info">
            <img src={AlibabaLogo} alt="Логотип компании Алибаба" />
            <p>
              Самая крупная в Финляндии компания по обработке камня и крупнейший
              в мире производитель теплоаккумулирующих печей каминов текст
              пример
            </p>
          </div>
          <div className="result">
            <h3 className="result__header">Результат:</h3>
            <div className="result__items">
              <div className="result__item">
                <h4>+ 85,71%</h4>
                <p>увеличение количества обращений с рекламы</p>
              </div>
              <div className="result__item">
                <h4>+ 83,51%</h4>
                <p>увеличение конверсии</p>
              </div>
              <div className="result__item">
                <h4>- 50,51%</h4>
                <p>снижение стоимости за обращение</p>
              </div>
            </div>
          </div>
          <div className="systems">
            <h3>Системы:</h3>
            <img src={GoogleAdwords} alt="Логотип Гугл Эдвордс" />
            <img src={YandexDirect} alt="Логотип Яндекс Директ" />
          </div>
        </div>
        <div className="our-work__item">
          <div className="company-info">
            <img src={AlibabaLogo} alt="Логотип компании Алибаба" />
            <p>
              Самая крупная в Финляндии компания по обработке камня и крупнейший
              в мире производитель теплоаккумулирующих печей каминов текст
              пример
            </p>
          </div>
          <div className="result">
            <h3 className="result__header">Результат:</h3>
            <div className="result__items">
              <div className="result__item">
                <h4>+ 85,71%</h4>
                <p>увеличение количества обращений с рекламы</p>
              </div>
              <div className="result__item">
                <h4>+ 83,51%</h4>
                <p>увеличение конверсии</p>
              </div>
              <div className="result__item">
                <h4>- 50,51%</h4>
                <p>снижение стоимости за обращение</p>
              </div>
            </div>
          </div>
          <div className="systems">
            <h3>Системы:</h3>
            <img src={GoogleAdwords} alt="Логотип Гугл Эдвордс" />
            <img src={YandexDirect} alt="Логотип Яндекс Директ" />
          </div>
        </div>
      </div>
      <button className="our-work__btn" />
    </section>
  );
}

export default OurWork;
