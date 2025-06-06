// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchanges/{id}/tickers',
  operationId: 'exchanges-id-tickers',
};

export const tool: Tool = {
  name: 'retrieve_tickers_exchanges',
  description: "This endpoint allows you to **query exchange's tickers based on exchange’s ID**",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      coin_ids: {
        type: 'string',
        description:
          'filter tickers by coin IDs, comma-separated if querying more than 1 coin <br> *refers to [`/coins/list`](/reference/coins-list).',
      },
      depth: {
        type: 'boolean',
        description:
          'include 2% orderbook depth (Example: cost_to_move_up_usd & cost_to_move_down_usd),default: false',
      },
      include_exchange_logo: {
        type: 'boolean',
        description: 'include exchange logo, default: false',
      },
      order: {
        type: 'string',
        description: 'use this to sort the order of responses, default: trust_score_desc',
        enum: ['trust_score_desc', 'trust_score_asc', 'volume_desc', 'volume_asc', 'base_target'],
      },
      page: {
        type: 'integer',
        description: 'page through results',
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.exchanges.retrieveTickers(id, body));
};

export default { metadata, tool, handler };
