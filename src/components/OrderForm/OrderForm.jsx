import React from 'react';
import Button from "../Button/Button";
import './OrderForm.css';

function OrderForm() {
    return (
        <section className="order">
            <div className="order__container">
                <h2 className="order__header">заказать консультацию специалиста</h2>
                <form className="order-from">
                    <span>Заполните форму и мы свяжемся с вами в ближайшее время!</span>
                    <label>
                        <input type="text"/>
                        <input type="text"/>
                    </label>
                    <input type="text"/>
                    <label>
                        <input type="checkbox"/>Я согласен с условиями обработки персональных данных
                    </label>
                    <Button text={"Отправить"}/>
                </form>
            </div>
            <div className="order__img"/>
        </section>
    );
}

export default OrderForm;
