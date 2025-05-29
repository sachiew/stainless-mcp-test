// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'nfts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/list',
  operationId: 'nfts-list',
};

export const tool: Tool = {
  name: 'list_nfts',
  description:
    'This endpoint allows you to **query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        description: 'use this to sort the order of responses',
        enum: [
          'h24_volume_usd_asc',
          'h24_volume_usd_desc',
          'h24_volume_native_asc',
          'h24_volume_native_desc',
          'floor_price_native_asc',
          'floor_price_native_desc',
          'market_cap_native_asc',
          'market_cap_native_desc',
          'market_cap_usd_asc',
          'market_cap_usd_desc',
        ],
      },
      page: {
        type: 'integer',
        description: 'page through results',
      },
      per_page: {
        type: 'integer',
        description: 'total results per page <br> Valid values: 1...250',
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.nfts.list(body);
};

export default { metadata, tool, handler };
