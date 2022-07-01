import styles from './NumberInput.module.css';

const NumberInput = (props) => {


    const inputHandler = (e) => {

        if (isNaN(e.target.value) ||
            +e.target.value < props.minValue ||
            e.target.value === '') {
            return;
        }

        props.onFieldUpdate(+e.target.value);

    };

    const clearLeadingZeroes = (e) => {

        const leadingZeroes = /0*/;
        let cleared = e.target.value.replace(leadingZeroes, '');

        if (cleared.split('')[0] === '.') {

            let dollars = cleared.split('');
            dollars.splice(0, 0, '0');
            cleared = dollars.join('');

        }

        if(cleared === ''){
            e.target.value = '0';
            return;
        }

        e.target.value = cleared;

    };

    return (
        <div className={ styles.input }>
            <label htmlFor={ props.field }>{ props.field }</label>
            <div>
                { props.symbol }
                <input
                    onClick={ (e) => {
                        e.target.select();
                    } }
                    value={ props.displayValue }
                    onChange={ inputHandler }
                    name={ props.field }
                    id={ props.field }
                    onBlur={ clearLeadingZeroes }
                    type="number"
                />
            </div>
        </div>
    );

};

export default NumberInput;