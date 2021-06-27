import { Query, RequestParam } from '../Interface';

/***************** Request Type *****************/

export interface FileByIdRequest extends RequestParam {
  pathParams: {
    fileId: number | string;
  };
}

export interface FileSignedUrlRequest extends RequestParam {
  pathParams: {
    fileId: number | string;
  };
  queryParams?: {
    size?: 'thumb' | 'icon' | 'medium' | 'preview';
    expirationSeconds?: number;
  };
}

/***************** Response Types *****************/

export interface File {
  id: string;
  url: string;
  path: string;
  name: string;
  extension: string;
  type: string;
  defaultHostingUrl: string;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
  encoding: string;
  access: 'PUBLIC_INDEXABLE' | 'PUBLIC_NOT_INDEXABLE' | 'PRIVATE' | 'HIDDEN_PRIVATE';
}

export interface FileSignedUrl {
  // expiresAt: string;
  url: string;
  // name: string;
  // extension: string;
  // type: string;
  // size: string;
}

/***************** Query function Types *****************/

// Query generators for Axios.
type QueryGetFileById = Query<FileByIdRequest>;
type QueryGetFileSignedUrlById = Query<FileSignedUrlRequest>;

/***************** Implementation of Query function Types *****************/

/**
 * Get File detail by File ID
 *
 * @param ApiConfig
 * @param FileByIdRequest
 */
export const queryFileById: QueryGetFileById = (config, arg) => {
  const url = `https://api.hubspot.com/files/v3/files/${arg.params.pathParams.fileId}/?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'GET',
  };
  return { ...options, ...arg.customAxiosConfig };
};

/**
 * Get Private File Signed URL by File ID
 *
 * @param ApiConfig
 * @param FileByIdRequest
 */
export const queryGetFileSignedUrlById: QueryGetFileSignedUrlById = (config, arg) => {
  const { pathParams, queryParams } = arg.params;
  const url = `https://api.hubspot.com/files/v3/files/${pathParams.fileId}/signed-url?hapikey=${config.api_key}`;
  const options = {
    url,
    method: <const>'GET',
    params: queryParams,
  };
  return { ...options, ...arg.customAxiosConfig };
};
