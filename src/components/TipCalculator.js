import NumberInput from './NumberInput';
import styles from './TipCalculator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TipSelector from './TipSelector';
import Results from './Results';

const TipCalculator = () => {

    const moneySymbol = <FontAwesomeIcon icon={ faDollarSign } />;
    const peopleSymbol = <FontAwesomeIcon icon={ faUser } />;

    const [billAmount, setBillAmount] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [selectedPercentage, setSelectedPercentage] = useState(0);

    const [totalPerPerson, setTotalPerPerson] = useState(0);
    const [tipPerPerson, setTipPerPerson] = useState(0);

    const calculateTip = (percent) => {

        let tipTotal = billAmount * (percent / 100);
        let personalTotal = (billAmount + tipTotal) / numOfPeople;
        setTotalPerPerson(personalTotal.toFixed(2));

        let personalTipTotal = tipTotal / numOfPeople;
        setTipPerPerson(personalTipTotal.toFixed(2));

    };

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


    return (
        <div className={ styles.panel }>
            <NumberInput
                className={ styles.bill }
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
                    calculateTip(percent);
                } }
            />
            <NumberInput
                className={ styles.people }
                field="Number of People"
                symbol={ peopleSymbol }
                onFieldUpdate={ setAmountOfPeople }
                minValue={ 1 }
                displayValue={ numOfPeople }
            />
            <Results
                tipPerPerson={ tipPerPerson }
                totalPerPerson={ totalPerPerson }
                totalBill={ (totalPerPerson * numOfPeople).toFixed(2) }
                onReset={ () => {
                    setNumOfPeople(1);
                    setBillAmount(0);
                    setTotalPerPerson(0);
                    setTipPerPerson(0);
                } }
            />
        </div>
    );
};

export default TipCalculator;