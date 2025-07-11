// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sa-test-1-mcp/filtering';
import { asTextContentResult } from 'sa-test-1-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'coins',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/list',
  operationId: 'coins-list',
};

export const tool: Tool = {
  name: 'list_coins',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string',\n        description: 'coin ID'\n      },\n      name: {\n        type: 'string',\n        description: 'coin name'\n      },\n      platforms: {\n        type: 'object',\n        description: 'coin asset platform and contract address'\n      },\n      symbol: {\n        type: 'string',\n        description: 'coin symbol'\n      }\n    },\n    required: []\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      include_platform: {
        type: 'boolean',
        description: "include platform and token's contract addresses, default: false",
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
  return asTextContentResult(await maybeFilter(args, await client.coins.list(body)));
};

export default { metadata, tool, handler };
