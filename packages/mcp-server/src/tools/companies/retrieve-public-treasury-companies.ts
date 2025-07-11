// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sa-test-1-mcp/filtering';
import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/companies/public_treasury/{coin_id}',
  operationId: 'companies-public-treasury',
};

export const tool: Tool = {
  name: 'retrieve_public_treasury_companies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you **query public companies’ Bitcoin or Ethereum holdings**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    companies: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          country: {\n            type: 'string',\n            description: 'company incorporated country'\n          },\n          name: {\n            type: 'string',\n            description: 'company name'\n          },\n          percentage_of_total_supply: {\n            type: 'number',\n            description: 'percentage of total btc/eth supply'\n          },\n          symbol: {\n            type: 'string',\n            description: 'company symbol'\n          },\n          total_current_value_usd: {\n            type: 'number',\n            description: 'total current value of btc/eth holdings in usd'\n          },\n          total_entry_value_usd: {\n            type: 'number',\n            description: 'total entry value in usd'\n          },\n          total_holdings: {\n            type: 'number',\n            description: 'total btc/eth holdings of company'\n          }\n        },\n        required: []\n      }\n    },\n    market_cap_dominance: {\n      type: 'number',\n      description: 'market cap dominance'\n    },\n    total_holdings: {\n      type: 'number',\n      description: 'total btc/eth holdings of companies'\n    },\n    total_value_usd: {\n      type: 'number',\n      description: 'total btc/eth holdings value in usd'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      coin_id: {
        type: 'string',
        enum: ['bitcoin', 'ethereum'],
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
  const { coin_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.companies.retrievePublicTreasury(coin_id)));
};

export default { metadata, tool, handler };
