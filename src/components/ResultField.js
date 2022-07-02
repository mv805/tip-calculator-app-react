import React from 'react';

const ResultField = (props) => {
    return (
        <div className="ResultField--field">
            <div id="labels">
                <div id="main-label">{props.mainTitle}</div>
                <div id="sub-label">{props.subTitle}</div>
            </div>
            <div id="amount">{`$${props.amount}`}</div>
        </div>
    );
};

export default ResultField;