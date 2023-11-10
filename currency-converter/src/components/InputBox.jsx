import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = '',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white text-sm rounded-lg p-3 flex ${className}`}>
      <div className='w-1/2'>
        <label
          htmlFor={amountInputId}
          className='text-black/40 mb-2 inline-block'
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type='number'
          className='outline-none bg-transparent py-1 5 w-full'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className='w-1/2 flex flex-wrap text-right justify-end'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
