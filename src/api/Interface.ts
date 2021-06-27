import { AxiosRequestConfig } from 'axios';
import { HubspotAssociationApiInterface } from './association/api';
import { HubspotEngagementApiInterface } from './engagement/api';
import { HubspotFileApiInterface } from './file/api';
import { HubspotObjectApiInterface } from './object/api';
import { HubspotHubdbApiInterface } from './hubdb/api';

export type FilterOperator =
  | 'EQ'
  | 'NEQ'
  | 'LT'
  | 'LTE'
  | 'GT'
  | 'GTE'
  | 'HAS_PROPERTY'
  | 'NOT_HAS_PROPERTY'
  | 'CONTAINS_TOKEN'
  | 'NOT_CONTAINS_TOKEN';

export type HubdbV2FilterOperator = 'eq' | 'ne';

export type SORTS_TYPE = 'DESCENDING' | 'ASCENDING';

export interface RequestParam {
  pathParams?: any;
  queryParams?: any;
  bodyParams?: any;
}

export interface HubspotRequestType<T extends RequestParam> {
  params: T;
  customAxiosConfig?: AxiosRequestConfig;
}

export type Query<T> = (config: ApiConfig, param: HubspotRequestType<T>) => AxiosRequestConfig;

export type BatchStatus = 'PENDING' | 'COMPLETE';

export interface ApiConfig {
  api_key: string;
}

// export type MakeRequest<T> = (requestQuery: AxiosRequestConfig) => Promise<T>

export interface HubspotClientApiInterface {
  object: HubspotObjectApiInterface;
  association: HubspotAssociationApiInterface;
  engagement: HubspotEngagementApiInterface;
  file: HubspotFileApiInterface;
  hubdb: HubspotHubdbApiInterface;
}
