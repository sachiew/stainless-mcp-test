// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'query_search',
  description: 'This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'search query',
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.search.query(body);
};

export default { metadata, tool, handler };
