import { FilterOperator, Query, RequestParam } from '../Interface';

export type HubspotObjectType = 'contact' | 'contacts' | 'company' | 'companies' | 'deal' | 'deals';

export interface ObjectResponseType<T> {
  id: string;
  properties: T;
  associations?: any;
}

export interface AssociationsResults {
  results: {
    id: string;
    type: string;
  }[];
}

/***************** Request Type *****************/

// Request param to Read Object by Id.
export interface HubspotReadObjectByIdRequest extends RequestParam {
  pathParams: {
    objectId: string | number;
    objectType: string | HubspotObjectType;
  };
  queryParams?: {
    properties?: string;
    associations?: string;
    archived?: boolean;
  };
}

// Request param to Batch Read Objects.
export interface HubspotObjectBatchReadRequest extends RequestParam {
  pathParams: {
    objectType: string | HubspotObjectType;
  };
  bodyParams: {
    properties: string[];
    inputs: { id: string }[];
  };
}

// Request param to update object.
export interface HubpostUpdateObjectRequest extends RequestParam {
  bodyParams?: {
    properties: any;
    // {[key: string]: string | number};
  };
  pathParams: {
    objectId: string | number;
    objectType: string | HubspotObjectType;
  };
}

export interface HubspotObjectSearchRequest extends RequestParam {
  pathParams: {
    objectType: string | HubspotObjectType;
  };
  bodyParams: {
    filterGroups: {
      filters: {
        value: string;
        propertyName: string;
        operator: FilterOperator;
      }[];
    }[];
    sorts?: string[];
    properties?: string[];
    limit: number;
    after: number;
    query?: string;
  };
}

/***************** Response Types *****************/

// Response Object
export interface HubspotReadObjectByIdResponse<T> {
  id: string;
  properties: T;
  associations?: Record<string, AssociationsResults>;
}

// Response Batch of Objects
export interface HubspotObjectBatchReadResponse<T> {
  status: string;
  results: ObjectResponseType<T>[];
}

// Response Update Object
export interface HubspotUpdateObjectResponse<T> {
  id: string;
  properties: T;
}

export interface HubspotObjectSearchResponse<T> {
  total: number;
  results: {
    createdAt: string;
    archived: boolean;
    id: string;
    properties: T;
  }[];
  paging?: {
    next: {
      link: string;
      after: string;
    };
  };
}

/***************** Query function Types *****************/

// Query generators for Axios.
type QueryReadObjectByIdType = Query<HubspotReadObjectByIdRequest>;
type QueryBatchReadObject = Query<HubspotObjectBatchReadRequest>;
type QueryUpdateObjectById = Query<HubpostUpdateObjectRequest>;
type QuerySearchObject = Query<HubspotObjectSearchRequest>;

/***************** Implementation of Query function Types *****************/

/**
 * Read a batch of objects by internal ID, or unique property values.
 *
 * @param ApiConfig
 * @param ObjectQueryParams<HubspotObjectBatchReadParam>
 */
export const queryBatchRead: QueryBatchReadObject = (config, { params, customAxiosConfig }) => {
  const url = `https://api.hubspot.com/crm/v3/objects/${params.pathParams.objectType}/batch/read?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'POST',
    data: params.bodyParams,
  };
  return { ...options, ...customAxiosConfig };
};

/**
 * Get Object by Internal object ID.
 *
 * @param ApiConfig
 * @param ObjectQueryParams<HubspotReadObjectByIdParam>
 */
export const queryReadObjectById: QueryReadObjectByIdType = (config, arg) => {
  const { pathParams, queryParams } = arg.params;
  const url = `https://api.hubspot.com/crm/v3/objects/${pathParams.objectType}/${pathParams.objectId}?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'GET',
    params: queryParams,
  };
  return { ...options, ...arg.customAxiosConfig };
};

/**
 * Update Object by object id.
 *
 * @param config
 * @param arg
 */
export const queryUpdateObjectById: QueryUpdateObjectById = (config, arg) => {
  const url = `https://api.hubspot.com/crm/v3/objects/${arg.params.pathParams.objectType}/${arg.params.pathParams.objectId}?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'PATCH',
    data: arg.params.bodyParams,
  };
  return { ...options, ...arg.customAxiosConfig };
};

/**
 * Filter, Sort, and Search CRM Objects.
 *
 * @param config
 * @param arg
 */
export const querySearchObject: QuerySearchObject = (config, arg) => {
  console.log(`It is creating param`);
  const { pathParams, bodyParams } = arg.params;
  const url = `https://api.hubspot.com/crm/v3/objects/${pathParams.objectType}/search?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'POST',
    data: bodyParams,
  };
  return { ...options, ...arg.customAxiosConfig };
};
