import { BatchStatus, Query, RequestParam } from '../Interface';
/***************** Request Type *****************/
export interface AssociationsBatchReadRequest extends RequestParam {
    bodyParam: {
        inputs: {
            id: string;
        }[];
    };
    pathParam: {
        fromObjectType: string;
        toObjectType: string;
    };
}
/***************** Response Types *****************/
export interface AssociationsBatchReadResponse {
    status: BatchStatus;
    results: {
        from: {
            id: string;
        };
        to: {
            id: string;
            type: string;
        }[];
    }[];
    numErrors?: number;
    errors?: {
        status: string;
        id: string;
        message: string;
    }[];
}
/***************** Query function Types *****************/
declare type QueryBatchReadAssociations = Query<AssociationsBatchReadRequest>;
/***************** Implementation of Query function Types *****************/
/**
 * Get the IDs of all {toObjectType} objects associated with those specified in the request body.
 *
 * @param config
 * @param AssociationsBatchReadRequest
 */
export declare const queryBatchRead: QueryBatchReadAssociations;
export {};
