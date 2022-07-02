import ResetButton from './ResetButton';
import ResultField from './ResultField';
import './Results.css';

const Results = (props) => {
    return (
        <div className="Results--card">
            <ResultField
                mainTitle="Tip Amount"
                subTitle="/person"
                amount={ props.tipPerPerson } />
            <ResultField
                mainTitle="Total"
                subTitle="/person"
                amount={ props.totalPerPerson } />
            <ResultField
                mainTitle="Total Bill"
                amount={ props.totalBill } />
            <ResetButton className="Results--reset-button" onReset={props.onReset}/>
        </div>
    );
};

export default Results;