import { BatchStatus, Query, RequestParam } from '../Interface';

/***************** Request Type *****************/

export interface AssociationsBatchReadRequest extends RequestParam {
  bodyParams: {
    inputs: {
      id: string;
    }[];
  };
  pathParams: {
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

// Query generators for Axios.
type QueryBatchReadAssociations = Query<AssociationsBatchReadRequest>;

/***************** Implementation of Query function Types *****************/

/**
 * Get the IDs of all {toObjectType} objects associated with those specified in the request body.
 *
 * @param config
 * @param AssociationsBatchReadRequest
 */
export const queryBatchRead: QueryBatchReadAssociations = (config, { params, customAxiosConfig }) => {
  const { fromObjectType, toObjectType } = params.pathParams;
  const url = `https://api.hubspot.com/crm/v3/associations/${fromObjectType}/${toObjectType}/batch/read?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'POST',
    data: params.bodyParams,
  };
  return { ...options, ...customAxiosConfig };
};
