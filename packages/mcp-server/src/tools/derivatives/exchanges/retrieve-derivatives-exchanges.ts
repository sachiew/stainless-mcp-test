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
  httpPath: '/derivatives/exchanges/{id}',
  operationId: 'derivatives-exchanges-id',
};

export const tool: Tool = {
  name: 'retrieve_derivatives_exchanges',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query the derivatives exchange’s related data (ID, name, open interest, ...) based on the exchanges’ ID**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    country: {\n      type: 'string',\n      description: 'derivatives exchange incorporated country'\n    },\n    description: {\n      type: 'string',\n      description: 'derivatives exchange description'\n    },\n    image: {\n      type: 'string',\n      description: 'derivatives exchange image url'\n    },\n    name: {\n      type: 'string',\n      description: 'derivatives exchange name'\n    },\n    number_of_futures_pairs: {\n      type: 'number',\n      description: 'number of futures pairs in the derivatives exchange'\n    },\n    number_of_perpetual_pairs: {\n      type: 'number',\n      description: 'number of perpetual pairs in the derivatives exchange'\n    },\n    open_interest_btc: {\n      type: 'number',\n      description: 'derivatives exchange open interest in BTC'\n    },\n    tickers: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/tickers_list'\n      }\n    },\n    trade_volume_24h_btc: {\n      type: 'string',\n      description: 'derivatives exchange trade volume in BTC in 24 hours'\n    },\n    url: {\n      type: 'string',\n      description: 'derivatives exchange website url'\n    },\n    year_established: {\n      type: 'number',\n      description: 'derivatives exchange established year'\n    }\n  },\n  required: [],\n  $defs: {\n    tickers_list: {\n      type: 'object',\n      properties: {\n        basis: {\n          type: 'number',\n          description: 'difference of derivative price and index price'\n        },\n        contract_type: {\n          type: 'string',\n          description: 'derivative contract type'\n        },\n        expired_at: {\n          type: 'string'\n        },\n        funding_rate: {\n          type: 'number',\n          description: 'derivative funding rate'\n        },\n        index: {\n          type: 'number',\n          description: 'derivative underlying asset price'\n        },\n        index_id: {\n          type: 'string',\n          description: 'derivative underlying asset'\n        },\n        last_traded_at: {\n          type: 'number',\n          description: 'derivative last updated time'\n        },\n        market: {\n          type: 'string',\n          description: 'derivative market name'\n        },\n        open_interest: {\n          type: 'number',\n          description: 'derivative open interest'\n        },\n        price: {\n          type: 'string',\n          description: 'derivative ticker price'\n        },\n        price_percentage_change_24h: {\n          type: 'number',\n          description: 'derivative ticker price percentage change in 24 hours'\n        },\n        spread: {\n          type: 'number',\n          description: 'derivative bid ask spread'\n        },\n        symbol: {\n          type: 'string',\n          description: 'derivative ticker symbol'\n        },\n        volume_24h: {\n          type: 'number',\n          description: 'derivative volume in 24 hours'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      include_tickers: {
        type: 'string',
        description: 'include tickers data',
        enum: ['all', 'unexpired'],
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
  return asTextContentResult(await maybeFilter(args, await client.derivatives.exchanges.retrieve(id, body)));
};

export default { metadata, tool, handler };
