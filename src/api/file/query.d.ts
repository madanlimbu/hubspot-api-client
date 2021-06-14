import { Query, RequestParam } from '../Interface';
/***************** Request Type *****************/
export interface FileByIdRequest extends RequestParam {
    pathParam: {
        fileId: number | string;
    };
}
export interface FileSignedUrlRequest extends RequestParam {
    pathParam: {
        fileId: number | string;
    };
    queryParam?: {
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
    url: string;
}
/***************** Query function Types *****************/
declare type QueryGetFileById = Query<FileByIdRequest>;
declare type QueryGetFileSignedUrlById = Query<FileSignedUrlRequest>;
/***************** Implementation of Query function Types *****************/
/**
 * Get File detail by File ID
 *
 * @param ApiConfig
 * @param FileByIdRequest
 */
export declare const queryFileById: QueryGetFileById;
/**
 * Get Private File Signed URL by File ID
 *
 * @param ApiConfig
 * @param FileByIdRequest
 */
export declare const queryGetFileSignedUrlById: QueryGetFileSignedUrlById;
export {};
