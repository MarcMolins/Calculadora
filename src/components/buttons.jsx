import React from "react";
import "../styles/styles.css";

function Buttons(props){
    
    let buttonTypeStyle = value => {
        if(isNaN(value)){
            if(value === '='){
                return buttonTypeStyle = 'equalButton'
            }else{
                return buttonTypeStyle = 'operatorButton';
            }
        }else{
            return buttonTypeStyle = 'numberButton';
        }
    }

    return(
        <input type='button' value={props.value} className={`button ${buttonTypeStyle(props.value)}`} onClick={() => props.event(props.value)}/>
    );
};

export default Buttons;