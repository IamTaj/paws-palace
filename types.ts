import { AxiosRequestConfig } from "axios"

export enum ApiMethod {
  get = "get",
  post = "post",
  put = "put",
  delete = "delete",
}

export type ApiHandler = {
  createRequest: (
    url: string,
    payload?: any,
    user?: any,
    body?: any,
    withCredentials?: boolean,
    timeout?: number
  ) => AxiosRequestConfig
  mapResponse: (title: string, response: any) => { [key: string]: any }
  apiCall?: any
}
