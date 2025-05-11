// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SaTest from 'sa-test';

export const metadata: Metadata = {
  resource: 'coins.contract',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_coins_contract',
  description:
    'This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform and a particular token contract address**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      contract_address: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { contract_address, ...body } = args as any;
  return client.coins.contract.retrieve(contract_address, body);
};

export default { metadata, tool, handler };
