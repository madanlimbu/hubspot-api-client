import { FilterOperator, Query, RequestParam } from '../Interface';
export declare type HubspotObjectType = 'contact' | 'contacts' | 'company' | 'companies' | 'deal' | 'deals';
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
export interface HubspotObjectBatchReadRequest extends RequestParam {
    pathParams: {
        objectType: string | HubspotObjectType;
    };
    bodyParams: {
        properties: string[];
        inputs: {
            id: string;
        }[];
    };
}
export interface HubpostUpdateObjectRequest extends RequestParam {
    bodyParams?: {
        properties: any;
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
export interface HubspotReadObjectByIdResponse<T> {
    id: string;
    properties: T;
    associations?: Record<string, AssociationsResults>;
}
export interface HubspotObjectBatchReadResponse<T> {
    status: string;
    results: ObjectResponseType<T>[];
}
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
declare type QueryReadObjectByIdType = Query<HubspotReadObjectByIdRequest>;
declare type QueryBatchReadObject = Query<HubspotObjectBatchReadRequest>;
declare type QueryUpdateObjectById = Query<HubpostUpdateObjectRequest>;
declare type QuerySearchObject = Query<HubspotObjectSearchRequest>;
/***************** Implementation of Query function Types *****************/
/**
 * Read a batch of objects by internal ID, or unique property values.
 *
 * @param ApiConfig
 * @param ObjectQueryParams<HubspotObjectBatchReadParam>
 */
export declare const queryBatchRead: QueryBatchReadObject;
/**
 * Get Object by Internal object ID.
 *
 * @param ApiConfig
 * @param ObjectQueryParams<HubspotReadObjectByIdParam>
 */
export declare const queryReadObjectById: QueryReadObjectByIdType;
/**
 * Update Object by object id.
 *
 * @param config
 * @param arg
 */
export declare const queryUpdateObjectById: QueryUpdateObjectById;
/**
 * Filter, Sort, and Search CRM Objects.
 *
 * @param config
 * @param arg
 */
export declare const querySearchObject: QuerySearchObject;
export {};
