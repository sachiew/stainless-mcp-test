// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'simple',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_token_price_simple',
  description:
    'This endpoint allows you to **query one or more token prices using their token contract addresses**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      contract_addresses: {
        type: 'string',
        description: 'the contract address of a token',
      },
      vs_currencies: {
        type: 'string',
        description:
          'target currency of coins, comma-separated if querying more than 1 currency. <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      include_24hr_change: {
        type: 'boolean',
        description: 'include 24hr change <br> default: false',
      },
      include_24hr_vol: {
        type: 'boolean',
        description: 'include 24hr volume, default: false',
      },
      include_last_updated_at: {
        type: 'boolean',
        description: 'include last updated price time in UNIX , default: false',
      },
      include_market_cap: {
        type: 'boolean',
        description: 'include market capitalization, default: false',
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
  const { id, ...body } = args as any;
  return client.simple.getTokenPrice(id, body);
};

export default { metadata, tool, handler };
