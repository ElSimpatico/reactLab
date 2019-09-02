/** Thirds-party imports */
import { AxiosRequestConfig } from 'axios';

/** Local imports */
import ApiCore from './core';

export function get(url: string, queryParams?: any): Promise<any> {
    let axiosConfig: AxiosRequestConfig = {};
    if (queryParams) {
        axiosConfig.params = { ...queryParams };
    }

    return ApiCore.get(url, axiosConfig);
}
