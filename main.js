var inputP= document.getElementById('paid');
var inputD= document.getElementById('due');
var outputDr= document.getElementById('output-dollars');
var outputQ= document.getElementById('output-quarters');
var outputD= document.getElementById('output-dimes');
var outputN= document.getElementById('output-nickels');
var outputP= document.getElementById('output-pennies');
var calculate= document.getElementById('calculate-button');

function calculateChange(){

    var amountChange = (parseFloat(inputP.value)*100) - (parseFloat(inputD.value)*100);
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    
    console.log(amountChange);


    if (amountChange >= 100){
        dollars = Math.floor(amountChange / 100);
        outputDr.innerText = dollars;
        amountChange = amountChange - (100 * dollars);
        console.log(amountChange);
    }

    if (amountChange >= 25){
        quarters = Math.floor(amountChange / 25);
        outputQ.innerText = quarters;
        amountChange = amountChange - (25 * quarters);
        console.log(amountChange);
    
    }
  
    
    if (amountChange >=10) {
        dimes = Math.floor(amountChange / 10);
        outputD.innerText = dimes;
        amountChange = amountChange - (10 * dimes);
        console.log(amountChange);
    
    }   
    
    if (amountChange >=5) {
        nickels = Math.floor(amountChange / 5);
        outputN.innerText = nickels;
        amountChange = amountChange - (5 * nickels);
        console.log(amountChange);
   
    }
    if (amountChange >=1) {
        pennies = Math.ceil(amountChange);
        outputP.innerText = pennies;
        amountChange = amountChange - pennies;
        console.log(amountChange);
    }
   
};
    
calculate.onclick= function() {
    console.log('onclick');
    outputDr.innerText = '0';
    outputQ.innerText = '0';
    outputD.innerText = '0';
    outputN.innerText = '0';
    outputP.innerText = '0';
    calculateChange();
}