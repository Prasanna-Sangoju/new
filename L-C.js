 /*function calculateLoan() {
     const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
     const InterestRateValue = parseFloat(document.getElementById("interest-rate").value);

    const MonthsToPayValue = parseFloat(document.getElementById("months-to-Pay").value);

    const interest = (loanAmountValue * (InterestRateValue * 0.01)) / MonthsToPayValue;

    const monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML =  `Monthly Payment: ${monthlyPayment} `;
  }*/

/*function calculate() {
    loanAmountValue = document.getElementById("loan-amount").value;

    interestRateValue = document.getElementById("interest-rate").value;

    MonthsToPayValue =  document.getElementById("months-to-pay").value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

    monthlyPayment =  (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}*/

function calculateLoan() {
    const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    const interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    const monthsToPayValue = parseFloat(document.getElementById("months-to-pay").value);

    const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
    const monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}

