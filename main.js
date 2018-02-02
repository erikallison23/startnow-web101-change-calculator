//declares variables to the doc.
var inputP = document.getElementById('paid');
var inputD = document.getElementById('due');
var outputDr = document.getElementById('output-dollars');
var outputQ = document.getElementById('output-quarters');
var outputD = document.getElementById('output-dimes');
var outputN = document.getElementById('output-nickels');
var outputP = document.getElementById('output-pennies');
var calculate = document.getElementById('calculate-button');

//function that calculates the change.
function calculateChange() {

    //declared change amount
    var amountChange = (parseFloat(inputP.value) * 100) - (parseFloat(inputD.value) * 100);
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    //dolars calculation
    if (amountChange >= 100) {
        dollars = Math.floor(amountChange / 100);
        outputDr.innerText = dollars;
        amountChange = amountChange - (100 * dollars);
    }

    //quaters calculation
    if (amountChange >= 25) {
        quarters = Math.floor(amountChange / 25);
        outputQ.innerText = quarters;
        amountChange = amountChange - (25 * quarters);
    }

    //dimes calculation  
    if (amountChange >= 10) {
        dimes = Math.floor(amountChange / 10);
        outputD.innerText = dimes;
        amountChange = amountChange - (10 * dimes);
    }

    //nickels calculation   
    if (amountChange >= 5) {
        nickels = Math.floor(amountChange / 5);
        outputN.innerText = nickels;
        amountChange = amountChange - (5 * nickels);
    }
    //pennies calculation   

    if (amountChange >= 1) {
        pennies = Math.ceil(amountChange);
        outputP.innerText = pennies;
        amountChange = amountChange - pennies;
    }
};

//on click function 
calculate.onclick = function () {
    console.log('onclick');
    outputDr.innerText = '0';
    outputQ.innerText = '0';
    outputD.innerText = '0';
    outputN.innerText = '0';
    outputP.innerText = '0';
    calculateChange();
};