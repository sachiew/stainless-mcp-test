// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sa-test-1-mcp/filtering';
import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'global',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/global/decentralized_finance_defi',
  operationId: 'global-DeFi',
};

export const tool: Tool = {
  name: 'retrieve_decentralized_finance_global',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        defi_dominance: {\n          type: 'string',\n          description: 'defi dominance'\n        },\n        defi_market_cap: {\n          type: 'string',\n          description: 'defi market cap'\n        },\n        defi_to_eth_ratio: {\n          type: 'string',\n          description: 'defi to eth ratio'\n        },\n        eth_market_cap: {\n          type: 'string',\n          description: 'eth market cap'\n        },\n        top_coin_defi_dominance: {\n          type: 'number',\n          description: 'defi top coin dominance'\n        },\n        top_coin_name: {\n          type: 'string',\n          description: 'defi top coin name'\n        },\n        trading_volume_24h: {\n          type: 'string',\n          description: 'defi trading volume in 24 hours'\n        }\n      },\n      required: []\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.global.retrieveDecentralizedFinance()));
};

export default { metadata, tool, handler };
