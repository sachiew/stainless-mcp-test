// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'coins.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/categories',
  operationId: 'coins-categories',
};

export const tool: Tool = {
  name: 'list_with_market_data_coins_categories',
  description:
    'This endpoint allows you to **query all the coins categories with market data (market cap, volume, ...) on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        description: 'sort results by field, default: market_cap_desc',
        enum: [
          'market_cap_desc',
          'market_cap_asc',
          'name_desc',
          'name_asc',
          'market_cap_change_24h_desc',
          'market_cap_change_24h_asc',
        ],
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.coins.categories.listWithMarketData(body));
};

export default { metadata, tool, handler };
