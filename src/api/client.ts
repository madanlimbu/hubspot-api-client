import { ApiConfig, HubspotClientApiInterface } from './Interface';
import { HubspotAssociationApi } from './association/api';
import { HubspotEngagementApi } from './engagement/api';
import { HubspotObjectApi } from './object/api';
import { HubspotFileApi } from './file/api';

export function HubspotClientApi(config: ApiConfig): HubspotClientApiInterface {
  return {
    object: HubspotObjectApi(config),
    association: HubspotAssociationApi(config),
    engagement: HubspotEngagementApi(config),
    file: HubspotFileApi(config),
  };
}
