// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SaTest from 'sa-test-1';

export const metadata: Metadata = {
  resource: 'exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchanges/{id}/volume_chart',
  operationId: 'exchanges-id-volume-chart',
};

export const tool: Tool = {
  name: 'retrieve_volume_chart_exchanges',
  description:
    'This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days ago',
        enum: ['1', '7', '14', '30', '90', '180', '365'],
      },
    },
  },
};

export const handler = (client: SaTest, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.exchanges.retrieveVolumeChart(id, body);
};

export default { metadata, tool, handler };
