import { AxiosRequestConfig } from 'axios';
import { HubspotAssociationApiInterface } from './association/api';
import { HubspotEngagementApiInterface } from './engagement/api';
import { HubspotFileApiInterface } from './file/api';
import { HubspotObjectApiInterface } from './object/api';
export declare type FilterOperator = 'EQ' | 'NEQ' | 'LT' | 'LTE' | 'GT' | 'GTE' | 'HAS_PROPERTY' | 'NOT_HAS_PROPERTY' | 'CONTAINS_TOKEN' | 'NOT_CONTAINS_TOKEN';
export interface RequestParam {
    pathParam?: any;
    queryParam?: any;
    bodyParam?: any;
}
export interface HubspotRequestType<T extends RequestParam> {
    params: T;
    customAxiosConfig?: AxiosRequestConfig;
}
export declare type Query<T> = (config: ApiConfig, param: HubspotRequestType<T>) => AxiosRequestConfig;
export declare type BatchStatus = 'PENDING' | 'COMPLETE';
export interface ApiConfig {
    api_key: string;
}
export interface HubspotClientApiInterface {
    object: HubspotObjectApiInterface;
    association: HubspotAssociationApiInterface;
    engagement: HubspotEngagementApiInterface;
    file: HubspotFileApiInterface;
}
