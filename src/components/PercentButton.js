import { Fragment, useState } from 'react';
import styles from './PercentButton.module.css';

const PercentButton = (props) => {

    const highlightButton = () => {
        props.onSelectPercentage(props.percentage);
        props.onSelectButton(props.percentage);
    };

    return (
        <Fragment>
            <button
                className={ `${ styles.button } 
                ${ props.currentSelected === props.percentage ? styles.selected : styles['not-selected'] }` }
                onClick={ highlightButton }>{ `${ props.percentage }%` }</button>
        </Fragment>
    );
};

export default PercentButton;