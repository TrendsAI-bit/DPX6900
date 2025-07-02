const HELIUS_API_KEY = 'd966b6f9-d9d7-4e34-a109-2cf782d34e87';
const HELIUS_RPC_URL = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;

const TOKEN_ADDRESS = '4Zxwp6FmjFXBSKE7wNZPT8V5WdfMTEAhpqnEqBvDpump';

export const fetchTokenData = async () => {
  try {
    // First, get token metadata
    const metadataResponse = await fetch(HELIUS_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'token-metadata',
        method: 'getAsset',
        params: {
          id: TOKEN_ADDRESS,
        },
      }),
    });

    if (!metadataResponse.ok) {
      throw new Error('Failed to fetch token metadata');
    }

    const metadataData = await metadataResponse.json();

    // Get token supply
    const supplyResponse = await fetch(HELIUS_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'token-supply',
        method: 'getTokenSupply',
        params: [TOKEN_ADDRESS],
      }),
    });

    if (!supplyResponse.ok) {
      throw new Error('Failed to fetch token supply');
    }

    const supplyData = await supplyResponse.json();

    // For now, we'll return the supply data and try to estimate market cap
    // Note: Without direct price data from Helius, we might need to use pump.fun API or other sources
    return {
      supply: supplyData.result?.value?.uiAmount || 0,
      decimals: supplyData.result?.value?.decimals || 9,
      metadata: metadataData.result,
      // We'll add market cap calculation when we have price data
      marketCap: null,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching token data:', error);
    throw error;
  }
};

// Alternative approach: Try to get data from pump.fun API directly
export const fetchPumpFunData = async () => {
  try {
    // This is a common approach for pump.fun tokens
    const response = await fetch(`https://frontend-api.pump.fun/coins/${TOKEN_ADDRESS}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch pump.fun data');
    }

    const data = await response.json();
    
    return {
      marketCap: data.market_cap || data.usd_market_cap,
      price: data.price_usd || data.price,
      supply: data.total_supply,
      volume24h: data.volume_24h,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching pump.fun data:', error);
    // Fallback to Helius if pump.fun fails
    return await fetchTokenData();
  }
};

// Main function to get market data with fallbacks
export const getMarketData = async () => {
  try {
    // Try pump.fun first as it likely has more complete market data
    return await fetchPumpFunData();
  } catch (error) {
    console.error('Pump.fun API failed, trying Helius:', error);
    try {
      return await fetchTokenData();
    } catch (heliusError) {
      console.error('All APIs failed:', heliusError);
      // Return fallback data
      return {
        marketCap: 7992, // Last known value
        price: null,
        supply: null,
        lastUpdated: new Date().toISOString(),
        error: 'Failed to fetch live data',
      };
    }
  }
}; 