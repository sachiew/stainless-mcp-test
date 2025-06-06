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
  httpPath: '/coins/categories/list',
  operationId: 'coins-categories-list',
};

export const tool: Tool = {
  name: 'list_coins_categories',
  description: 'This endpoint allows you to **query all the coins categories on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.coins.categories.list());
};

export default { metadata, tool, handler };
