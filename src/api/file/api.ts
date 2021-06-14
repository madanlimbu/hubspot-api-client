import axios from 'axios';
import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';

export interface HubspotFileApiInterface {
  queryFileById(param: HubspotRequestType<Query.FileByIdRequest>): Promise<Query.File>;
  queryGetFileSignedUrlById(param: HubspotRequestType<Query.FileSignedUrlRequest>): Promise<Query.FileSignedUrl>;
}

export function HubspotFileApi(config: ApiConfig): HubspotFileApiInterface {
  return {
    queryFileById: (param) => axios(Query.queryFileById(config, param)).then((res) => res.data),
    queryGetFileSignedUrlById: (param) => axios(Query.queryGetFileSignedUrlById(config, param)).then((res) => res.data),
  };
}
