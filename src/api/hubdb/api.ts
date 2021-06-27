import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';
import axios from 'axios';

export interface HubspotHubdbApiInterface {
  queryRowsFromHubdbTable<T>(
    params: HubspotRequestType<Query.HubspotHubdbGetRowsFromTableRequest>
  ): Promise<Query.HubspotHubdbGetRowsFromTableResponse<T>>;
  deleteRowFromTable(params: HubspotRequestType<Query.HubspotHubdbDeleteRowFromTableRequest>): Promise<any>;
  publishTable(
    params: HubspotRequestType<Query.HubspotHubdbPublishTableRequest>
  ): Promise<Query.HubspotHubdbPublishTableResponse>;
  addRowsOfItemToTable<T>(
    params: HubspotRequestType<Query.HubspotHubdbCreateRowInBatchRequest>
  ): Promise<Query.HubspotHubdbCreateRowInBatchResponse<T>>;
}

export function HubspotHubdbApi(config: ApiConfig): HubspotHubdbApiInterface {
  return {
    deleteRowFromTable: (param) => axios(Query.queryDeleteRowFromTable(config, param)).then((res) => res.data),
    queryRowsFromHubdbTable: (param) => axios(Query.queryGetRowsFromTable(config, param)).then((res) => res.data),
    publishTable: (param) => axios(Query.queryPublishTable(config, param)).then((res) => res.data),
    addRowsOfItemToTable: (param) => axios(Query.queryCreateRowsInBatch(config, param)).then((res) => res.data),
  };
}
