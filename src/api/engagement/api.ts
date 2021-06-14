import axios from 'axios';
import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';

export interface HubspotEngagementApiInterface {
  queryEngagementById(param: HubspotRequestType<Query.EngagementByIdRequest>): Promise<Query.Engagement>;
}

export function HubspotEngagementApi(config: ApiConfig): HubspotEngagementApiInterface {
  return {
    queryEngagementById: (param) => axios(Query.queryEngagementById(config, param)).then((res) => res.data),
  };
}
