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

// Try multiple pump.fun API endpoints
export const fetchPumpFunData = async () => {
  const endpoints = [
    `https://frontend-api.pump.fun/coins/${TOKEN_ADDRESS}`,
    `https://pump.fun/coin/${TOKEN_ADDRESS}`,
    `https://api.pump.fun/coins/${TOKEN_ADDRESS}`,
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`Trying endpoint: ${endpoint}`);
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      if (!response.ok) {
        console.log(`Endpoint ${endpoint} failed with status: ${response.status}`);
        continue;
      }

      const data = await response.json();
      console.log(`Data from ${endpoint}:`, data);
      
      // Try different possible field names for market cap
      const marketCap = data.market_cap || 
                       data.usd_market_cap || 
                       data.marketCap || 
                       data.market_cap_usd ||
                       data.mcap ||
                       (data.price && data.supply ? data.price * data.supply : null);

      const price = data.price_usd || 
                   data.price || 
                   data.priceUsd || 
                   data.current_price;

      return {
        marketCap: marketCap,
        price: price,
        supply: data.total_supply || data.supply || data.totalSupply,
        volume24h: data.volume_24h || data.volume24h || data.dailyVolume,
        lastUpdated: new Date().toISOString(),
        source: endpoint,
      };
    } catch (error) {
      console.error(`Error with endpoint ${endpoint}:`, error);
      continue;
    }
  }

  throw new Error('All pump.fun endpoints failed');
};

// Alternative: Try to scrape data from pump.fun page or use other APIs
export const fetchAlternativeData = async () => {
  try {
    // Try DexScreener API as backup
    const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${TOKEN_ADDRESS}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('DexScreener API failed');
    }

    const data = await response.json();
    console.log('DexScreener data:', data);

    if (data.pairs && data.pairs.length > 0) {
      const pair = data.pairs[0]; // Get the first trading pair
      const marketCap = pair.marketCap || pair.fdv; // fully diluted value
      const price = pair.priceUsd;
      
      return {
        marketCap: marketCap,
        price: parseFloat(price),
        supply: null,
        volume24h: pair.volume?.h24,
        lastUpdated: new Date().toISOString(),
        source: 'dexscreener',
      };
    }

    throw new Error('No trading pairs found on DexScreener');
  } catch (error) {
    console.error('DexScreener API error:', error);
    throw error;
  }
};

// Main function to get market data with multiple fallbacks
export const getMarketData = async () => {
  try {
    // Try pump.fun first
    console.log('Attempting to fetch from pump.fun...');
    const pumpData = await fetchPumpFunData();
    if (pumpData.marketCap) {
      console.log('Successfully got market cap from pump.fun:', pumpData.marketCap);
      return pumpData;
    }
  } catch (error) {
    console.error('Pump.fun API failed:', error);
  }

  try {
    // Try DexScreener as backup
    console.log('Attempting to fetch from DexScreener...');
    const dexData = await fetchAlternativeData();
    if (dexData.marketCap) {
      console.log('Successfully got market cap from DexScreener:', dexData.marketCap);
      return dexData;
    }
  } catch (error) {
    console.error('DexScreener API failed:', error);
  }

  try {
    // Try Helius as last resort
    console.log('Attempting to fetch from Helius...');
    return await fetchTokenData();
  } catch (heliusError) {
    console.error('All APIs failed:', heliusError);
    // Return fallback data with updated value
    return {
      marketCap: 9000, // Updated fallback value to 9K as user mentioned
      price: null,
      supply: null,
      lastUpdated: new Date().toISOString(),
      error: 'Failed to fetch live data - using fallback',
      source: 'fallback',
    };
  }
}; 