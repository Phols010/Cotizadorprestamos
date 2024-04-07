var loanAmountSlider = document.getElementById("loanAmount");
var loanAmountOutput = document.getElementById("loanAmountOutput");
var loanDurationSlider = document.getElementById("loanDuration");
var loanDurationOutput = document.getElementById("loanDurationOutput");
var monthlyPaymentOutput = document.getElementById("monthlyPayment");
var totalPaymentOutput = document.getElementById("totalPayment");

loanAmountOutput.innerHTML = "$" + loanAmountSlider.value;
loanDurationOutput.innerHTML = loanDurationSlider.value + " meses";

loanAmountSlider.oninput = function() {
    loanAmountOutput.innerHTML = "$" + this.value;
    calculatePayments();
};

loanDurationSlider.oninput = function() {
    loanDurationOutput.innerHTML = this.value + " meses";
    calculatePayments();
};

function calculatePayments() {
    var loanAmount = parseFloat(loanAmountSlider.value);
    var loanDuration = parseInt(loanDurationSlider.value);
    var monthlyInterestRate = 0.20 / 12; // Tasa de interés mensual del 20%
    
    // Calcula el pago mensual
    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanDuration));
    monthlyPaymentOutput.innerHTML = "$" + monthlyPayment.toFixed(2);

    // Calcula el total a pagar
    var totalPayment = monthlyPayment * loanDuration;
    totalPaymentOutput.innerHTML = "$" + totalPayment.toFixed(2);
}

function submitLoanRequest() {
    var loanAmount = loanAmountSlider.value;
    var loanDuration = loanDurationSlider.value;
    // Aquí puedes agregar la lógica para enviar la solicitud de préstamo
    alert("Solicitud de préstamo por $" + loanAmount + " a " + loanDuration + " meses enviada.");
}
