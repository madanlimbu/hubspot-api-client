import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';
export interface HubspotObjectApiInterface {
    getObjectById<T>(param: HubspotRequestType<Query.HubspotReadObjectByIdRequest>): Promise<Query.HubspotReadObjectByIdResponse<T>>;
    batchReadObject<T>(param: HubspotRequestType<Query.HubspotObjectBatchReadRequest>): Promise<Query.HubspotObjectBatchReadResponse<T>>;
    updateObjectById<T>(param: HubspotRequestType<Query.HubpostUpdateObjectRequest>): Promise<Query.HubspotUpdateObjectResponse<T>>;
    searchObjects<T>(param: HubspotRequestType<Query.HubspotObjectSearchRequest>): Promise<Query.HubspotObjectSearchResponse<T>>;
}
export declare function HubspotObjectApi(config: ApiConfig): HubspotObjectApiInterface;
