import { Query, RequestParam } from '../Interface';

/***************** Request Type *****************/

export interface EngagementByIdRequest extends RequestParam {
  pathParams: {
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

// Query generators for Axios.
type QueryGetEngagementById = Query<EngagementByIdRequest>;

/***************** Implementation of Query function Types *****************/

/**
 * Get Engagement detail by Engagement ID
 *
 * @param ApiConfig
 * @param EngagementByIdRequest
 */
export const queryEngagementById: QueryGetEngagementById = (config, arg) => {
  const { params, customAxiosConfig } = arg;
  const url = `https://api.hubspot.com/engagements/v1/engagements/${params.pathParams.engagementId}?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'GET',
  };
  return { ...options, ...customAxiosConfig };
};
