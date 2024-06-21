export async function cryptoToCurrency(cryptoId, currencyId) {
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=${currencyId}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Erro ao buscar preço: ${response.statusText}`);
      }
      const data = await response.json();
      return data[cryptoId][currencyId];
    } catch (error) {
      console.error("Erro ao buscar preço na CoinGecko:", error);
      throw error;
    }
  }