# Sa Test TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export SA_TEST_API_KEY="My API Key"
npx -y sa-test-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "sa_test_1_api": {
      "command": "npx",
      "args": ["-y", "sa-test-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "SA_TEST_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "sa-test-mcp/server";

// import a specific tool
import checkStatusPing from "sa-test-mcp/tools/ping/check-status-ping";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [checkStatusPing, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `ping`:

- `check_status_ping` (`read`): This endpoint allows you to **check the API server status**

### Resource `simple`:

- `get_price_simple` (`read`): This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**
- `get_token_price_simple` (`read`): This endpoint allows you to **query one or more token prices using their token contract addresses**
- `list_supported_currencies_simple` (`read`): This endpoint allows you to **query all the supported currencies on CoinGecko**

### Resource `coins`:

- `retrieve_coins` (`read`): This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin ID**
- `list_coins` (`read`): This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**
- `list_with_market_data_coins` (`read`): This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**
- `retrieve_history_coins` (`read`): This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, ...) at a given date for a coin based on a particular coin ID**
- `retrieve_ohlc_coins` (`read`): This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID**
- `retrieve_tickers_coins` (`read`): This endpoint allows you to **query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**

### Resource `coins.market_chart`:

- `retrieve_coins_market_chart` (`read`): This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID**
- `retrieve_range_coins_market_chart` (`read`): This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**

### Resource `coins.contract`:

- `retrieve_coins_contract` (`read`): This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform and a particular token contract address**

### Resource `coins.contract.market_chart`:

- `retrieve_contract_coins_market_chart` (`read`): This endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hr volume based on asset platform and particular token contract address**
- `retrieve_range_contract_coins_market_chart` (`read`): This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hr volume based on asset platform and particular token contract address**

### Resource `coins.categories`:

- `list_coins_categories` (`read`): This endpoint allows you to **query all the coins categories on CoinGecko**
- `list_with_market_data_coins_categories` (`read`): This endpoint allows you to **query all the coins categories with market data (market cap, volume, ...) on CoinGecko**

### Resource `asset_platforms`:

- `list_asset_platforms` (`read`): This endpoint allows you to **query all the asset platforms on CoinGecko**

### Resource `exchanges`:

- `retrieve_exchanges` (`read`): This endpoint allows you to **query exchange’s data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange’s ID**
- `list_exchanges` (`read`): This endpoint allows you to **query all the supported exchanges with exchanges’ data (ID, name, country, ...) that have active trading volumes on CoinGecko**
- `list_id_map_exchanges` (`read`): This endpoint allows you to **query all the exchanges with ID and name**
- `retrieve_tickers_exchanges` (`read`): This endpoint allows you to **query exchange's tickers based on exchange’s ID**
- `retrieve_volume_chart_exchanges` (`read`): This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s ID**

### Resource `derivatives`:

- `list_derivatives` (`read`): This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**

### Resource `derivatives.exchanges`:

- `retrieve_derivatives_exchanges` (`read`): This endpoint allows you to **query the derivatives exchange’s related data (ID, name, open interest, ...) based on the exchanges’ ID**
- `list_derivatives_exchanges` (`read`): This endpoint allows you to **query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko**
- `id_map_derivatives_exchanges` (`read`): This endpoint allows you to **query all the derivatives exchanges with ID and name on CoinGecko**

### Resource `nfts`:

- `retrieve_nfts` (`read`): This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**
- `list_nfts` (`read`): This endpoint allows you to **query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko**
- `retrieve_by_contract_nfts` (`read`): This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection contract address and respective asset platform**

### Resource `exchange_rates`:

- `list_exchange_rates` (`read`): This endpoint allows you to **query BTC exchange rates with other currencies**

### Resource `search`:

- `query_search` (`read`): This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**
- `trending_search` (`read`): This endpoint allows you **query trending search coins, NFTs and categories on CoinGecko in the last 24 hours**

### Resource `global`:

- `retrieve_global` (`read`): This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**
- `retrieve_decentralized_finance_global` (`read`): This endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**

### Resource `companies`:

- `retrieve_public_treasury_companies` (`read`): This endpoint allows you **query public companies’ Bitcoin or Ethereum holdings**
