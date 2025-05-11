// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SaTest from 'sa-test';

const client = new SaTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource coins', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.coins.retrieve('bitcoin');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.retrieve(
        'bitcoin',
        {
          community_data: true,
          developer_data: true,
          localization: true,
          market_data: true,
          sparkline: true,
          tickers: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SaTest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.coins.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.list({ include_platform: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SaTest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listWithMarketData: only required params', async () => {
    const responsePromise = client.coins.listWithMarketData({ vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listWithMarketData: required and optional params', async () => {
    const response = await client.coins.listWithMarketData({
      vs_currency: 'usd',
      category: 'layer-1',
      ids: 'ids',
      include_tokens: 'top',
      locale: 'ar',
      names: 'names',
      order: 'market_cap_asc',
      page: 0,
      per_page: 0,
      precision: 'full',
      price_change_percentage: 'price_change_percentage',
      sparkline: true,
      symbols: 'symbols',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHistory: only required params', async () => {
    const responsePromise = client.coins.retrieveHistory('bitcoin', { date: '30-12-2023' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHistory: required and optional params', async () => {
    const response = await client.coins.retrieveHistory('bitcoin', {
      date: '30-12-2023',
      localization: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveOhlc: only required params', async () => {
    const responsePromise = client.coins.retrieveOhlc('bitcoin', { days: '1', vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveOhlc: required and optional params', async () => {
    const response = await client.coins.retrieveOhlc('bitcoin', {
      days: '1',
      vs_currency: 'usd',
      precision: 'full',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTickers', async () => {
    const responsePromise = client.coins.retrieveTickers('bitcoin');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTickers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.retrieveTickers(
        'bitcoin',
        {
          depth: true,
          exchange_ids: 'binance',
          include_exchange_logo: true,
          order: 'trust_score_desc',
          page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SaTest.NotFoundError);
  });
});
