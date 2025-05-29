// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'nfts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/{id}',
  operationId: 'nfts-id',
};

export const tool: Tool = {
  name: 'retrieve_nfts',
  description:
    'This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.nfts.retrieve(id);
};

export default { metadata, tool, handler };
