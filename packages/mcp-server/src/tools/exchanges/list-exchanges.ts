// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sa-test-1-mcp/filtering';
import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchanges',
  operationId: 'exchanges',
};

export const tool: Tool = {
  name: 'list_exchanges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the supported exchanges with exchanges’ data (ID, name, country, ...) that have active trading volumes on CoinGecko**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'exchange ID'\n    },\n    country: {\n      type: 'string',\n      description: 'exchange country'\n    },\n    description: {\n      type: 'string',\n      description: 'exchange description'\n    },\n    has_trading_incentive: {\n      type: 'boolean',\n      description: 'exchange trading incentive'\n    },\n    image: {\n      type: 'string',\n      description: 'exchange image url'\n    },\n    name: {\n      type: 'string',\n      description: 'exchange name'\n    },\n    trade_volume_24h_btc: {\n      type: 'number',\n      description: 'exchange trade volume in BTC in 24 hours'\n    },\n    trade_volume_24h_btc_normalized: {\n      type: 'number',\n      description: 'normalized trading volume by traffic in BTC in 24 hours <br> *refers to [`this blog`](https://blog.coingecko.com/trust-score/).'\n    },\n    trust_score: {\n      type: 'number',\n      description: 'exchange trust score'\n    },\n    trust_score_rank: {\n      type: 'number',\n      description: 'exchange trust score rank'\n    },\n    url: {\n      type: 'string',\n      description: 'exchange website url'\n    },\n    year_established: {\n      type: 'number',\n      description: 'exchange established year'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'page through results, default: 1',
      },
      per_page: {
        type: 'integer',
        description: 'total results per page, default: 100 <br> Valid values: 1...250',
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
  return asTextContentResult(await maybeFilter(args, await client.exchanges.list(body)));
};

export default { metadata, tool, handler };
