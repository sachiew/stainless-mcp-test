// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'coins',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/list',
  operationId: 'coins-list',
};

export const tool: Tool = {
  name: 'list_coins',
  description:
    'This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**',
  inputSchema: {
    type: 'object',
    properties: {
      include_platform: {
        type: 'boolean',
        description: "include platform and token's contract addresses, default: false",
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.coins.list(body);
};

export default { metadata, tool, handler };
