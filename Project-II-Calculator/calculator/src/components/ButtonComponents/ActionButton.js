import React from 'react';
import './Button.css';




const ActionButton = (props) => {

    return ( 
    <div className={props.className}>
    
        <h1 Programing Is a Journey={props.journey}>{props.text}</h1>
    
    </div>

    );
};

export default ActionButton;