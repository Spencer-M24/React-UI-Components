import React from 'react';
import './Display.css';



const CalculatorDisplay = (props) => {
    return ( <div className="calculator-display">
    <h1 className="numbers">{props.number}</h1>
            
    </div>


);
};

export default CalculatorDisplay;
