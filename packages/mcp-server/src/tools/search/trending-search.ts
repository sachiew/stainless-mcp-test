// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/search/trending',
  operationId: 'trending-search',
};

export const tool: Tool = {
  name: 'trending_search',
  description:
    'This endpoint allows you **query trending search coins, NFTs and categories on CoinGecko in the last 24 hours**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  return client.search.trending();
};

export default { metadata, tool, handler };
