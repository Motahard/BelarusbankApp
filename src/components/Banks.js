import React from 'react';
import BankItem from './BankItem';

const Banks = ({ course, valute }) => {
  return (
    <div>
      {course.length !== 0 ? (
        course.map(
          (bank, index) =>
            index <= 15 && (
              <BankItem
                key={bank.filial_id}
                bank={bank}
                valute={valute}
              ></BankItem>
            )
        )
      ) : (
        <div>Ничего не найдено</div>
      )}
    </div>
  );
};

export default Banks;
