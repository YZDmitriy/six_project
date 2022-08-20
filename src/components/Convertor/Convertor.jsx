/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Block } from './Block';
import './convertor.scss';

export const Convertor = () => {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  // const [rates, setRates] = useState({});
  const ratesRef = useRef({});

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        // setRates(json.rates);
        ratesRef.current = json.rates;
        onChangeToPrice(1);
      })
      .catch((err) => {
        console.warn(err);
        alert('Не удалось получить информацию!');
      });
  }, []);

  const onChangeFromPrice = (value) => {
    const priceLeft = value / ratesRef.current[fromCurrency];
    const result = (priceLeft * ratesRef.current[toCurrency]).toFixed(2);
    setToPrice(result);
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    const priceRight = (
      (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) *
      value
    ).toFixed(2);
    setFromPrice(priceRight);
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className='top_conv'>
      <h1>Convertor</h1>
      <div className='convertor'>
        <Block
          value={fromPrice}
          currency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
        />
        <Block
          value={toPrice}
          currency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
        />
      </div>
    </div>
  );
};
