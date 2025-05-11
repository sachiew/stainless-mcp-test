// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'simple',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_supported_currencies_simple',
  description: 'This endpoint allows you to **query all the supported currencies on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  return client.simple.listSupportedCurrencies();
};

export default { metadata, tool, handler };
