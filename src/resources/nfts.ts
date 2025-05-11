// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class NFTs extends APIResource {
  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24hr
   * volume ...) based on the NFT collection ID**
   *
   * @example
   * ```ts
   * const nftData = await client.nfts.retrieve(
   *   'pudgy-penguins',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NFTData> {
    return this._client.get(path`/nfts/${id}`, options);
  }

  /**
   * This endpoint allows you to **query all supported NFTs with ID, contract
   * address, name, asset platform ID and symbol on CoinGecko**
   *
   * @example
   * ```ts
   * const nfts = await client.nfts.list();
   * ```
   */
  list(query: NFTListParams | null | undefined = {}, options?: RequestOptions): APIPromise<NFTListResponse> {
    return this._client.get('/nfts/list', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24hr
   * volume ...) based on the NFT collection contract address and respective asset
   * platform**
   *
   * @example
   * ```ts
   * const nftData = await client.nfts.retrieveByContract(
   *   '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
   *   { asset_platform_id: 'ethereum' },
   * );
   * ```
   */
  retrieveByContract(
    contractAddress: string,
    params: NFTRetrieveByContractParams,
    options?: RequestOptions,
  ): APIPromise<NFTData> {
    const { asset_platform_id } = params;
    return this._client.get(path`/nfts/${asset_platform_id}/contract/${contractAddress}`, options);
  }
}

export interface NFTData {
  /**
   * NFT collection ID
   */
  id?: string;

  /**
   * NFT collection asset platform ID
   */
  asset_platform_id?: string;

  /**
   * NFT collection all time highs
   */
  ath?: NFTData.Ath;

  /**
   * NFT collection all time highs change percentage
   */
  ath_change_percentage?: NFTData.AthChangePercentage;

  /**
   * NFT collection all time highs date
   */
  ath_date?: NFTData.AthDate;

  /**
   * NFT collection banner image url
   */
  banner_image?: NFTData.BannerImage;

  /**
   * NFT collection contract address
   */
  contract_address?: string;

  /**
   * NFT collection description
   */
  description?: string;

  /**
   * NFT collection block explorers links
   */
  explorers?: Array<NFTData.Explorer>;

  /**
   * NFT collection floor price
   */
  floor_price?: NFTData.FloorPrice;

  /**
   * NFT collection floor price 14 days percentage change
   */
  floor_price_14d_percentage_change?: NFTData.FloorPrice14dPercentageChange;

  /**
   * NFT collection floor price 1 year percentage change
   */
  floor_price_1y_percentage_change?: NFTData.FloorPrice1yPercentageChange;

  floor_price_24h_percentage_change?: NFTData.FloorPrice24hPercentageChange;

  /**
   * NFT collection floor price 30 days percentage change
   */
  floor_price_30d_percentage_change?: NFTData.FloorPrice30dPercentageChange;

  /**
   * NFT collection floor price 60 days percentage change
   */
  floor_price_60d_percentage_change?: NFTData.FloorPrice60dPercentageChange;

  /**
   * NFT collection floor price 7 days percentage change
   */
  floor_price_7d_percentage_change?: NFTData.FloorPrice7dPercentageChange;

  /**
   * NFT collection floor price in usd 24 hours percentage change
   */
  floor_price_in_usd_24h_percentage_change?: number;

  /**
   * NFT collection image url
   */
  image?: NFTData.Image;

  /**
   * NFT collection links
   */
  links?: NFTData.Links;

  /**
   * NFT collection market cap
   */
  market_cap?: NFTData.MarketCap;

  /**
   * NFT collection market cap 24 hours percentage change
   */
  market_cap_24h_percentage_change?: NFTData.MarketCap24hPercentageChange;

  /**
   * coin market cap rank
   */
  market_cap_rank?: number;

  /**
   * NFT collection name
   */
  name?: string;

  /**
   * NFT collection native currency
   */
  native_currency?: string;

  /**
   * NFT collection native currency symbol
   */
  native_currency_symbol?: string;

  /**
   * number of unique address owning the NFTs
   */
  number_of_unique_addresses?: number;

  /**
   * number of unique address owning the NFTs 24 hours percentage change
   */
  number_of_unique_addresses_24h_percentage_change?: number;

  /**
   * NFT collection one day average sale price
   */
  one_day_average_sale_price?: number;

  /**
   * NFT collection one day average sale price 24 hours percentage change
   */
  one_day_average_sale_price_24h_percentage_change?: number;

  /**
   * NFT collection one day sales
   */
  one_day_sales?: number;

  /**
   * NFT collection one day sales 24 hours percentage change
   */
  one_day_sales_24h_percentage_change?: number;

  /**
   * NFT collection symbol
   */
  symbol?: string;

  /**
   * NFT collection total supply
   */
  total_supply?: number;

  /**
   * NFT collection user favorites count
   */
  user_favorites_count?: number;

  /**
   * NFT collection volume in 24 hours
   */
  volume_24h?: NFTData.Volume24h;

  /**
   * NFT collection volume in 24 hours percentage change
   */
  volume_24h_percentage_change?: NFTData.Volume24hPercentageChange;

  /**
   * NFT collection volume in usd 24 hours percentage change
   */
  volume_in_usd_24h_percentage_change?: number;
}

export namespace NFTData {
  /**
   * NFT collection all time highs
   */
  export interface Ath {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection all time highs change percentage
   */
  export interface AthChangePercentage {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection all time highs date
   */
  export interface AthDate {
    native_currency?: string;

    usd?: string;
  }

  /**
   * NFT collection banner image url
   */
  export interface BannerImage {
    small?: string;
  }

  export interface Explorer {
    link?: string;

    name?: string;
  }

  /**
   * NFT collection floor price
   */
  export interface FloorPrice {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 14 days percentage change
   */
  export interface FloorPrice14dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 1 year percentage change
   */
  export interface FloorPrice1yPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  export interface FloorPrice24hPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 30 days percentage change
   */
  export interface FloorPrice30dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 60 days percentage change
   */
  export interface FloorPrice60dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 7 days percentage change
   */
  export interface FloorPrice7dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection image url
   */
  export interface Image {
    small?: string;

    small_2x?: string;
  }

  /**
   * NFT collection links
   */
  export interface Links {
    discord?: string;

    homepage?: string;

    twitter?: string;
  }

  /**
   * NFT collection market cap
   */
  export interface MarketCap {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection market cap 24 hours percentage change
   */
  export interface MarketCap24hPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection volume in 24 hours
   */
  export interface Volume24h {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection volume in 24 hours percentage change
   */
  export interface Volume24hPercentageChange {
    native_currency?: number;

    usd?: number;
  }
}

export interface NFTListResponse {
  /**
   * NFT collection ID
   */
  id?: string;

  /**
   * NFT collection asset platform ID
   */
  asset_platform_id?: string;

  /**
   * NFT collection contract address
   */
  contract_address?: string;

  /**
   * NFT collection name
   */
  name?: string;

  /**
   * NFT collection symbol
   */
  symbol?: string;
}

export interface NFTListParams {
  /**
   * use this to sort the order of responses
   */
  order?:
    | 'h24_volume_usd_asc'
    | 'h24_volume_usd_desc'
    | 'h24_volume_native_asc'
    | 'h24_volume_native_desc'
    | 'floor_price_native_asc'
    | 'floor_price_native_desc'
    | 'market_cap_native_asc'
    | 'market_cap_native_desc'
    | 'market_cap_usd_asc'
    | 'market_cap_usd_desc';

  /**
   * page through results
   */
  page?: number;

  /**
   * total results per page Valid values: 1...250
   */
  per_page?: number;
}

export interface NFTRetrieveByContractParams {
  /**
   * asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list)
   */
  asset_platform_id: string;
}

export declare namespace NFTs {
  export {
    type NFTData as NFTData,
    type NFTListResponse as NFTListResponse,
    type NFTListParams as NFTListParams,
    type NFTRetrieveByContractParams as NFTRetrieveByContractParams,
  };
}
