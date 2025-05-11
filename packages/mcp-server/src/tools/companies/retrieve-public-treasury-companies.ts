// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'read',
  tags: [],
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

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { coin_id, ...body } = args as any;
  return client.companies.retrievePublicTreasury(coin_id);
};

export default { metadata, tool, handler };
