// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sa-test-1-mcp/filtering';
import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'derivatives',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/derivatives',
  operationId: 'derivatives-tickers',
};

export const tool: Tool = {
  name: 'list_derivatives',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/tickers_list',\n  $defs: {\n    tickers_list: {\n      type: 'object',\n      properties: {\n        basis: {\n          type: 'number',\n          description: 'difference of derivative price and index price'\n        },\n        contract_type: {\n          type: 'string',\n          description: 'derivative contract type'\n        },\n        expired_at: {\n          type: 'string'\n        },\n        funding_rate: {\n          type: 'number',\n          description: 'derivative funding rate'\n        },\n        index: {\n          type: 'number',\n          description: 'derivative underlying asset price'\n        },\n        index_id: {\n          type: 'string',\n          description: 'derivative underlying asset'\n        },\n        last_traded_at: {\n          type: 'number',\n          description: 'derivative last updated time'\n        },\n        market: {\n          type: 'string',\n          description: 'derivative market name'\n        },\n        open_interest: {\n          type: 'number',\n          description: 'derivative open interest'\n        },\n        price: {\n          type: 'string',\n          description: 'derivative ticker price'\n        },\n        price_percentage_change_24h: {\n          type: 'number',\n          description: 'derivative ticker price percentage change in 24 hours'\n        },\n        spread: {\n          type: 'number',\n          description: 'derivative bid ask spread'\n        },\n        symbol: {\n          type: 'string',\n          description: 'derivative ticker symbol'\n        },\n        volume_24h: {\n          type: 'number',\n          description: 'derivative volume in 24 hours'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.derivatives.list()));
};

export default { metadata, tool, handler };
