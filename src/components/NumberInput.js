import { useState } from 'react';
import styles from './NumberInput.module.css';

const NumberInput = (props) => {

    const [fieldInvalid, setFieldInvalid] = useState(false);

    const inputHandler = (e) => {

        console.log(e.target.value);

        if (isNaN(e.target.value) ||
            Number(e.target.value) < props.minValue ||
            e.target.value === '') {
            setFieldInvalid(true);
            return;
        }

        setFieldInvalid(false);

        props.onFieldUpdate(e.target.value);
    };

    const cleanupField = () => {

    };

    return (
        <div className={ styles.input }>
            <label htmlFor={ props.field }>{ props.field }</label>
            <div className={ fieldInvalid ? styles['invalid-field'] : '' }>
                { props.symbol }
                <input
                    defaultValue={ props.initialValue }
                    onChange={ inputHandler }
                    name={ props.field }
                    id={ props.field }
                    type="number"
                    min="0"
                />
            </div>
        </div>
    );

};

export default NumberInput;