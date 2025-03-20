const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
    }

    async getPriceData(coinOptions, curOption) {
        try {
            const res = await axios.get(this.baseUrl, {
                params: { symbol: coinOptions, convert: curOption },
                headers: { 'X-CMC_PRO_API_KEY': this.apiKey }
            });

            const coins = res.data.data;
            let output = '';

            for (const coin in coins) {
                const data = coins[coin];
                output += `Coin: ${data.name} (${data.symbol.yellow}) | Price: $${data.quote[curOption].price.toFixed(2)} | Market Cap: $${data.quote[curOption].market_cap.toLocaleString()}\n`;
            }

            return output;
            

        } catch (error) {
            console.error(`Error: ${error.response ? error.response.data.status.error_message : error.message}`.red);
        }
    }
}

module.exports = CryptoAPI;
