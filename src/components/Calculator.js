import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (value) => {
    const newCalculatorData = calculate(calculatorData, value);

    setCalculatorData(newCalculatorData);
  };

  const calculatorScreen = () => {
    if (calculatorData.next && calculatorData.operation && calculatorData.total) {
      return calculatorData.total + calculatorData.operation + calculatorData.next;
    }
    if (calculatorData.total && calculatorData.operation) {
      return calculatorData.total + calculatorData.operation;
    }
    if (!calculatorData.total) {
      return calculatorData.next || '0';
    }
    return calculatorData.total;
  };

  return (
    <div className="parent">
      <Input value={calculatorScreen()} />
      <Button onClick={handleButtonClick} className="light-grey" value="AC" />
      <Button onClick={handleButtonClick} className="light-grey" value="+/-" />
      <Button onClick={handleButtonClick} className="light-grey" value="%" />
      <Button onClick={handleButtonClick} className="orange-color" value="÷" />
      <Button onClick={handleButtonClick} className="light-grey" value="7" />
      <Button onClick={handleButtonClick} className="light-grey" value="8" />
      <Button onClick={handleButtonClick} className="light-grey" value="9" />
      <Button onClick={handleButtonClick} className="orange-color" value="x" />
      <Button onClick={handleButtonClick} className="light-grey" value="4" />
      <Button onClick={handleButtonClick} className="light-grey" value="5" />
      <Button onClick={handleButtonClick} className="light-grey" value="6" />
      <Button onClick={handleButtonClick} className="orange-color" value="-" />
      <Button onClick={handleButtonClick} className="light-grey" value="1" />
      <Button onClick={handleButtonClick} className="light-grey" value="2" />
      <Button onClick={handleButtonClick} className="light-grey" value="3" />
      <Button onClick={handleButtonClick} className="orange-color" value="+" />
      <Button onClick={handleButtonClick} className="zero" value="0" />
      <Button onClick={handleButtonClick} className="light-grey" value="." />
      <Button onClick={handleButtonClick} className="orange-color" value="=" />
    </div>
  );
}

export default Calculator;
