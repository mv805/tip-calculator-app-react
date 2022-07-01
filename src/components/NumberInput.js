import { useState } from 'react';
import styles from './NumberInput.module.css';

const NumberInput = (props) => {


    const inputHandler = (e) => {

        if (isNaN(e.target.value) ||
            +e.target.value < props.minValue ||
            e.target.value === '') {
            console.log('invalid');
            return;
        } 
        
        props.onFieldUpdate(+e.target.value);

    };

    const clearLeadingZeroes = (e) => {

        const leadingZeroes = /0*/;
        let cleared = e.target.value.replace(leadingZeroes, '');

        if (cleared.split('').includes('.')){

            let dollars = cleared.split('');
            dollars.splice(0,0,'0');
            cleared = dollars.join('');
            
        }

        e.target.value = cleared;

    };

    return (
        <div className={ styles.input }>
            <label htmlFor={ props.field }>{ props.field }</label>
            <div>
                { props.symbol }
                <input
                    value={ props.displayValue }
                    onChange={ inputHandler }
                    name={ props.field }
                    id={ props.field }
                    onBlur={ clearLeadingZeroes }
                    type="number"
                    min="0"
                />
            </div>
        </div>
    );

};

export default NumberInput;