// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketChartAPI from '../market-chart';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * This endpoint allows you to **get the historical chart data including time in
   * UNIX, price, market cap and 24hr volume based on asset platform and particular
   * token contract address**
   *
   * @example
   * ```ts
   * const coinsMarketChart =
   *   await client.coins.contract.marketChart.retrieve(
   *     '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
   *     { id: 'ethereum', days: 'days', vs_currency: 'usd' },
   *   );
   * ```
   */
  retrieve(
    contractAddress: string,
    params: MarketChartRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MarketChartAPI.CoinsMarketChart> {
    const { id, ...query } = params;
    return this._client.get(path`/coins/${id}/contract/${contractAddress}/market_chart`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint allows you to **get the historical chart data within certain time
   * range in UNIX along with price, market cap and 24hr volume based on asset
   * platform and particular token contract address**
   *
   * @example
   * ```ts
   * const coinsMarketChartRange =
   *   await client.coins.contract.marketChart.retrieveRange(
   *     '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
   *     { id: 'ethereum', from: 0, to: 0, vs_currency: 'usd' },
   *   );
   * ```
   */
  retrieveRange(
    contractAddress: string,
    params: MarketChartRetrieveRangeParams,
    options?: RequestOptions,
  ): APIPromise<MarketChartAPI.CoinsMarketChartRange> {
    const { id, ...query } = params;
    return this._client.get(path`/coins/${id}/contract/${contractAddress}/market_chart/range`, {
      query,
      ...options,
    });
  }
}

export interface MarketChartRetrieveParams {
  /**
   * Path param: asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list).
   */
  id: string;

  /**
   * Query param: data up to number of days ago You may use any integer for number of
   * days
   */
  days: string;

  /**
   * Query param: target currency of market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * Query param: data interval, leave empty for auto granularity Possible value:
   * daily
   */
  interval?: 'daily';

  /**
   * Query param: decimal place for currency price value
   */
  precision?:
    | 'full'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18';
}

export interface MarketChartRetrieveRangeParams {
  /**
   * Path param: asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list)
   */
  id: string;

  /**
   * Query param: starting date in UNIX timestamp
   */
  from: number;

  /**
   * Query param: ending date in UNIX timestamp
   */
  to: number;

  /**
   * Query param: target currency of market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * Query param: decimal place for currency price value
   */
  precision?:
    | 'full'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18';
}

export declare namespace MarketChart {
  export {
    type MarketChartRetrieveParams as MarketChartRetrieveParams,
    type MarketChartRetrieveRangeParams as MarketChartRetrieveRangeParams,
  };
}
