// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'coins.contract.market_chart',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_range_contract_coins_market_chart',
  description:
    'This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hr volume based on asset platform and particular token contract address**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      contract_address: {
        type: 'string',
      },
      from: {
        type: 'integer',
        description: 'starting date in UNIX timestamp',
      },
      to: {
        type: 'integer',
        description: 'ending date in UNIX timestamp',
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      precision: {
        type: 'string',
        description: 'decimal place for currency price value',
        enum: [
          'full',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
        ],
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { contract_address, ...body } = args as any;
  return client.coins.contract.marketChart.retrieveRange(contract_address, body);
};

export default { metadata, tool, handler };
