import ResetButton from './ResetButton';
import ResultField from './ResultField';
import './Results.css';

const Results = (props) => {
    return (
        <div className="Results--card">
            <ResultField mainTitle="Tip Amount" />
            <ResultField mainTitle="Total" />
            <ResetButton className="Results--reset-button" />
        </div>
    );
};

export default Results;