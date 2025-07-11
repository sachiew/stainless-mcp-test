// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sa-test-1-mcp/filtering';
import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'coins.market_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/market_chart',
  operationId: 'coins-id-market-chart',
};

export const tool: Tool = {
  name: 'retrieve_coins_market_chart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID**\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/coins_market_chart',\n  $defs: {\n    coins_market_chart: {\n      type: 'object',\n      properties: {\n        market_caps: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        },\n        prices: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        },\n        total_volumes: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days ago <br> You may use any integer for number of days',
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      interval: {
        type: 'string',
        description: 'data interval, leave empty for auto granularity Possible value: daily',
        enum: ['daily'],
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
  return asTextContentResult(await maybeFilter(args, await client.coins.marketChart.retrieve(id, body)));
};

export default { metadata, tool, handler };
