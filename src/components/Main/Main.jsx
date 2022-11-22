import React from 'react';
import './Main.css';
import Introduction from '../Introduction/Introduction';
import Statistics from '../Statistics/Statistics';
import Services from '../Services/Services';
import OrderForm from '../OrderForm/OrderForm';
import OurWork from '../OurWork/OurWork';

function Main() {
  return (
    <div className="main" id="main">
      <Introduction />
      <Statistics />
      <Services />
      <OrderForm />
      <OurWork />
    </div>
  );
}

export default Main;
