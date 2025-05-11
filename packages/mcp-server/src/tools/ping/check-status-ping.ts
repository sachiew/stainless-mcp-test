// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test';

export const metadata: Metadata = {
  resource: 'ping',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'check_status_ping',
  description: 'This endpoint allows you to **check the API server status**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  return client.ping.checkStatus();
};

export default { metadata, tool, handler };
