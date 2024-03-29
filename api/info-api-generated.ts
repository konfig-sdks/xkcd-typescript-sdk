/* tslint:disable */
/* eslint-disable */
/*
XKCD

Webcomic of romance, sarcasm, math, and language.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Comic } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * InfoApi - axios parameter creator
 * @export
 */
export const InfoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch comics and metadata  by comic id. 
         * @param {number} comicId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (comicId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'comicId' is not null or undefined
            assertParamExists('getById', 'comicId', comicId)
            const localVarPath = `/{comicId}/info.0.json`
                .replace(`{${"comicId"}}`, encodeURIComponent(String(comicId !== undefined ? comicId : `-comicId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/{comicId}/info.0.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch current comic and metadata. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getComicMetadata: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/info.0.json`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/info.0.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InfoApi - functional programming interface
 * @export
 */
export const InfoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InfoApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetch comics and metadata  by comic id. 
         * @param {InfoApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: InfoApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Comic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.comicId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch current comic and metadata. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getComicMetadata(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Comic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getComicMetadata(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InfoApi - factory interface
 * @export
 */
export const InfoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InfoApiFp(configuration)
    return {
        /**
         * Fetch comics and metadata  by comic id. 
         * @param {InfoApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: InfoApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Comic> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch current comic and metadata. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getComicMetadata(options?: AxiosRequestConfig): AxiosPromise<Comic> {
            return localVarFp.getComicMetadata(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getById operation in InfoApi.
 * @export
 * @interface InfoApiGetByIdRequest
 */
export type InfoApiGetByIdRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof InfoApiGetById
    */
    readonly comicId: number
    
}

/**
 * InfoApiGenerated - object-oriented interface
 * @export
 * @class InfoApiGenerated
 * @extends {BaseAPI}
 */
export class InfoApiGenerated extends BaseAPI {
    /**
     * Fetch comics and metadata  by comic id. 
     * @param {InfoApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InfoApiGenerated
     */
    public getById(requestParameters: InfoApiGetByIdRequest, options?: AxiosRequestConfig) {
        return InfoApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch current comic and metadata. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InfoApiGenerated
     */
    public getComicMetadata(options?: AxiosRequestConfig) {
        return InfoApiFp(this.configuration).getComicMetadata(options).then((request) => request(this.axios, this.basePath));
    }
}
