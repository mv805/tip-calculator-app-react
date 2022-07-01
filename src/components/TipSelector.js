import PercentButton from './PercentButton';
import styles from './TipSelector.module.css';
import { useEffect, useRef, useState } from 'react';

const TipSelector = (props) => {

    const percentages = [10, 13, 15, 18, 25, 'C'];

    const [currentSelected, setCurrentSelected] = useState('');

    return (
        <div className={ styles['tip-selector'] }>
            <label>Select Tip %</label>
            <div className={ styles['button-panel'] }>
                { percentages.map((percentage, index) => {
                    if (percentage === 'C') {
                        return (
                            <input
                                key={ index }
                                className={ `${ styles.custom } ${ currentSelected === 'C' ? styles.selected : '' }` }
                                placeholder="Custom"
                                type="number"
                                onChange={ (e) => {
                                    props.onSelectPercentage(+e.target.value);
                                } }
                                onClick={ (e) => {
                                    setCurrentSelected('C');
                                    if (e.target.value !== '') {
                                        props.onSelectPercentage(+e.target.value);
                                    }
                                    e.target.select();
                                } }
                            />
                        );
                    }

                    return <PercentButton
                        key={ index }
                        percentage={ percentage }
                        currentSelected={ currentSelected }
                        onSelectButton = { (e) => {
                            setCurrentSelected(e);
                        }}
                        selectedPercentage={ props.selectedPercentage }
                        onSelectPercentage={ () => {
                            props.onSelectPercentage(percentage);
                        } } />;

                }) }

            </div>
        </div>
    );
};

export default TipSelector;