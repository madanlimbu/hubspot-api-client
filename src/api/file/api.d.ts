import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';
export interface HubspotFileApiInterface {
    queryFileById(param: HubspotRequestType<Query.FileByIdRequest>): Promise<Query.File>;
    queryGetFileSignedUrlById(param: HubspotRequestType<Query.FileSignedUrlRequest>): Promise<Query.FileSignedUrl>;
}
export declare function HubspotFileApi(config: ApiConfig): HubspotFileApiInterface;
