// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchanges/{id}',
  operationId: 'exchanges-id',
};

export const tool: Tool = {
  name: 'retrieve_exchanges',
  description:
    'This endpoint allows you to **query exchange’s data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange’s ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.exchanges.retrieve(id));
};

export default { metadata, tool, handler };
