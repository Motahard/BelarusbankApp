import React, { useState } from 'react';

const Calculator = ({ course, isBuying }) => {
  const [byn, setB] = useState();
  const [eur, setE] = useState();
  const [usd, setU] = useState();
  const [rub, setR] = useState();

  const { USD_in, RUB_in, EUR_in, USD_out, RUB_out, EUR_out } = course[0];
  console.log(isBuying);

  const onChangeBYN = e => {
    if (isBuying === 'buying') {
      setU((USD_in * e.target.value).toFixed(4));
      setB(e.target.value);
      setE((RUB_in * e.target.value).toFixed(4));
      setR((EUR_in * e.target.value).toFixed(4));
    } else if (isBuying === 'selling') {
      setU((USD_out * e.target.value).toFixed(4));
      setB(e.target.value);
      setE((RUB_out * e.target.value).toFixed(4));
      setR((EUR_out * e.target.value).toFixed(4));
    }
  };

  return (
    <div>
      <h4 className='form-h4'>Конвертер</h4>
      <form className='form-calculator'>
        <div>
          <label htmlFor='byn'>BYN </label>
          <input
            type='text'
            name='byn'
            defaultValue={byn}
            onChange={onChangeBYN}
          />
        </div>
        <div>
          <label htmlFor='usd'>USD </label>
          <input type='text' name='usd' defaultValue={usd} disabled />
        </div>
        <div>
          <label htmlFor='eur'>EUR </label>
          <input type='text' name='eur' defaultValue={eur} disabled />
        </div>
        <div>
          <label htmlFor='rub'>RUB </label>
          <input type='text' name='rub' defaultValue={rub} disabled />
        </div>
      </form>
    </div>
  );
};

export default Calculator;
