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
  httpPath: '/exchanges/list',
  operationId: 'exchanges-list',
};

export const tool: Tool = {
  name: 'list_id_map_exchanges',
  description: 'This endpoint allows you to **query all the exchanges with ID and name**',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        description: 'filter by status of exchanges, default: active',
        enum: ['active', 'inactive'],
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.exchanges.listIDMap(body));
};

export default { metadata, tool, handler };
