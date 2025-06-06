// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/companies/public_treasury/{coin_id}',
  operationId: 'companies-public-treasury',
};

export const tool: Tool = {
  name: 'retrieve_public_treasury_companies',
  description: 'This endpoint allows you **query public companies’ Bitcoin or Ethereum holdings**',
  inputSchema: {
    type: 'object',
    properties: {
      coin_id: {
        type: 'string',
        enum: ['bitcoin', 'ethereum'],
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { coin_id, ...body } = args as any;
  return asTextContentResult(await client.companies.retrievePublicTreasury(coin_id));
};

export default { metadata, tool, handler };
