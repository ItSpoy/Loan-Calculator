function calculateLoan(){
    loanamountvalue = document.getElementById("loan-amount").value;
    interestratevalue = document.getElementById("interest-rate").value;
    monthstopayvalue = document.getElementById("months-to-pay").value;

    interest = (loanamountvalue * (interestratevalue * 0.01 ))/monthstopayvalue;
    monthlypayment = ( loanamountvalue / monthstopayvalue + interest).toFixed(2);

    document.getElementById(
        "payment"
    ).innerHTML = `Monthly Payment : ${monthlypayment}`;
}