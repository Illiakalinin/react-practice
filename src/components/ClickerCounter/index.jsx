import React, { useEffect, useState } from "react";

function ClickerCounter() {
  const [clickCount, setclickCount] = useState(0);

  useEffect(() => {
    // після кожного рендера
    document.title = clickCount;
  }, [clickCount]);

  const handleClick = () => {
    setclickCount((clickCount) => clickCount + 1);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);

    //скидання ефекту
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  // useEffect(() => {
  //   const handleClick = () => {
  //     setclickCount((clickCount) => clickCount + 1);
  //   };

  //   document.body.addEventListener("click", handleClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleClick);
  //   };
  // }, [(document.title = clickCount)]);

  return <div>{clickCount}</div>;
}

export default ClickerCounter;

// useEffect(() => {
//   Ефект після кожного рендера (componentDidMount + componentDidUpdate)
//   return () => {
//     Скидання ефекту перед наступним рендером або перед розмонтуванням (~ componentWillUnmount)
//   }
// }, [перелік залежностей])

// Якщо [перелік залежностей] - порожній, то componentDidMount+componentWillUnmount

// - Ефекти без скидання:
//   - підвантаження даних
//   - логування
//   - звернення до DOM
// - Ефекти зі скиданням:
//   - навішування/відписка від обробників подій
//   - таймаути/інтервали
