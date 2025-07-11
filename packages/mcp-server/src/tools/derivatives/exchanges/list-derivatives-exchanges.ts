// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sa-test-1-mcp/filtering';
import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'derivatives.exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/derivatives/exchanges',
  operationId: 'derivatives-exchanges',
};

export const tool: Tool = {
  name: 'list_derivatives_exchanges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'derivatives exchange ID'\n    },\n    country: {\n      type: 'string',\n      description: 'derivatives exchange incorporated country'\n    },\n    description: {\n      type: 'string',\n      description: 'derivatives exchange description'\n    },\n    image: {\n      type: 'string',\n      description: 'derivatives exchange image url'\n    },\n    name: {\n      type: 'string',\n      description: 'derivatives exchange name'\n    },\n    number_of_futures_pairs: {\n      type: 'number',\n      description: 'number of futures pairs in the derivatives exchange'\n    },\n    number_of_perpetual_pairs: {\n      type: 'number',\n      description: 'number of perpetual pairs in the derivatives exchange'\n    },\n    open_interest_btc: {\n      type: 'number',\n      description: 'derivatives exchange open interest in BTC'\n    },\n    trade_volume_24h_btc: {\n      type: 'string',\n      description: 'derivatives exchange trade volume in BTC in 24 hours'\n    },\n    url: {\n      type: 'string',\n      description: 'derivatives exchange website url'\n    },\n    year_established: {\n      type: 'number',\n      description: 'derivatives exchange established year'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        description: 'use this to sort the order of responses, default: open_interest_btc_desc',
        enum: [
          'name_asc',
          'name_desc',
          'open_interest_btc_asc',
          'open_interest_btc_desc',
          'trade_volume_24h_btc_asc',
          'trade_volume_24h_btc_desc',
        ],
      },
      page: {
        type: 'integer',
        description: 'page through results, default: 1',
      },
      per_page: {
        type: 'integer',
        description: 'total results per page',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: SaTest, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.derivatives.exchanges.list(body)));
};

export default { metadata, tool, handler };
