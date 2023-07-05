import logo from './assets/investment-calculator-logo.png';
import Header from './components/Header';
import InvestmentForm from './components/InvestmentForm';
import InvestmentResult from './components/InvestmentResult';
import React, {useState} from 'react';

function App() {

  const [calcYearlyData, setCalcYearlyData] = useState('');

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        yearlyContribution: yearlyContribution,
        currentSavings: currentSavings,
      });
    }
    // do something with yearlyData ...
    setCalcYearlyData(yearlyData);
  };

  return (
    <div>

      {/* Header component */}
      <Header logo={logo}/>

      {/* InvestmentForm component */}
      <InvestmentForm onSaveInvestmentData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {/* InvestmentResult component */}
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {Object.values(calcYearlyData).map((calcYearlyData) => (
        <InvestmentResult
          year={calcYearlyData.year}
          savingsEndOfYear={calcYearlyData.savingsEndOfYear}
          yearlyInterest={calcYearlyData.yearlyInterest - calcYearlyData.currentSavings - calcYearlyData.yearlyContribution * calcYearlyData.year}
          yearlyContribution={calcYearlyData.currentSavings + calcYearlyData.yearlyContribution * calcYearlyData.year}
        />   
      ))}
        </tbody>
      </table>
      
      <InvestmentResult formData={calcYearlyData}/>
    </div>
  );
}

export default App;
