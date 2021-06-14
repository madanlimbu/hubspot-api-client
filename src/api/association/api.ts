import axios from 'axios';
import { ApiConfig, HubspotRequestType } from '../Interface';
import * as Query from './query';

export interface HubspotAssociationApiInterface {
  batchReadObject(
    param: HubspotRequestType<Query.AssociationsBatchReadRequest>
  ): Promise<Query.AssociationsBatchReadResponse>;
}

export function HubspotAssociationApi(config: ApiConfig): HubspotAssociationApiInterface {
  return {
    batchReadObject: (param) => axios(Query.queryBatchRead(config, param)).then((res) => res.data),
  };
}
