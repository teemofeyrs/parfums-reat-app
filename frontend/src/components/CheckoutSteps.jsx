import React from 'react';

const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <div className='row progressBar'>
            <div className={step1 ? 'active' : ''}>Авторизация</div>
            <div className={step2 ? 'active' : ''}>Доставка</div>
            <div className={step3 ? 'active' : ''}>Оплата</div>
            <div className={step4 ? 'active' : ''}>Подстердить заказ</div>
        </div>
    );
}

export default CheckoutSteps;