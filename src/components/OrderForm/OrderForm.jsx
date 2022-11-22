import React from 'react';
import Button from '../Button/Button';
import './OrderForm.css';

function OrderForm() {
  return (
    <section className="order" id="order">
      <div className="order__container">
        <h2 className="order__header">заказать консультацию специалиста</h2>
        <form className="order-from">
          <p>Заполните форму и мы свяжемся с вами в ближайшее время!</p>
          <label>
            <input
              className="order-from__input order-from__input_name"
              type="text"
              placeholder="Ваше имя"
            />
            <input
              className="order-from__input order-from__input_number"
              type="text"
              placeholder="Номер вашего телефона"
            />
          </label>
          <textarea className="order-from__textarea" placeholder="Ваш вопрос" />
          <label className="order-from__label">
            <input className="checkbox-order" type="checkbox" />Я согласен с
            условиями обработки персональных данных
          </label>
          <Button text="Отправить" />
        </form>
      </div>
      <div className="order__img" />
    </section>
  );
}

export default OrderForm;
