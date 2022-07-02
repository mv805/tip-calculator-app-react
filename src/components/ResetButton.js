import React from 'react';

const ResetButton = (props) => {
    return (
        <button className={ props.className } onClick={props.onReset}>
            Reset
        </button>
    );
};

export default ResetButton;