// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryListResponse,
  CategoryListWithMarketDataParams,
  CategoryListWithMarketDataResponse,
} from './categories';
import * as MarketChartAPI from './market-chart';
import {
  CoinsMarketChart,
  CoinsMarketChartRange,
  MarketChart,
  MarketChartRetrieveParams,
  MarketChartRetrieveRangeParams,
} from './market-chart';
import * as ContractAPI from './contract/contract';
import { Contract, ContractRetrieveParams } from './contract/contract';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Coins extends APIResource {
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * This endpoint allows you to **query all the metadata (image, websites, socials,
   * description, contract address, etc.) and market data (price, ATH, exchange
   * tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin
   * ID**
   *
   * @example
   * ```ts
   * const coinsDataBase = await client.coins.retrieve(
   *   'bitcoin',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: CoinRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoinsDataBase> {
    return this._client.get(path`/coins/${id}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the supported coins on CoinGecko with
   * coins ID, name and symbol**
   *
   * @example
   * ```ts
   * const coins = await client.coins.list();
   * ```
   */
  list(
    query: CoinListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoinListResponse> {
    return this._client.get('/coins/list', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the supported coins with price, market
   * cap, volume and market related data**
   *
   * @example
   * ```ts
   * const response = await client.coins.listWithMarketData({
   *   vs_currency: 'usd',
   * });
   * ```
   */
  listWithMarketData(
    query: CoinListWithMarketDataParams,
    options?: RequestOptions,
  ): APIPromise<CoinListWithMarketDataResponse> {
    return this._client.get('/coins/markets', { query, ...options });
  }

  /**
   * This endpoint allows you to **query the historical data (price, market cap,
   * 24hrs volume, ...) at a given date for a coin based on a particular coin ID**
   *
   * @example
   * ```ts
   * const response = await client.coins.retrieveHistory(
   *   'bitcoin',
   *   { date: '30-12-2023' },
   * );
   * ```
   */
  retrieveHistory(
    id: string,
    query: CoinRetrieveHistoryParams,
    options?: RequestOptions,
  ): APIPromise<CoinRetrieveHistoryResponse> {
    return this._client.get(path`/coins/${id}/history`, { query, ...options });
  }

  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a
   * coin based on particular coin ID**
   *
   * @example
   * ```ts
   * const response = await client.coins.retrieveOhlc(
   *   'bitcoin',
   *   { days: '1', vs_currency: 'usd' },
   * );
   * ```
   */
  retrieveOhlc(
    id: string,
    query: CoinRetrieveOhlcParams,
    options?: RequestOptions,
  ): APIPromise<CoinRetrieveOhlcResponse> {
    return this._client.get(path`/coins/${id}/ohlc`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query the coin tickers on both centralized
   * exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**
   *
   * @example
   * ```ts
   * const coinsTickers = await client.coins.retrieveTickers(
   *   'bitcoin',
   * );
   * ```
   */
  retrieveTickers(
    id: string,
    query: CoinRetrieveTickersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoinsTickers> {
    return this._client.get(path`/coins/${id}/tickers`, { query, ...options });
  }
}

export interface CoinsDataBase {
  /**
   * coin ID
   */
  id?: string;

  /**
   * additional notices
   */
  additional_notices?: Array<string>;

  /**
   * coin asset platform ID
   */
  asset_platform_id?: string;

  /**
   * blockchain block time in minutes
   */
  block_time_in_minutes?: number;

  /**
   * coin categories
   */
  categories?: Array<string>;

  /**
   * coin community data
   */
  community_data?: CoinsDataBase.CommunityData;

  /**
   * coin country of origin
   */
  country_origin?: string;

  /**
   * coin description
   */
  description?: Record<string, string>;

  /**
   * detailed coin asset platform and contract address
   */
  detail_platforms?: Record<string, string>;

  /**
   * coin developer data
   */
  developer_data?: CoinsDataBase.DeveloperData;

  /**
   * coin genesis date
   */
  genesis_date?: string;

  /**
   * blockchain hashing algorithm
   */
  hashing_algorithm?: string;

  /**
   * coin image url
   */
  image?: CoinsDataBase.Image;

  /**
   * coin last updated timestamp
   */
  last_updated?: string;

  /**
   * links
   */
  links?: CoinsDataBase.Links;

  /**
   * coin name localization
   */
  localization?: Record<string, string>;

  /**
   * coin rank by market cap
   */
  market_cap_rank?: number;

  /**
   * coin market data
   */
  market_data?: CoinsDataBase.MarketData;

  /**
   * coin name
   */
  name?: string;

  /**
   * coin asset platform and contract address
   */
  platforms?: Record<string, string>;

  /**
   * preview listing coin
   */
  preview_listing?: boolean;

  /**
   * public notice
   */
  public_notice?: string;

  /**
   * coin sentiment votes down percentage
   */
  sentiment_votes_down_percentage?: number;

  /**
   * coin sentiment votes up percentage
   */
  sentiment_votes_up_percentage?: number;

  /**
   * coin status updates
   */
  status_updates?: Array<unknown>;

  /**
   * coin symbol
   */
  symbol?: string;

  /**
   * coin tickers
   */
  tickers?: Array<CoinsDataBase.Ticker>;

  /**
   * coin web slug
   */
  web_slug?: string;
}

export namespace CoinsDataBase {
  /**
   * coin community data
   */
  export interface CommunityData {
    /**
     * coin facebook likes
     */
    facebook_likes?: number;

    /**
     * coin reddit active accounts in 48 hours
     */
    reddit_accounts_active_48h?: number;

    /**
     * coin reddit average comments in 48 hours
     */
    reddit_average_comments_48h?: number;

    /**
     * coin reddit average posts in 48 hours
     */
    reddit_average_posts_48h?: number;

    /**
     * coin reddit subscribers
     */
    reddit_subscribers?: number;

    /**
     * coin telegram channel user count
     */
    telegram_channel_user_count?: number;

    /**
     * coin twitter followers
     */
    twitter_followers?: number;
  }

  /**
   * coin developer data
   */
  export interface DeveloperData {
    /**
     * coin repository closed issues
     */
    closed_issues?: number;

    /**
     * coin code additions and deletions in 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;

    /**
     * coin repository commit count in 4 weeks
     */
    commit_count_4_weeks?: number;

    /**
     * coin repository forks
     */
    forks?: number;

    /**
     * coin repository last 4 weeks commit activity series
     */
    last_4_weeks_commit_activity_series?: Array<number>;

    /**
     * coin repository pull request contributors
     */
    pull_request_contributors?: number;

    /**
     * coin repository pull requests merged
     */
    pull_requests_merged?: number;

    /**
     * coin repository stars
     */
    stars?: number;

    /**
     * coin repository subscribers
     */
    subscribers?: number;

    /**
     * coin repository total issues
     */
    total_issues?: number;
  }

  export namespace DeveloperData {
    /**
     * coin code additions and deletions in 4 weeks
     */
    export interface CodeAdditionsDeletions4Weeks {
      additions?: number;

      deletions?: number;
    }
  }

  /**
   * coin image url
   */
  export interface Image {
    large?: string;

    small?: string;

    thumb?: string;
  }

  /**
   * links
   */
  export interface Links {
    /**
     * coin announcement url
     */
    announcement_url?: Array<string>;

    /**
     * coin bitcointalk thread identifier
     */
    bitcointalk_thread_identifier?: string;

    /**
     * coin block explorer url
     */
    blockchain_site?: Array<string>;

    /**
     * coin chat url
     */
    chat_url?: Array<string>;

    /**
     * coin facebook username
     */
    facebook_username?: string;

    /**
     * coin website url
     */
    homepage?: Array<string>;

    /**
     * coin official forum url
     */
    official_forum_url?: Array<string>;

    /**
     * coin repository url
     */
    repos_url?: Links.ReposURL;

    /**
     * coin snapshot url
     */
    snapshot_url?: string;

    /**
     * coin subreddit url
     */
    subreddit_url?: string;

    /**
     * coin telegram channel identifier
     */
    telegram_channel_identifier?: string;

    /**
     * coin twitter handle
     */
    twitter_screen_name?: string;

    /**
     * coin whitepaper url
     */
    whitepaper?: Array<string>;
  }

  export namespace Links {
    /**
     * coin repository url
     */
    export interface ReposURL {
      /**
       * coin bitbucket repository url
       */
      bitbucket?: Array<string>;

      /**
       * coin github repository url
       */
      github?: Array<string>;
    }
  }

  /**
   * coin market data
   */
  export interface MarketData {
    /**
     * coin all time high (ATH) in currency
     */
    ath?: MarketData.Ath;

    /**
     * coin all time high (ATH) change in percentage
     */
    ath_change_percentage?: MarketData.AthChangePercentage;

    /**
     * coin all time high (ATH) date
     */
    ath_date?: MarketData.AthDate;

    /**
     * coin all time low (atl) in currency
     */
    atl?: MarketData.Atl;

    /**
     * coin all time low (atl) change in percentage
     */
    atl_change_percentage?: MarketData.AtlChangePercentage;

    /**
     * coin all time low (atl) date
     */
    atl_date?: MarketData.AtlDate;

    /**
     * coin circulating supply
     */
    circulating_supply?: number;

    /**
     * coin current price in currency
     */
    current_price?: MarketData.CurrentPrice;

    /**
     * fully diluted valuation to total value locked ratio
     */
    fdv_to_tvl_ratio?: number;

    /**
     * coin fully diluted valuation (fdv) in currency
     */
    fully_diluted_valuation?: MarketData.FullyDilutedValuation;

    /**
     * coin 24hr price high in currency
     */
    high_24h?: MarketData.High24h;

    /**
     * coin market data last updated timestamp
     */
    last_updated?: string;

    /**
     * coin 24hr price low in currency
     */
    low_24h?: MarketData.Low24h;

    /**
     * coin market cap in currency
     */
    market_cap?: MarketData.MarketCap;

    /**
     * coin 24hr market cap change in currency
     */
    market_cap_change_24h?: number;

    /**
     * coin 24hr market cap change in currency
     */
    market_cap_change_24h_in_currency?: MarketData.MarketCapChange24hInCurrency;

    /**
     * coin 24hr market cap change in percentage
     */
    market_cap_change_percentage_24h?: number;

    /**
     * coin 24hr market cap change in percentage
     */
    market_cap_change_percentage_24h_in_currency?: MarketData.MarketCapChangePercentage24hInCurrency;

    /**
     * market cap to fully diluted valuation ratio
     */
    market_cap_fdv_ratio?: number;

    /**
     * coin rank by market cap
     */
    market_cap_rank?: number;

    /**
     * coin max supply
     */
    max_supply?: number;

    /**
     * market cap to total value locked ratio
     */
    mcap_to_tvl_ratio?: number;

    /**
     * coin 24hr price change in currency
     */
    price_change_24h?: number;

    /**
     * coin 14d price change in percentage
     */
    price_change_percentage_14d?: number;

    /**
     * coin 14d price change in currency
     */
    price_change_percentage_14d_in_currency?: MarketData.PriceChangePercentage14dInCurrency;

    /**
     * coin 1h price change in currency
     */
    price_change_percentage_1h_in_currency?: MarketData.PriceChangePercentage1hInCurrency;

    /**
     * coin 1y price change in percentage
     */
    price_change_percentage_1y?: number;

    /**
     * coin 1y price change in currency
     */
    price_change_percentage_1y_in_currency?: MarketData.PriceChangePercentage1yInCurrency;

    /**
     * coin 200d price change in percentage
     */
    price_change_percentage_200d?: number;

    /**
     * coin 200d price change in currency
     */
    price_change_percentage_200d_in_currency?: MarketData.PriceChangePercentage200dInCurrency;

    /**
     * coin 24hr price change in percentage
     */
    price_change_percentage_24h?: number;

    /**
     * coin 24hr price change in currency
     */
    price_change_percentage_24h_in_currency?: MarketData.PriceChangePercentage24hInCurrency;

    /**
     * coin 30d price change in percentage
     */
    price_change_percentage_30d?: number;

    /**
     * coin 30d price change in currency
     */
    price_change_percentage_30d_in_currency?: MarketData.PriceChangePercentage30dInCurrency;

    /**
     * coin 60d price change in percentage
     */
    price_change_percentage_60d?: number;

    /**
     * coin 60d price change in currency
     */
    price_change_percentage_60d_in_currency?: MarketData.PriceChangePercentage60dInCurrency;

    /**
     * coin 7d price change in percentage
     */
    price_change_percentage_7d?: number;

    /**
     * coin 7d price change in currency
     */
    price_change_percentage_7d_in_currency?: MarketData.PriceChangePercentage7dInCurrency;

    /**
     * coin return on investment
     */
    roi?: number;

    /**
     * coin total supply
     */
    total_supply?: number;

    /**
     * total value locked
     */
    total_value_locked?: number;

    /**
     * coin total trading volume in currency
     */
    total_volume?: MarketData.TotalVolume;
  }

  export namespace MarketData {
    /**
     * coin all time high (ATH) in currency
     */
    export interface Ath {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time high (ATH) change in percentage
     */
    export interface AthChangePercentage {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time high (ATH) date
     */
    export interface AthDate {
      btc?: string;

      eur?: string;

      usd?: string;
    }

    /**
     * coin all time low (atl) in currency
     */
    export interface Atl {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time low (atl) change in percentage
     */
    export interface AtlChangePercentage {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time low (atl) date
     */
    export interface AtlDate {
      btc?: string;

      eur?: string;

      usd?: string;
    }

    /**
     * coin current price in currency
     */
    export interface CurrentPrice {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin fully diluted valuation (fdv) in currency
     */
    export interface FullyDilutedValuation {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr price high in currency
     */
    export interface High24h {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr price low in currency
     */
    export interface Low24h {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin market cap in currency
     */
    export interface MarketCap {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr market cap change in currency
     */
    export interface MarketCapChange24hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr market cap change in percentage
     */
    export interface MarketCapChangePercentage24hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 14d price change in currency
     */
    export interface PriceChangePercentage14dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 1h price change in currency
     */
    export interface PriceChangePercentage1hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 1y price change in currency
     */
    export interface PriceChangePercentage1yInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 200d price change in currency
     */
    export interface PriceChangePercentage200dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr price change in currency
     */
    export interface PriceChangePercentage24hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 30d price change in currency
     */
    export interface PriceChangePercentage30dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 60d price change in currency
     */
    export interface PriceChangePercentage60dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 7d price change in currency
     */
    export interface PriceChangePercentage7dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin total trading volume in currency
     */
    export interface TotalVolume {
      btc?: number;

      eur?: number;

      usd?: number;
    }
  }

  export interface Ticker {
    /**
     * coin ticker base currency
     */
    base?: string;

    /**
     * coin ticker bid ask spread percentage
     */
    bid_ask_spread_percentage?: number;

    /**
     * coin ticker base currency coin ID
     */
    coin_id?: string;

    /**
     * coin ticker converted last price
     */
    converted_last?: Ticker.ConvertedLast;

    /**
     * coin ticker converted volume
     */
    converted_volume?: Ticker.ConvertedVolume;

    /**
     * coin ticker anomaly
     */
    is_anomaly?: boolean;

    /**
     * coin ticker stale
     */
    is_stale?: boolean;

    /**
     * coin ticker last price
     */
    last?: number;

    /**
     * coin ticker last fetch timestamp
     */
    last_fetch_at?: string;

    /**
     * coin ticker last traded timestamp
     */
    last_traded_at?: string;

    /**
     * coin ticker exchange
     */
    market?: Ticker.Market;

    /**
     * coin ticker target currency
     */
    target?: string;

    /**
     * coin ticker target currency coin ID
     */
    target_coin_id?: string;

    /**
     * coin ticker timestamp
     */
    timestamp?: string;

    /**
     * coin ticker token info url
     */
    token_info_url?: string;

    /**
     * coin ticker trade url
     */
    trade_url?: string;

    /**
     * coin ticker trust score
     */
    trust_score?: string;

    /**
     * coin ticker volume
     */
    volume?: number;
  }

  export namespace Ticker {
    /**
     * coin ticker converted last price
     */
    export interface ConvertedLast {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * coin ticker converted volume
     */
    export interface ConvertedVolume {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * coin ticker exchange
     */
    export interface Market {
      /**
       * coin ticker exchange trading incentive
       */
      has_trading_incentive?: boolean;

      /**
       * coin ticker exchange identifier
       */
      identifier?: string;

      /**
       * coin ticker exchange name
       */
      name?: string;
    }
  }
}

export interface CoinsTickers {
  /**
   * coin name
   */
  name?: string;

  /**
   * list of tickers
   */
  tickers?: Array<CoinsTickers.Ticker>;
}

export namespace CoinsTickers {
  export interface Ticker {
    /**
     * coin ticker base currency
     */
    base?: string;

    /**
     * coin ticker bid ask spread percentage
     */
    bid_ask_spread_percentage?: number;

    /**
     * coin ticker base currency coin ID
     */
    coin_id?: string;

    /**
     * coin ticker converted last price
     */
    converted_last?: Ticker.ConvertedLast;

    /**
     * coin ticker converted volume
     */
    converted_volume?: Ticker.ConvertedVolume;

    /**
     * coin ticker cost to move down in usd
     */
    cost_to_move_down_usd?: number;

    /**
     * coin ticker cost to move up in usd
     */
    cost_to_move_up_usd?: number;

    /**
     * coin ticker anomaly
     */
    is_anomaly?: boolean;

    /**
     * coin ticker stale
     */
    is_stale?: boolean;

    /**
     * coin ticker last price
     */
    last?: number;

    /**
     * coin ticker last fetch timestamp
     */
    last_fetch_at?: string;

    /**
     * coin ticker last traded timestamp
     */
    last_traded_at?: string;

    /**
     * coin ticker exchange
     */
    market?: Ticker.Market;

    /**
     * coin ticker target currency
     */
    target?: string;

    /**
     * coin ticker target currency coin ID
     */
    target_coin_id?: string;

    /**
     * coin ticker timestamp
     */
    timestamp?: string;

    /**
     * coin ticker token info url
     */
    token_info_url?: string | null;

    /**
     * coin ticker trade url
     */
    trade_url?: string;

    /**
     * coin ticker trust score
     */
    trust_score?: string;

    /**
     * coin ticker volume
     */
    volume?: number;
  }

  export namespace Ticker {
    /**
     * coin ticker converted last price
     */
    export interface ConvertedLast {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * coin ticker converted volume
     */
    export interface ConvertedVolume {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * coin ticker exchange
     */
    export interface Market {
      /**
       * exchange trading incentive
       */
      has_trading_incentive: boolean;

      /**
       * exchange identifier
       */
      identifier: string;

      /**
       * exchange name
       */
      name: string;

      /**
       * exchange image url
       */
      logo?: string;
    }
  }
}

export type CoinListResponse = Array<CoinListResponse.CoinListResponseItem>;

export namespace CoinListResponse {
  export interface CoinListResponseItem {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin asset platform and contract address
     */
    platforms?: Record<string, string>;

    /**
     * coin symbol
     */
    symbol?: string;
  }
}

export interface CoinListWithMarketDataResponse {
  /**
   * coin ID
   */
  id?: string;

  /**
   * coin all time high (ATH) in currency
   */
  ath?: number;

  /**
   * coin all time high (ATH) change in percentage
   */
  ath_change_percentage?: number;

  /**
   * coin all time high (ATH) date
   */
  ath_date?: string;

  /**
   * coin all time low (atl) in currency
   */
  atl?: number;

  /**
   * coin all time low (atl) change in percentage
   */
  atl_change_percentage?: number;

  /**
   * coin all time low (atl) date
   */
  atl_date?: string;

  /**
   * coin circulating supply
   */
  circulating_supply?: number;

  /**
   * coin current price in currency
   */
  current_price?: number;

  /**
   * coin fully diluted valuation (fdv) in currency
   */
  fully_diluted_valuation?: number;

  /**
   * coin 24hr price high in currency
   */
  high_24h?: number;

  /**
   * coin image url
   */
  image?: string;

  /**
   * coin last updated timestamp
   */
  last_updated?: string;

  /**
   * coin 24hr price low in currency
   */
  low_24h?: number;

  /**
   * coin market cap in currency
   */
  market_cap?: number;

  /**
   * coin 24hr market cap change in currency
   */
  market_cap_change_24h?: number;

  /**
   * coin 24hr market cap change in percentage
   */
  market_cap_change_percentage_24h?: number;

  /**
   * coin rank by market cap
   */
  market_cap_rank?: number;

  /**
   * coin max supply
   */
  max_supply?: number;

  /**
   * coin name
   */
  name?: string;

  /**
   * coin 24hr price change in currency
   */
  price_change_24h?: number;

  /**
   * coin 1h price change in percentage
   */
  price_change_percentage_1h?: number;

  /**
   * coin 24hr price change in percentage
   */
  price_change_percentage_24h?: number;

  roi?: string;

  /**
   * coin price sparkline in 7 days
   */
  sparkline_in_7d?: CoinListWithMarketDataResponse.SparklineIn7d;

  /**
   * coin symbol
   */
  symbol?: string;

  /**
   * coin total supply
   */
  total_supply?: number;

  /**
   * coin total trading volume in currency
   */
  total_volume?: number;
}

export namespace CoinListWithMarketDataResponse {
  /**
   * coin price sparkline in 7 days
   */
  export interface SparklineIn7d {
    price?: Array<number>;
  }
}

export interface CoinRetrieveHistoryResponse {
  /**
   * coin ID
   */
  id?: string;

  /**
   * coin community data
   */
  community_data?: CoinRetrieveHistoryResponse.CommunityData;

  /**
   * coin developer data
   */
  developer_data?: CoinRetrieveHistoryResponse.DeveloperData;

  /**
   * coin image url
   */
  image?: CoinRetrieveHistoryResponse.Image;

  /**
   * coin localization
   */
  localization?: Record<string, string>;

  /**
   * coin market data
   */
  market_data?: CoinRetrieveHistoryResponse.MarketData;

  /**
   * coin name
   */
  name?: string;

  /**
   * coin public interest stats
   */
  public_interest_stats?: CoinRetrieveHistoryResponse.PublicInterestStats;

  /**
   * coin symbol
   */
  symbol?: string;
}

export namespace CoinRetrieveHistoryResponse {
  /**
   * coin community data
   */
  export interface CommunityData {
    /**
     * coin facebook likes
     */
    facebook_likes?: number;

    /**
     * coin reddit accounts active 48h
     */
    reddit_accounts_active_48h?: number;

    /**
     * coin reddit average comments 48h
     */
    reddit_average_comments_48h?: number;

    /**
     * coin reddit average posts 48h
     */
    reddit_average_posts_48h?: number;

    /**
     * coin reddit subscribers
     */
    reddit_subscribers?: number;

    /**
     * coin twitter followers
     */
    twitter_followers?: number;
  }

  /**
   * coin developer data
   */
  export interface DeveloperData {
    /**
     * coin repository closed issues
     */
    closed_issues?: number;

    /**
     * coin code additions deletions 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;

    /**
     * coin commit count 4 weeks
     */
    commit_count_4_weeks?: number;

    /**
     * coin repository forks
     */
    forks?: number;

    /**
     * coin repository pull request contributors
     */
    pull_request_contributors?: number;

    /**
     * coin repository pull requests merged
     */
    pull_requests_merged?: number;

    /**
     * coin repository stars
     */
    stars?: number;

    /**
     * coin repository subscribers
     */
    subscribers?: number;

    /**
     * coin repository total issues
     */
    total_issues?: number;
  }

  export namespace DeveloperData {
    /**
     * coin code additions deletions 4 weeks
     */
    export interface CodeAdditionsDeletions4Weeks {
      additions?: number;

      deletions?: number;
    }
  }

  /**
   * coin image url
   */
  export interface Image {
    small?: string;

    thumb?: string;
  }

  /**
   * coin market data
   */
  export interface MarketData {
    /**
     * coin current price
     */
    current_price?: MarketData.CurrentPrice;

    /**
     * coin market cap
     */
    market_cap?: MarketData.MarketCap;

    /**
     * coin total volume
     */
    total_volume?: MarketData.TotalVolume;
  }

  export namespace MarketData {
    /**
     * coin current price
     */
    export interface CurrentPrice {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin market cap
     */
    export interface MarketCap {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin total volume
     */
    export interface TotalVolume {
      btc?: number;

      eur?: number;

      usd?: number;
    }
  }

  /**
   * coin public interest stats
   */
  export interface PublicInterestStats {
    /**
     * coin alexa rank
     */
    alexa_rank?: number;

    /**
     * coin bing matches
     */
    bing_matches?: number;
  }
}

export type CoinRetrieveOhlcResponse = Array<Array<number>>;

export interface CoinRetrieveParams {
  /**
   * include community data, default: true
   */
  community_data?: boolean;

  /**
   * include developer data, default: true
   */
  developer_data?: boolean;

  /**
   * include all the localized languages in the response, default: true
   */
  localization?: boolean;

  /**
   * include market data, default: true
   */
  market_data?: boolean;

  /**
   * include sparkline 7 days data, default: false
   */
  sparkline?: boolean;

  /**
   * include tickers data, default: true
   */
  tickers?: boolean;
}

export interface CoinListParams {
  /**
   * include platform and token's contract addresses, default: false
   */
  include_platform?: boolean;
}

export interface CoinListWithMarketDataParams {
  /**
   * target currency of coins and market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * filter based on coins' category \*refers to
   * [`/coins/categories/list`](/reference/coins-categories-list).
   */
  category?: string;

  /**
   * coins' IDs, comma-separated if querying more than 1 coin. \*refers to
   * [`/coins/list`](/reference/coins-list).
   */
  ids?: string;

  /**
   * for `symbols` lookups, specify `all` to include all matching tokens Default
   * `top` returns top-ranked tokens (by market cap or volume)
   */
  include_tokens?: 'top' | 'all';

  /**
   * language background, default: en
   */
  locale?:
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh'
    | 'zh-tw';

  /**
   * coins' names, comma-separated if querying more than 1 coin.
   */
  names?: string;

  /**
   * sort result by field, default: market_cap_desc
   */
  order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc';

  /**
   * page through results, default: 1
   */
  page?: number;

  /**
   * total results per page, default: 100 Valid values: 1...250
   */
  per_page?: number;

  /**
   * decimal place for currency price value
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

  /**
   * include price change percentage timeframe, comma-separated if query more than 1
   * price change percentage timeframe Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y
   */
  price_change_percentage?: string;

  /**
   * include sparkline 7 days data, default: false
   */
  sparkline?: boolean;

  /**
   * coins' symbols, comma-separated if querying more than 1 coin.
   */
  symbols?: string;
}

export interface CoinRetrieveHistoryParams {
  /**
   * the date of data snapshot Format: `dd-mm-yyyy`
   */
  date: string;

  /**
   * include all the localized languages in response, default: true
   */
  localization?: boolean;
}

export interface CoinRetrieveOhlcParams {
  /**
   * data up to number of days ago
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365';

  /**
   * target currency of price data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * decimal place for currency price value
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

export interface CoinRetrieveTickersParams {
  /**
   * include 2% orderbook depth, ie. `cost_to_move_up_usd` and
   * `cost_to_move_down_usd` Default: false
   */
  depth?: boolean;

  /**
   * exchange ID \*refers to [`/exchanges/list`](/reference/exchanges-list).
   */
  exchange_ids?: string;

  /**
   * include exchange logo, default: false
   */
  include_exchange_logo?: boolean;

  /**
   * use this to sort the order of responses, default: trust_score_desc
   */
  order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc';

  /**
   * page through results
   */
  page?: number;
}

Coins.MarketChart = MarketChart;
Coins.Contract = Contract;
Coins.Categories = Categories;

export declare namespace Coins {
  export {
    type CoinsDataBase as CoinsDataBase,
    type CoinsTickers as CoinsTickers,
    type CoinListResponse as CoinListResponse,
    type CoinListWithMarketDataResponse as CoinListWithMarketDataResponse,
    type CoinRetrieveHistoryResponse as CoinRetrieveHistoryResponse,
    type CoinRetrieveOhlcResponse as CoinRetrieveOhlcResponse,
    type CoinRetrieveParams as CoinRetrieveParams,
    type CoinListParams as CoinListParams,
    type CoinListWithMarketDataParams as CoinListWithMarketDataParams,
    type CoinRetrieveHistoryParams as CoinRetrieveHistoryParams,
    type CoinRetrieveOhlcParams as CoinRetrieveOhlcParams,
    type CoinRetrieveTickersParams as CoinRetrieveTickersParams,
  };

  export {
    MarketChart as MarketChart,
    type CoinsMarketChart as CoinsMarketChart,
    type CoinsMarketChartRange as CoinsMarketChartRange,
    type MarketChartRetrieveParams as MarketChartRetrieveParams,
    type MarketChartRetrieveRangeParams as MarketChartRetrieveRangeParams,
  };

  export { Contract as Contract, type ContractRetrieveParams as ContractRetrieveParams };

  export {
    Categories as Categories,
    type CategoryListResponse as CategoryListResponse,
    type CategoryListWithMarketDataResponse as CategoryListWithMarketDataResponse,
    type CategoryListWithMarketDataParams as CategoryListWithMarketDataParams,
  };
}
