import React from 'react';

const ResultField = (props) => {
    return (
        <div className="ResultField--field">
            <div id="labels">
                <div id="main-label">{props.mainTitle}</div>
                <div id="sub-label">/ person</div>
            </div>
            <div id="amount">$4.27</div>
        </div>
    );
};

export default ResultField;