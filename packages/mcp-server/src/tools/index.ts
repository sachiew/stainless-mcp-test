// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SaTest from 'sa-test';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import check_status_ping from './ping/check-status-ping';
import get_price_simple from './simple/get-price-simple';
import get_token_price_simple from './simple/get-token-price-simple';
import list_supported_currencies_simple from './simple/list-supported-currencies-simple';
import retrieve_coins from './coins/retrieve-coins';
import list_coins from './coins/list-coins';
import list_with_market_data_coins from './coins/list-with-market-data-coins';
import retrieve_history_coins from './coins/retrieve-history-coins';
import retrieve_ohlc_coins from './coins/retrieve-ohlc-coins';
import retrieve_tickers_coins from './coins/retrieve-tickers-coins';
import retrieve_coins_market_chart from './coins/market-chart/retrieve-coins-market-chart';
import retrieve_range_coins_market_chart from './coins/market-chart/retrieve-range-coins-market-chart';
import retrieve_coins_contract from './coins/contract/retrieve-coins-contract';
import retrieve_contract_coins_market_chart from './coins/contract/market-chart/retrieve-contract-coins-market-chart';
import retrieve_range_contract_coins_market_chart from './coins/contract/market-chart/retrieve-range-contract-coins-market-chart';
import list_coins_categories from './coins/categories/list-coins-categories';
import list_with_market_data_coins_categories from './coins/categories/list-with-market-data-coins-categories';
import list_asset_platforms from './asset-platforms/list-asset-platforms';
import retrieve_exchanges from './exchanges/retrieve-exchanges';
import list_exchanges from './exchanges/list-exchanges';
import list_id_map_exchanges from './exchanges/list-id-map-exchanges';
import retrieve_tickers_exchanges from './exchanges/retrieve-tickers-exchanges';
import retrieve_volume_chart_exchanges from './exchanges/retrieve-volume-chart-exchanges';
import list_derivatives from './derivatives/list-derivatives';
import retrieve_derivatives_exchanges from './derivatives/exchanges/retrieve-derivatives-exchanges';
import list_derivatives_exchanges from './derivatives/exchanges/list-derivatives-exchanges';
import id_map_derivatives_exchanges from './derivatives/exchanges/id-map-derivatives-exchanges';
import retrieve_nfts from './nfts/retrieve-nfts';
import list_nfts from './nfts/list-nfts';
import retrieve_by_contract_nfts from './nfts/retrieve-by-contract-nfts';
import list_exchange_rates from './exchange-rates/list-exchange-rates';
import query_search from './search/query-search';
import trending_search from './search/trending-search';
import retrieve_global from './global/retrieve-global';
import retrieve_decentralized_finance_global from './global/retrieve-decentralized-finance-global';
import retrieve_public_treasury_companies from './companies/retrieve-public-treasury-companies';

export type HandlerFunction = (client: SaTest, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(check_status_ping);
addEndpoint(get_price_simple);
addEndpoint(get_token_price_simple);
addEndpoint(list_supported_currencies_simple);
addEndpoint(retrieve_coins);
addEndpoint(list_coins);
addEndpoint(list_with_market_data_coins);
addEndpoint(retrieve_history_coins);
addEndpoint(retrieve_ohlc_coins);
addEndpoint(retrieve_tickers_coins);
addEndpoint(retrieve_coins_market_chart);
addEndpoint(retrieve_range_coins_market_chart);
addEndpoint(retrieve_coins_contract);
addEndpoint(retrieve_contract_coins_market_chart);
addEndpoint(retrieve_range_contract_coins_market_chart);
addEndpoint(list_coins_categories);
addEndpoint(list_with_market_data_coins_categories);
addEndpoint(list_asset_platforms);
addEndpoint(retrieve_exchanges);
addEndpoint(list_exchanges);
addEndpoint(list_id_map_exchanges);
addEndpoint(retrieve_tickers_exchanges);
addEndpoint(retrieve_volume_chart_exchanges);
addEndpoint(list_derivatives);
addEndpoint(retrieve_derivatives_exchanges);
addEndpoint(list_derivatives_exchanges);
addEndpoint(id_map_derivatives_exchanges);
addEndpoint(retrieve_nfts);
addEndpoint(list_nfts);
addEndpoint(retrieve_by_contract_nfts);
addEndpoint(list_exchange_rates);
addEndpoint(query_search);
addEndpoint(trending_search);
addEndpoint(retrieve_global);
addEndpoint(retrieve_decentralized_finance_global);
addEndpoint(retrieve_public_treasury_companies);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
