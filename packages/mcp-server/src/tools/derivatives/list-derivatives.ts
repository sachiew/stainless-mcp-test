// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'derivatives',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_derivatives',
  description:
    'This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  return client.derivatives.list();
};

export default { metadata, tool, handler };
