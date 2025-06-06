// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'global',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/global/decentralized_finance_defi',
  operationId: 'global-DeFi',
};

export const tool: Tool = {
  name: 'retrieve_decentralized_finance_global',
  description:
    'This endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.global.retrieveDecentralizedFinance());
};

export default { metadata, tool, handler };
