import NumberInput from './NumberInput';
import styles from './TipCalculator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TipSelector from './TipSelector';

const TipCalculator = () => {

    const moneySymbol = <FontAwesomeIcon icon={ faDollarSign } />;
    const peopleSymbol = <FontAwesomeIcon icon={ faUser } />;

    const [billAmount, setBillAmount] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [selectedPercentage, setSelectedPercentage] = useState(0);
    const [buttonSelected, setButtonSelected] = useState(false);

    const setBill = (price) => {
        setBillAmount(price);
    };

    const setAmountOfPeople = (people) => {
        setNumOfPeople(people);
    };

    const formatInput = () => {

        setNumOfPeople(Math.round(numOfPeople));
        const billInteger = billAmount.toFixed(2);
        setBillAmount(+billInteger);

    };

    // console.log('Bill: ', billAmount, typeof billAmount);
    // console.log('Num of People: ', numOfPeople, typeof numOfPeople);
    console.log("button selected: ", buttonSelected, 'Tip percent: ', selectedPercentage);
    return (
        <div className={ styles.panel }>
            <NumberInput
                field="Bill"
                symbol={ moneySymbol }
                onFieldUpdate={ setBill }
                minValue={ 0 }
                displayValue={ billAmount }
            />
            <TipSelector
                selectedPercentage={ selectedPercentage }
                onSelectPercentage={ (percent) => {
                    setSelectedPercentage(percent);
                    formatInput();
                } }
                onButtonSelect={ (e) => {
                    setButtonSelected(e);
                } }
                isButtonSelected={ buttonSelected }
            />
            <NumberInput
                field="Number of People"
                symbol={ peopleSymbol }
                onFieldUpdate={ setAmountOfPeople }
                minValue={ 1 }
                displayValue={ numOfPeople }
            />
        </div>
    );
};

export default TipCalculator;