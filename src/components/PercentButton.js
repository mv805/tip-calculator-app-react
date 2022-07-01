import { Fragment, useState } from 'react';
import styles from './PercentButton.module.css';

const PercentButton = (props) => {

    const highlightButton = () => {
        props.onSelectPercentage(props.percentage);
        props.onButtonSelect(true);
    };

    return (
        <Fragment>
            <button
                className={ `${ styles.button } 
                ${ props.selectedPercentage === props.percentage && props.isButtonSelected ? styles.selected : styles['not-selected'] }` }
                onClick={ highlightButton }>{ `${ props.percentage }%` }</button>
        </Fragment>
    );
};

export default PercentButton;