// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'derivatives.exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/derivatives/exchanges/{id}',
  operationId: 'derivatives-exchanges-id',
};

export const tool: Tool = {
  name: 'retrieve_derivatives_exchanges',
  description:
    'This endpoint allows you to **query the derivatives exchange’s related data (ID, name, open interest, ...) based on the exchanges’ ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      include_tickers: {
        type: 'string',
        description: 'include tickers data',
        enum: ['all', 'unexpired'],
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.derivatives.exchanges.retrieve(id, body);
};

export default { metadata, tool, handler };
