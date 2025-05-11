// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'exchange_rates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_exchange_rates',
  description: 'This endpoint allows you to **query BTC exchange rates with other currencies**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  return client.exchangeRates.list();
};

export default { metadata, tool, handler };
