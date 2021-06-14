import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';
export interface HubspotAssociationApiInterface {
    batchReadObject(param: HubspotRequestType<Query.AssociationsBatchReadRequest>): Promise<Query.AssociationsBatchReadResponse>;
}
export declare function HubspotAssociationApi(config: ApiConfig): HubspotAssociationApiInterface;
