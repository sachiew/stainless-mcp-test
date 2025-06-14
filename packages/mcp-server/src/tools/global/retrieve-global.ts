// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'global',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_global',
  description:
    'This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  return client.global.retrieve();
};

export default { metadata, tool, handler };
