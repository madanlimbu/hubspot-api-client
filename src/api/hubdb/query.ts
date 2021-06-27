import { HubdbV2FilterOperator, Query } from '../Interface';

export interface HubdbRowResponseType<T> {
  id: string;
  name: string | null;
  path: string | null;
  createdAt: string;
  values: T;
}

/***************** Request Type *****************/

export interface HubspotHubdbCreateRowInBatchRequest {
  pathParams: {
    tableIdOrName: string;
  };
  bodyParams: {
    inputs: {
      values: any;
    }[];
  };
}

export interface HubspotHubdbPublishTableRequest {
  pathParams: {
    tableIdOrName: string;
  };
}

export interface HubspotHubdbDeleteRowFromTableRequest {
  pathParams: {
    rowId: string;
    tableIdOrName: string;
  };
}

// Hubspot hubdb row table request.
export interface HubspotHubdbGetRowsFromTableRequest {
  pathParams: {
    tableIdOrName: string;
    properties?: string[];
    filters?: {
      value: string | number;
      propertyName: string;
      operator: HubdbV2FilterOperator;
    }[];
  };
  queryParams?: {
    after?: string;
    limit?: string;
    sort?: string;
  };
}

/***************** Response Types *****************/

// Response Batch of Hubdb Row
export interface HubspotHubdbGetRowsFromTableResponse<T> {
  total: number;
  results: HubdbRowResponseType<T>[];
  paging?: {
    next: {
      after: string;
      link: string;
    };
  };
}

export interface HubspotHubdbPublishTableResponse {
  id: string;
  name: string;
  publishedAt: string;
}

export interface HubspotHubdbCreateRowInBatchResponse<T> {
  status: string;
  results: T[];
}

type QueryGetRowsFromTable = Query<HubspotHubdbGetRowsFromTableRequest>;
type QueryDeleteRowFromTable = Query<HubspotHubdbDeleteRowFromTableRequest>;
type QueryPublishTable = Query<HubspotHubdbPublishTableRequest>;
type QueryCreateRowsInBatch = Query<HubspotHubdbCreateRowInBatchRequest>;

/**
 * Create rows in batch
 * Creates rows in the draft version of the specified table, given an array of row objects. See the overview section for more details with an example.
 *
 * @param config
 * @param arg
 */
export const queryCreateRowsInBatch: QueryCreateRowsInBatch = (config, arg) => {
  const { pathParams, bodyParams } = arg.params;
  const url = `https://api.hubapi.com/cms/v3/hubdb/tables/${pathParams.tableIdOrName}/rows/draft/batch/create?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'POST',
    data: bodyParams,
  };
  return { ...options, ...arg.customAxiosConfig };
};

/**
 * Publish a table from draft
 * Copies the data from draft to live version of the table and also publishes the live version. This will immediately push the data to the live version of the table and publishes the live version, meaning any website pages using data from the table will be updated.
 *
 * @param config
 * @param arg
 */
export const queryPublishTable: QueryPublishTable = (config, arg) => {
  const url = `https://api.hubapi.com/cms/v3/hubdb/tables/${arg.params.pathParams.tableIdOrName}/draft/push-live/?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return { ...options, ...arg.customAxiosConfig };
};

/**
 * Permanently deletes a row from a table's draft version.
 *
 * @param config
 * @param arg
 */
export const queryDeleteRowFromTable: QueryDeleteRowFromTable = (config, arg) => {
  const { rowId, tableIdOrName } = arg.params.pathParams;
  const url = `https://api.hubspot.com/cms/v3/hubdb/tables/${tableIdOrName}/rows/${rowId}/draft/?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'DELETE',
  };
  return { ...options, ...arg.customAxiosConfig };
};

/**
 * Returns a set of rows in the live version of the specified table. Row results can be filtered and sorted. Refer to the overview section for detailed filtering and sorting options.
 *
 * @param config
 * @param arg
 */
export const queryGetRowsFromTable: QueryGetRowsFromTable = (config, arg) => {
  const { pathParams, queryParams } = arg.params;
  const properties = pathParams?.properties?.map((value) => `properties=${value}`).join('&');
  const filters = pathParams?.filters
    ?.map((filter) => `${filter.propertyName}__${filter.operator}=${filter.value}`)
    .join('&');

  const propertiesParams = properties ? `&${properties}` : '';
  const filtersParams = filters ? `&${filters}` : '';

  const url = `https://api.hubspot.com/cms/v3/hubdb/tables/${pathParams.tableIdOrName}/rows?${filtersParams}${propertiesParams}&hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'GET',
    params: queryParams,
  };
  return { ...options, ...arg.customAxiosConfig };
};
