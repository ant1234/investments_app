import React, {useState} from "react";
import './InvestmentForm.css';

const InvestmentForm = props => {

    // Form submission
    // Reset button being clicked
    // User input changing (in the various <input /> fields)
   
    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContribution, setYearlyContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    const currentSavingsHandler = event => {
      setCurrentSavings(event.target.value);
    };

    const yearlyContributionHandler = event => {
      setYearlyContribution(event.target.value);
    };

    const expectedReturnHandler = event => {
      setExpectedReturn(event.target.value);
    };

    const durationHandler = event => {
      setDuration(event.target.value);
    };

    const onResetHandler = () => {
      setCurrentSavings('');
      setYearlyContribution('');
      setExpectedReturn('');
      setDuration('');
    };

    const onSubmitHandler = event => {
      event.preventDefault();
      
      const submissionData = {
        savings: currentSavings,
        contribution: yearlyContribution,
        return: expectedReturn,
        duration: duration,
      };

      // pass data back to App.js.
      props.onSaveInvestmentData(submissionData);

    };

    return (
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} onChange={currentSavingsHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={yearlyContributionHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedReturn} onChange={expectedReturnHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={duration} onChange={durationHandler}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={onResetHandler}>
            Reset
          </button>
          <button type="submit" className="button" onClick={onSubmitHandler}>
            Calculate
          </button>
        </p>
      </form>
    );
};

export default InvestmentForm;