// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SaTest } from '../client';

export abstract class APIResource {
  protected _client: SaTest;

  constructor(client: SaTest) {
    this._client = client;
  }
}
