// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'coins',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/ohlc',
  operationId: 'coins-id-ohlc',
};

export const tool: Tool = {
  name: 'retrieve_ohlc_coins',
  description:
    'This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days ago',
        enum: ['1', '7', '14', '30', '90', '180', '365'],
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of price data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      precision: {
        type: 'string',
        description: 'decimal place for currency price value',
        enum: [
          'full',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
        ],
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.coins.retrieveOhlc(id, body));
};

export default { metadata, tool, handler };
