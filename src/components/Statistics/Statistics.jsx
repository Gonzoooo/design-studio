import React from 'react';
import './Statistics.css';

function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics__container">
        <h2 className="statistics__header">Мы знаем толк в дизайне!</h2>
        <div className="statistic__info">
          <div className="info-section">
            <div>
              <h3>6 лет</h3>
              <p>В сфере рекламы</p>
            </div>
          </div>
          <div className="info-section">
            <div>
              <h3>более 100</h3>
              <p>Наших постоянных клиентов</p>
            </div>
          </div>
          <div className="info-section">
            <div>
              <h3>+20%</h3>
              <p>Конверсия продаж</p>
            </div>
          </div>
          <div className="info-section">
            <div>
              <h3>-70%</h3>
              <p>Ошибок менеджеров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
