import React from 'react';
import Input from './Input';

function CalculatorDesign() {
  return (
    <div className="parent">
      <Input />
      <button className="child light-grey" type="button">AC </button>
      <button className="child light-grey" type="button">+/- </button>
      <button className="child light-grey" type="button">% </button>
      <button className="child orange" type="button">/</button>
      <button className="child light-grey" type="button">7</button>
      <button className="child light-grey" type="button">8</button>
      <button className="child light-grey" type="button">9</button>
      <button className="child orange" type="button">x</button>
      <button className="child light-grey" type="button">4</button>
      <button className="child light-grey" type="button">5</button>
      <button className="child light-grey" type="button">6</button>
      <button className="child orange" type="button">-</button>
      <button className="child light-grey" type="button">1</button>
      <button className="child light-grey" type="button">2</button>
      <button className="child light-grey" type="button">3</button>
      <button className="child orange" type="button">+</button>
      <button className="child zero light-grey" type="button">0</button>
      <button className="child light-grey" type="button">.</button>
      <button className="child orange" type="button">=</button>
    </div>
  );
}
export default CalculatorDesign;
