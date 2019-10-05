import React from 'react';

const BankItem = ({ bank, valute }) => {
  const {
    name_type,
    name,
    street_type,
    street,
    home_number,
    info_worktime,
    filials_text,
    USD_in,
    USD_out,
    EUR_in,
    EUR_out,
    RUB_in,
    RUB_out
  } = bank;

  const [usd, eur, rub] = valute;

  return (
    <div className='bank-item'>
      <div className={valute.includes(true) ? 'bank-card' : 'bank-card-solo'}>
        <div>
          <h4>Контакты</h4>
          <p>
            Адрес:{' '}
            {`${name_type} ${name}, ${street_type} ${street}, ${home_number}`}{' '}
          </p>
          <p>Структурное подразделение: {' ' + filials_text}</p>
        </div>
        {valute.includes(true) && (
          <div>
            <h4>Покупка</h4>
            {usd && <p>Доллар США: {USD_in}</p>}
            {eur && <p>Евро: {EUR_in}</p>}
            {rub && <p>Российский рубль(100/1): {RUB_in}</p>}
          </div>
        )}
        {valute.includes(true) && (
          <div>
            <h4>Продажа</h4>
            {usd && <p>Доллар США: {USD_out}</p>}
            {eur && <p>Евро: {EUR_out}</p>}
            {rub && <p>Российский рубль(100/1): {RUB_out}</p>}
          </div>
        )}
      </div>
      <p>Рабочее время: {' ' + info_worktime}</p>
    </div>
  );
};

export default BankItem;
