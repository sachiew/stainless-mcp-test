// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoinsAPI from '../coins';
import * as MarketChartAPI from './market-chart';
import { MarketChart, MarketChartRetrieveParams, MarketChartRetrieveRangeParams } from './market-chart';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contract extends APIResource {
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);

  /**
   * This endpoint allows you to **query all the metadata (image, websites, socials,
   * description, contract address, etc.) and market data (price, ATH, exchange
   * tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform
   * and a particular token contract address**
   *
   * @example
   * ```ts
   * const coinsDataBase = await client.coins.contract.retrieve(
   *   '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
   *   { id: 'ethereum' },
   * );
   * ```
   */
  retrieve(
    contractAddress: string,
    params: ContractRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CoinsAPI.CoinsDataBase> {
    const { id } = params;
    return this._client.get(path`/coins/${id}/contract/${contractAddress}`, options);
  }
}

export interface ContractRetrieveParams {
  /**
   * asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list).
   */
  id: string;
}

Contract.MarketChart = MarketChart;

export declare namespace Contract {
  export { type ContractRetrieveParams as ContractRetrieveParams };

  export {
    MarketChart as MarketChart,
    type MarketChartRetrieveParams as MarketChartRetrieveParams,
    type MarketChartRetrieveRangeParams as MarketChartRetrieveRangeParams,
  };
}
