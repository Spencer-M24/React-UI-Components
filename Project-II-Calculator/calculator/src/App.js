import React from 'react';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';





const App = () => {
  return (
    <div className="container">
    <CalculatorDisplay number = {0} />
    <NumberButton className="one" number={1} />
    <NumberButton className="two" number={2} />
    <NumberButton className="three" number={3} />
    <NumberButton className="four" number={4} />
    <NumberButton className="five" number={5} />
    <NumberButton className="six" number={6} />
    <NumberButton className="seven" number={7} />
    <NumberButton className="eight" number={8} />
    <NumberButton className="nine" number={9} />
    <ActionButton className="clear" text="clear" />
    <ActionButton className="divide" text="÷" />
    <ActionButton className="multiply" text="x" />
    <ActionButton className="minus" text="_" />
    <NumberButton className="zero" number={0} />
    <ActionButton className="plus" text="+" />
    <ActionButton className="equals" text="=" />
    </div>
   
  );
};

export default App;
