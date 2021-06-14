import axios from 'axios';
import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';

export interface HubspotObjectApiInterface {
  getObjectById<T>(
    param: HubspotRequestType<Query.HubspotReadObjectByIdRequest>
  ): Promise<Query.HubspotReadObjectByIdResponse<T>>;
  batchReadObject<T>(
    param: HubspotRequestType<Query.HubspotObjectBatchReadRequest>
  ): Promise<Query.HubspotObjectBatchReadResponse<T>>;
  updateObjectById<T>(
    param: HubspotRequestType<Query.HubpostUpdateObjectRequest>
  ): Promise<Query.HubspotUpdateObjectResponse<T>>;
  searchObjects<T>(
    param: HubspotRequestType<Query.HubspotObjectSearchRequest>
  ): Promise<Query.HubspotObjectSearchResponse<T>>;
}

export function HubspotObjectApi(config: ApiConfig): HubspotObjectApiInterface {
  return {
    getObjectById: (param) => axios(Query.queryReadObjectById(config, param)).then((res) => res.data),
    batchReadObject: (param) => axios(Query.queryBatchRead(config, param)).then((res) => res.data),
    updateObjectById: (param) => axios(Query.queryUpdateObjectById(config, param)).then((res) => res.data),
    searchObjects: (param) => axios(Query.querySearchObject(config, param)).then((res) => res.data),
  };
}
