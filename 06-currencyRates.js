class Currency {
	constructor (){
		this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=scwbtO2lGMPObYvhM8Od1iWT8y0C5tIRCxdlGZET&base_currencies=";
		
	}
	async exchange(amount, firstCurrency, secondCurrency){
		const response = await fetch(`${this.url}${firstCurrency}`);
		const result = await response.json();
		//console.log(result.data[secondCurrency]);
		const exchangeResult = amount * result.data[secondCurrency];

		return exchangeResult;

	}
}