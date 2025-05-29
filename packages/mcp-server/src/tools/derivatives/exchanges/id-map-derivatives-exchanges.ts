// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'derivatives.exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/derivatives/exchanges/list',
  operationId: 'derivatives-exchanges-list',
};

export const tool: Tool = {
  name: 'id_map_derivatives_exchanges',
  description:
    'This endpoint allows you to **query all the derivatives exchanges with ID and name on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  return client.derivatives.exchanges.idMap();
};

export default { metadata, tool, handler };
