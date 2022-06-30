import NumberInput from './NumberInput';
import styles from './TipCalculator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const TipCalculator = () => {

    const moneySymbol = <FontAwesomeIcon icon={ solid('dollar-sign') } />;
    const peopleSymbol = <FontAwesomeIcon icon={ solid('user') } />;

    return (
        <div className={ styles.panel }>
            <NumberInput field="Bill" symbol={ moneySymbol } />
            <NumberInput field="Number of People" symbol={ peopleSymbol } wholenumber />
        </div>
    );
};

export default TipCalculator;