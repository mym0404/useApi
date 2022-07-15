import request, { ApiResult, RequestOptions, RestMethod } from './internal/ApiClient';

type RestAdapter = {
  [P in RestMethod]: <ResponseData>(path: string, options?: RequestOptions<ResponseData>) => ApiResult<ResponseData>;
};

const restClient: RestAdapter = {
  GET: <ResponseData = any>(path: string, options?: RequestOptions<ResponseData>) =>
    request<ResponseData>('GET', path, options),
  POST: <ResponseData = any>(path: string, options?: RequestOptions<ResponseData>) =>
    request<ResponseData>('POST', path, options),
  PUT: <ResponseData = any>(path: string, options?: RequestOptions<ResponseData>) =>
    request<ResponseData>('PUT', path, options),
  DELETE: <ResponseData = any>(path: string, options?: RequestOptions<ResponseData>) =>
    request<ResponseData>('DELETE', path, options),
  PATCH: <ResponseData = any>(path: string, options?: RequestOptions<ResponseData>) =>
    request<ResponseData>('PATCH', path, options),
};

export const { GET, POST, PUT, DELETE, PATCH } = restClient;
export default restClient;
