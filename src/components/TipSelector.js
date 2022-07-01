import PercentButton from './PercentButton';
import styles from './TipSelector.module.css';
import { useEffect, useRef, useState } from 'react';

const TipSelector = (props) => {
    
    const percentages = [5, 10, 15, 18, 25];
    const [customSelected, setCustomSelected] = useState(false);

    return (
        <div className={ styles['tip-selector'] }>
            <label>Select Tip %</label>
            <div className={ styles['button-panel'] }>
                { percentages.map((percentage, index) => {

                    return <PercentButton
                        key={ index }
                        percentage={ percentage }
                        onButtonSelect={ props.onButtonSelect }
                        selectedPercentage={ props.selectedPercentage }
                        isButtonSelected={ props.isButtonSelected }
                        onSelectPercentage={ () => {
                            props.onSelectPercentage(percentage);
                        } } />;

                }) }
                <input
                    className={ `${ styles.custom } ${ customSelected ? styles.selected : '' }` }
                    placeholder="Custom"
                    type="number"
                    onBlur={() => {
                        setCustomSelected(false);
                    }}
                    onChange={ (e) => {
                        props.onSelectPercentage(+e.target.value);
                    } }
                    onClick={ (e) => {
                        setCustomSelected(true);
                        if (e.target.value !== '') {
                            props.onSelectPercentage(+e.target.value);
                        }
                        e.target.select();
                        props.onButtonSelect(false);
                    } }
                />
            </div>
        </div>
    );
};

export default TipSelector;