import React, { useState } from 'react';

function CounterH() {
  // useState повертає масив з посиланням на стан і функцією для його зміни
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    // функція для зміни стану може приймати функцію
    // для обчислення нового стану через старий стан
    setCount(count => count + step);
  };

  const decrement = () => {
    setCount(count => count - step);
  };

  const handleStepChange = ({ target: { value } }) => {
    // функція для зміни стану може приймати нове значення стану
    setStep(Number(value));
  };

  return (
    <div>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <input type="number" value={step} onChange={handleStepChange} />
    </div>
  );
}

export default CounterH;
