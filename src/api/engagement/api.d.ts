import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';
export interface HubspotEngagementApiInterface {
    queryEngagementById(param: HubspotRequestType<Query.EngagementByIdRequest>): Promise<Query.Engagement>;
}
export declare function HubspotEngagementApi(config: ApiConfig): HubspotEngagementApiInterface;
