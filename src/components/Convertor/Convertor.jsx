import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './convertor.scss';

export const Convertor = () => {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert('Не удалось получить информацию!');
      });
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    // console.log(value)
    // console.log('++++', rates[fromCurrency]);
    // console.log(price)
    const result = price * rates[toCurrency]
    console.log('====', rates[toCurrency]);
    setToPrice(result);
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    setToPrice(value);
  };

  return (
    <div className='convertor'>
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        // onChangeCurrency={(cur) => console.log(cur)}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        // onChangeCurrency={(cur) => console.log(cur)}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
};
