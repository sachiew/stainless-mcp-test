// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SaTest from 'sa-test-1';

const client = new SaTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketChart', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.coins.contract.marketChart.retrieve(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      { id: 'ethereum', days: 'days', vs_currency: 'usd' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.coins.contract.marketChart.retrieve(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      { id: 'ethereum', days: 'days', vs_currency: 'usd', interval: 'daily', precision: 'full' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRange: only required params', async () => {
    const responsePromise = client.coins.contract.marketChart.retrieveRange(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      { id: 'ethereum', from: 0, to: 0, vs_currency: 'usd' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRange: required and optional params', async () => {
    const response = await client.coins.contract.marketChart.retrieveRange(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      { id: 'ethereum', from: 0, to: 0, vs_currency: 'usd', precision: 'full' },
    );
  });
});
