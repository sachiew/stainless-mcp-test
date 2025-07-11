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
  httpPath: '/exchanges/{id}',
  operationId: 'exchanges-id',
};

export const tool: Tool = {
  name: 'retrieve_exchanges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query exchange’s data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange’s ID**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    alert_notice: {\n      type: 'string',\n      description: 'alert notice for exchange'\n    },\n    centralized: {\n      type: 'boolean',\n      description: 'exchange type (true for centralized, false for decentralized)'\n    },\n    coins: {\n      type: 'number',\n      description: 'number of coins listed on the exchange'\n    },\n    country: {\n      type: 'string',\n      description: 'exchange incorporated country'\n    },\n    description: {\n      type: 'string',\n      description: 'exchange description'\n    },\n    facebook_url: {\n      type: 'string',\n      description: 'exchange facebook url'\n    },\n    has_trading_incentive: {\n      type: 'boolean',\n      description: 'exchange trading incentive'\n    },\n    image: {\n      type: 'string',\n      description: 'exchange image url'\n    },\n    name: {\n      type: 'string',\n      description: 'exchange name'\n    },\n    other_url_1: {\n      type: 'string'\n    },\n    other_url_2: {\n      type: 'string'\n    },\n    pairs: {\n      type: 'number',\n      description: 'number of trading pairs on the exchange'\n    },\n    public_notice: {\n      type: 'string',\n      description: 'public notice for exchange'\n    },\n    reddit_url: {\n      type: 'string',\n      description: 'exchange reddit url'\n    },\n    slack_url: {\n      type: 'string',\n      description: 'exchange slack url'\n    },\n    telegram_url: {\n      type: 'string',\n      description: 'exchange telegram url'\n    },\n    tickers: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    trade_volume_24h_btc: {\n      type: 'number'\n    },\n    trade_volume_24h_btc_normalized: {\n      type: 'number',\n      description: 'normalized trading volume by traffic in BTC in 24 hours <br> *refers to [`this blog`](https://blog.coingecko.com/trust-score/).'\n    },\n    trust_score: {\n      type: 'number',\n      description: 'exchange trust score'\n    },\n    trust_score_rank: {\n      type: 'number',\n      description: 'exchange trust score rank'\n    },\n    twitter_handle: {\n      type: 'string',\n      description: 'exchange twitter handle'\n    },\n    url: {\n      type: 'string',\n      description: 'exchange website url'\n    },\n    year_established: {\n      type: 'number',\n      description: 'exchange established year'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.exchanges.retrieve(id)));
};

export default { metadata, tool, handler };
