import PercentButton from './PercentButton';
import styles from './TipSelector.module.css';

const TipSelector = (props) => {

    return (
        <div className={ styles['tip-selector'] }>
            <label>Select Tip %</label>
            <div className={ styles['button-panel'] }>
                <PercentButton
                    percentage={ 5 }
                    selectedPercentage={ props.selectedPercentage }
                    onSelectPercentage={ () => {
                        props.onSelectPercentage(5);
                    } } />
                <PercentButton
                    percentage={ 10 }
                    selectedPercentage={ props.selectedPercentage }
                    onSelectPercentage={ () => {
                        props.onSelectPercentage(10);
                    } } />
                <PercentButton
                    percentage={ 15 }
                    selectedPercentage={ props.selectedPercentage }
                    onSelectPercentage={ () => {
                        props.onSelectPercentage(15);
                    } } />
                <PercentButton
                    percentage={ 18 }
                    selectedPercentage={ props.selectedPercentage }
                    onSelectPercentage={ () => {
                        props.onSelectPercentage(18);
                    } }
                />
                <PercentButton
                    percentage={ 25 }
                    selectedPercentage={ props.selectedPercentage }
                    onSelectPercentage={ () => {
                        props.onSelectPercentage(25);
                    } }
                />
            </div>
        </div>
    );
};

export default TipSelector;