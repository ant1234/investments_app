import React, {useState} from "react";
import './InvestmentResult.css';

const InvestmentResult = props => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });  

  console.log(props);

    return (
          <tr>
            <td>{props.year}</td>
            <td>{formatter.format(props.savingsEndOfYear)}</td>
            <td>{formatter.format(props.yearlyInterest)}</td>
            <td>{formatter.format(props.yearlyContribution)}</td>
            <td>{formatter.format(props.yearlyContribution)}</td>
          </tr>
    );
};

export default InvestmentResult;