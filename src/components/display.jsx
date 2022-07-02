import React from "react";

function Display(props){
    return(
        <div className="display-block">
            <div className="calc-number">{props.equal}</div>
            <div className="result-number">{props.result}</div>
        </div>
    );
};

export default Display;