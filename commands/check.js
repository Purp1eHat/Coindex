const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            const api = new CryptoAPI(key);

            // Build the request URL according to the CoinMarketCap API standards
            const url = `${api.baseUrl}?CMC_PRO_API_KEY=${key}&symbol=${cmd.coin}&convert=${cmd.cur}`;
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

            // Log the fetched price data
            console.log(priceOutputData);
        } catch (error) {
            console.error("Error: " + error.message.red);
        }
    }
};

module.exports = check;
