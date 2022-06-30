import NumberInput from './NumberInput';
import styles from './TipCalculator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TipCalculator = () => {

    const moneySymbol = <FontAwesomeIcon icon={ faDollarSign } />;
    const peopleSymbol = <FontAwesomeIcon icon={ faUser } />;

    const [billAmount, setBillAmount] = useState('0');
    const [numOfPeople, setNumOfPeople] = useState('1');
    // const [billField, setbillField] = useState('');
    // const [peopleField, setPeopleField] = useState('');

    const setBill = (price) => {
        setBillAmount(Number(price).toFixed(2));
    };

    const setAmountOfPeople = (people) => {
        setNumOfPeople(Math.round(Number(people)));
    };

    console.log('Bill: ', billAmount);
    console.log('Num of People: ', numOfPeople);

    return (
        <div className={ styles.panel }>
            <NumberInput
                field="Bill"
                symbol={ moneySymbol }
                onFieldUpdate={ setBill }
                minValue={ 0 }
                initialValue={ 0 } />
            <NumberInput
                field="Number of People"
                symbol={ peopleSymbol }
                onFieldUpdate={ setAmountOfPeople }
                minValue={ 1 }
                initialValue={ 1 } />
        </div>
    );
};

export default TipCalculator;