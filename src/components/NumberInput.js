import { useState } from 'react';
import styles from './NumberInput.module.css';

const NumberInput = (props) => {

    const [fieldValue, setFieldValue] = useState('0');

    return (
        <div className={ styles.input }>
            <label htmlFor={ props.field }>{ props.field }</label>
            <div>
                { props.symbol }
                <input
                    defaultValue={ fieldValue }
                    name={ props.field }
                    id={ props.field }
                    type="number"
                    min="0"/>
            </div>
        </div>
    );

};

export default NumberInput;