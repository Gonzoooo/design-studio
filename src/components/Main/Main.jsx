import React from 'react';
import './Main.css';
import Introduction from "../Introduction/Introduction";
import Statistics from "../Statistics/Statistics";
import Services from "../Services/Services";
import OrderForm from "../OrderForm/OrderForm";

function Main() {
    return (
        <div className="main">
            <Introduction/>
            <Statistics/>
            <Services/>
            <OrderForm/>
        </div>
    );
}

export default Main;
