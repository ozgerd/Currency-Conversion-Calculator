const amountInput = document.querySelector("#amountBox");
const firstOption = document.querySelector ("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currencyRates = new Currency();

runEventListeners();

function runEventListeners(){
	amountInput.addEventListener("input", exchange);

}

function exchange(){
	//console.log (typeof amountInput.value); 
	const amount = Number(amountInput.value.trim());
	const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
	const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

	//console.log(firstOptionValue, secondOptionValue)
	
	currencyRates.exchange(amount, firstOptionValue, secondOptionValue).then((result) =>{resultInput.value = result.toFixed(3)})

}