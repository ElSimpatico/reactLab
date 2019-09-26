/** Thirds-party imports */
import { AxiosRequestConfig } from 'axios';

/** Local imports */
import ApiCore from './core';
import { buildUrl } from './utils';

export function get(
    endpoint: string,
    pathsVariable?: any,
    queryParams?: any
): Promise<any> {
    let url = endpoint;
    let axiosConfig: AxiosRequestConfig = {};

    if (pathsVariable) {
        url = buildUrl(endpoint, pathsVariable);
    }

    if (queryParams) {
        axiosConfig.params = { ...queryParams };
    }

    return ApiCore.get(url, axiosConfig);
}
