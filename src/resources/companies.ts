// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
  /**
   * This endpoint allows you **query public companies’ Bitcoin or Ethereum
   * holdings**
   *
   * @example
   * ```ts
   * const response =
   *   await client.companies.retrievePublicTreasury('bitcoin');
   * ```
   */
  retrievePublicTreasury(
    coinID: 'bitcoin' | 'ethereum',
    options?: RequestOptions,
  ): APIPromise<CompanyRetrievePublicTreasuryResponse> {
    return this._client.get(path`/companies/public_treasury/${coinID}`, options);
  }
}

export interface CompanyRetrievePublicTreasuryResponse {
  companies?: Array<CompanyRetrievePublicTreasuryResponse.Company>;

  /**
   * market cap dominance
   */
  market_cap_dominance?: number;

  /**
   * total btc/eth holdings of companies
   */
  total_holdings?: number;

  /**
   * total btc/eth holdings value in usd
   */
  total_value_usd?: number;
}

export namespace CompanyRetrievePublicTreasuryResponse {
  export interface Company {
    /**
     * company incorporated country
     */
    country?: string;

    /**
     * company name
     */
    name?: string;

    /**
     * percentage of total btc/eth supply
     */
    percentage_of_total_supply?: number;

    /**
     * company symbol
     */
    symbol?: string;

    /**
     * total current value of btc/eth holdings in usd
     */
    total_current_value_usd?: number;

    /**
     * total entry value in usd
     */
    total_entry_value_usd?: number;

    /**
     * total btc/eth holdings of company
     */
    total_holdings?: number;
  }
}

export declare namespace Companies {
  export { type CompanyRetrievePublicTreasuryResponse as CompanyRetrievePublicTreasuryResponse };
}
