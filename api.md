# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingCheckStatusResponse</a></code>

Methods:

- <code title="get /ping">client.ping.<a href="./src/resources/ping.ts">checkStatus</a>() -> PingCheckStatusResponse</code>

# Simple

Types:

- <code><a href="./src/resources/simple.ts">SimpleGetPriceResponse</a></code>
- <code><a href="./src/resources/simple.ts">SimpleGetTokenPriceResponse</a></code>
- <code><a href="./src/resources/simple.ts">SimpleListSupportedCurrenciesResponse</a></code>

Methods:

- <code title="get /simple/price">client.simple.<a href="./src/resources/simple.ts">getPrice</a>({ ...params }) -> SimpleGetPriceResponse</code>
- <code title="get /simple/token_price/{id}">client.simple.<a href="./src/resources/simple.ts">getTokenPrice</a>(id, { ...params }) -> SimpleGetTokenPriceResponse</code>
- <code title="get /simple/supported_vs_currencies">client.simple.<a href="./src/resources/simple.ts">listSupportedCurrencies</a>() -> SimpleListSupportedCurrenciesResponse</code>

# Coins

Types:

- <code><a href="./src/resources/coins/coins.ts">CoinsDataBase</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinsTickers</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinListResponse</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinListWithMarketDataResponse</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinRetrieveHistoryResponse</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinRetrieveOhlcResponse</a></code>

Methods:

- <code title="get /coins/{id}">client.coins.<a href="./src/resources/coins/coins.ts">retrieve</a>(id, { ...params }) -> CoinsDataBase</code>
- <code title="get /coins/list">client.coins.<a href="./src/resources/coins/coins.ts">list</a>({ ...params }) -> CoinListResponse</code>
- <code title="get /coins/markets">client.coins.<a href="./src/resources/coins/coins.ts">listWithMarketData</a>({ ...params }) -> CoinListWithMarketDataResponse</code>
- <code title="get /coins/{id}/history">client.coins.<a href="./src/resources/coins/coins.ts">retrieveHistory</a>(id, { ...params }) -> CoinRetrieveHistoryResponse</code>
- <code title="get /coins/{id}/ohlc">client.coins.<a href="./src/resources/coins/coins.ts">retrieveOhlc</a>(id, { ...params }) -> CoinRetrieveOhlcResponse</code>
- <code title="get /coins/{id}/tickers">client.coins.<a href="./src/resources/coins/coins.ts">retrieveTickers</a>(id, { ...params }) -> CoinsTickers</code>

## MarketChart

Types:

- <code><a href="./src/resources/coins/market-chart.ts">CoinsMarketChart</a></code>
- <code><a href="./src/resources/coins/market-chart.ts">CoinsMarketChartRange</a></code>

Methods:

- <code title="get /coins/{id}/market_chart">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">retrieve</a>(id, { ...params }) -> CoinsMarketChart</code>
- <code title="get /coins/{id}/market_chart/range">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">retrieveRange</a>(id, { ...params }) -> CoinsMarketChartRange</code>

## Contract

Methods:

- <code title="get /coins/{id}/contract/{contract_address}">client.coins.contract.<a href="./src/resources/coins/contract/contract.ts">retrieve</a>(contractAddress, { ...params }) -> CoinsDataBase</code>

### MarketChart

Methods:

- <code title="get /coins/{id}/contract/{contract_address}/market_chart">client.coins.contract.marketChart.<a href="./src/resources/coins/contract/market-chart.ts">retrieve</a>(contractAddress, { ...params }) -> CoinsMarketChart</code>
- <code title="get /coins/{id}/contract/{contract_address}/market_chart/range">client.coins.contract.marketChart.<a href="./src/resources/coins/contract/market-chart.ts">retrieveRange</a>(contractAddress, { ...params }) -> CoinsMarketChartRange</code>

## Categories

Types:

- <code><a href="./src/resources/coins/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/coins/categories.ts">CategoryListWithMarketDataResponse</a></code>

Methods:

- <code title="get /coins/categories/list">client.coins.categories.<a href="./src/resources/coins/categories.ts">list</a>() -> CategoryListResponse</code>
- <code title="get /coins/categories">client.coins.categories.<a href="./src/resources/coins/categories.ts">listWithMarketData</a>({ ...params }) -> CategoryListWithMarketDataResponse</code>

# AssetPlatforms

Types:

- <code><a href="./src/resources/asset-platforms.ts">AssetPlatformListResponse</a></code>

Methods:

- <code title="get /asset_platforms">client.assetPlatforms.<a href="./src/resources/asset-platforms.ts">list</a>({ ...params }) -> AssetPlatformListResponse</code>

# Exchanges

Types:

- <code><a href="./src/resources/exchanges.ts">ExchangeRetrieveResponse</a></code>
- <code><a href="./src/resources/exchanges.ts">ExchangeListResponse</a></code>
- <code><a href="./src/resources/exchanges.ts">ExchangeListIDMapResponse</a></code>
- <code><a href="./src/resources/exchanges.ts">ExchangeRetrieveVolumeChartResponse</a></code>

Methods:

- <code title="get /exchanges/{id}">client.exchanges.<a href="./src/resources/exchanges.ts">retrieve</a>(id) -> ExchangeRetrieveResponse</code>
- <code title="get /exchanges">client.exchanges.<a href="./src/resources/exchanges.ts">list</a>({ ...params }) -> ExchangeListResponse</code>
- <code title="get /exchanges/list">client.exchanges.<a href="./src/resources/exchanges.ts">listIDMap</a>({ ...params }) -> ExchangeListIDMapResponse</code>
- <code title="get /exchanges/{id}/tickers">client.exchanges.<a href="./src/resources/exchanges.ts">retrieveTickers</a>(id, { ...params }) -> CoinsTickers</code>
- <code title="get /exchanges/{id}/volume_chart">client.exchanges.<a href="./src/resources/exchanges.ts">retrieveVolumeChart</a>(id, { ...params }) -> ExchangeRetrieveVolumeChartResponse</code>

# Derivatives

Types:

- <code><a href="./src/resources/derivatives/derivatives.ts">TickersList</a></code>

Methods:

- <code title="get /derivatives">client.derivatives.<a href="./src/resources/derivatives/derivatives.ts">list</a>() -> TickersList</code>

## Exchanges

Types:

- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeRetrieveResponse</a></code>
- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeListResponse</a></code>
- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeIDMapResponse</a></code>

Methods:

- <code title="get /derivatives/exchanges/{id}">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">retrieve</a>(id, { ...params }) -> ExchangeRetrieveResponse</code>
- <code title="get /derivatives/exchanges">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">list</a>({ ...params }) -> ExchangeListResponse</code>
- <code title="get /derivatives/exchanges/list">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">idMap</a>() -> ExchangeIDMapResponse</code>

# NFTs

Types:

- <code><a href="./src/resources/nfts.ts">NFTData</a></code>
- <code><a href="./src/resources/nfts.ts">NFTListResponse</a></code>

Methods:

- <code title="get /nfts/{id}">client.nfts.<a href="./src/resources/nfts.ts">retrieve</a>(id) -> NFTData</code>
- <code title="get /nfts/list">client.nfts.<a href="./src/resources/nfts.ts">list</a>({ ...params }) -> NFTListResponse</code>
- <code title="get /nfts/{asset_platform_id}/contract/{contract_address}">client.nfts.<a href="./src/resources/nfts.ts">retrieveByContract</a>(contractAddress, { ...params }) -> NFTData</code>

# ExchangeRates

Types:

- <code><a href="./src/resources/exchange-rates.ts">ExchangeRateListResponse</a></code>

Methods:

- <code title="get /exchange_rates">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">list</a>() -> ExchangeRateListResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchQueryResponse</a></code>
- <code><a href="./src/resources/search.ts">SearchTrendingResponse</a></code>

Methods:

- <code title="get /search">client.search.<a href="./src/resources/search.ts">query</a>({ ...params }) -> SearchQueryResponse</code>
- <code title="get /search/trending">client.search.<a href="./src/resources/search.ts">trending</a>() -> SearchTrendingResponse</code>

# Global

Types:

- <code><a href="./src/resources/global.ts">GlobalRetrieveResponse</a></code>
- <code><a href="./src/resources/global.ts">GlobalRetrieveDecentralizedFinanceResponse</a></code>

Methods:

- <code title="get /global">client.global.<a href="./src/resources/global.ts">retrieve</a>() -> GlobalRetrieveResponse</code>
- <code title="get /global/decentralized_finance_defi">client.global.<a href="./src/resources/global.ts">retrieveDecentralizedFinance</a>() -> GlobalRetrieveDecentralizedFinanceResponse</code>

# Companies

Types:

- <code><a href="./src/resources/companies.ts">CompanyRetrievePublicTreasuryResponse</a></code>

Methods:

- <code title="get /companies/public_treasury/{coin_id}">client.companies.<a href="./src/resources/companies.ts">retrievePublicTreasury</a>(coinID) -> CompanyRetrievePublicTreasuryResponse</code>
