// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'exchange_rates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchange_rates',
  operationId: 'exchange-rates',
};

export const tool: Tool = {
  name: 'list_exchange_rates',
  description: 'This endpoint allows you to **query BTC exchange rates with other currencies**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.exchangeRates.list());
};

export default { metadata, tool, handler };
