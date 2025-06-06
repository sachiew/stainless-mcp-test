// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'ping',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ping',
  operationId: 'ping-server',
};

export const tool: Tool = {
  name: 'check_status_ping',
  description: 'This endpoint allows you to **check the API server status**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.ping.checkStatus());
};

export default { metadata, tool, handler };
