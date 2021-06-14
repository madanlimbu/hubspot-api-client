import { Query, RequestParam } from '../Interface';
/***************** Request Type *****************/
export interface EngagementByIdRequest extends RequestParam {
    pathParam: {
        engagementId: string;
    };
}
/***************** Response Types *****************/
export interface Engagement {
    engagement: {
        id: number;
        portalId: number;
        active: boolean;
        type: 'NOTE';
    };
    attachments?: {
        id: number;
    }[];
}
/***************** Query function Types *****************/
declare type QueryGetEngagementById = Query<EngagementByIdRequest>;
/***************** Implementation of Query function Types *****************/
/**
 * Get Engagement detail by Engagement ID
 *
 * @param ApiConfig
 * @param EngagementByIdRequest
 */
export declare const queryEngagementById: QueryGetEngagementById;
export {};
