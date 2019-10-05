import React, { useState } from 'react';
import Banks from './Banks';
import MapItem from './MapItem';
import Calculator from './Calculator';
import { sortCourses, reverseSortCourses } from '../sort';

const CityForm = () => {
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('');
  const [usd, setUsd] = useState(false);
  const [eur, setEur] = useState(false);
  const [rub, setRub] = useState(false);
  const [buying, setBuying] = useState('buying');

  const onChange = e => {
    setCity(e.target.value);
  };

  const changeUsd = e => {
    setUsd(e.target.checked);
  };

  const changeEur = e => {
    setEur(e.target.checked);
  };

  const changeRub = e => {
    setRub(e.target.checked);
  };

  const changeType = e => {
    setBuying(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getBanks(city);
  };

  const getBanks = async city => {
    const req = await fetch(
      'https://cors-anywhere.herokuapp.com/' +
        `https://belarusbank.by/api/kursExchange?city=${city}`
    );

    const res = await req.json();
    const sortedCourses = sortCourses(res);
    setCourse(sortedCourses);
  };

  return (
    <div className='container'>
      <div>
        <div className='form'>
          <h2>Поиск</h2>
          <form className='form-group' onSubmit={onSubmit}>
            <div>
              <input
                type='text'
                placeholder='Введите город...'
                onChange={onChange}
              />
            </div>
            <div className='checkboxes'>
              <div>
                <input type='checkbox' name='usd' onChange={changeUsd} />
                <label htmlFor='usd'>Доллар США</label>
              </div>
              <div>
                <input type='checkbox' name='eur' onChange={changeEur} />
                <label htmlFor='eur'>Евро</label>
              </div>
              <div>
                <input type='checkbox' name='rub' onChange={changeRub} />
                <label htmlFor='rub'>Российский рубль</label>
              </div>
            </div>
            <div>
              <label htmlFor='isSelected'>Выберите категорию </label>
              <select onChange={changeType} name='isSelected' class='select'>
                <option value='selling'>Покупка</option>
                <option value='buying'>Продажа</option>
              </select>
            </div>
            <div>
              <input type='submit' value='Просмотреть' />
            </div>
          </form>
        </div>
        <MapItem></MapItem>
        {course !== '' && (
          <Calculator
            course={buying === 'buying' ? course : reverseSortCourses(course)}
            isBuying={buying}
          ></Calculator>
        )}
      </div>

      <div>
        {course !== '' && (
          <Banks
            course={buying === 'buying' ? course : reverseSortCourses(course)}
            valute={[usd, eur, rub]}
          />
        )}
      </div>
    </div>
  );
};

export default CityForm;
