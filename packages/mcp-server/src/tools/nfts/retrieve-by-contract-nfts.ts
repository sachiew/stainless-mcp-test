// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'nfts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/{asset_platform_id}/contract/{contract_address}',
  operationId: 'nfts-contract-address',
};

export const tool: Tool = {
  name: 'retrieve_by_contract_nfts',
  description:
    'This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection contract address and respective asset platform**',
  inputSchema: {
    type: 'object',
    properties: {
      asset_platform_id: {
        type: 'string',
      },
      contract_address: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { contract_address, ...body } = args as any;
  return asTextContentResult(await client.nfts.retrieveByContract(contract_address, body));
};

export default { metadata, tool, handler };
