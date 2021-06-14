export type RequestContext = {
  secrets: any;
  params: any;
  body: any;
  accountId: number;
  headers: {
    method: 'GET' | 'POST';
  };
  contact?: {
    isLoggedIn: boolean;
    vid: string;
  };
};

interface Response<T> {
  statusCode?: number;
  body?: T;
  header?: {
    [k: string]: string;
  };
}
export type SendResponse = <T>(arg: Response<T>) => void;
