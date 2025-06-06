// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/search',
  operationId: 'search-data',
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

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.search.query(body));
};

export default { metadata, tool, handler };
