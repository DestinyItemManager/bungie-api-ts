export type HttpQueryParams = Record<string, string>;
export interface HttpClientConfig {
    method: 'GET' | 'POST';
    url: string;
    /** Query string params */
    params?: HttpQueryParams;
    /** Request body */
    body?: any;
}
/**
 * A generic, minimal type for providing an HTTP client function.
 * This gets the necessary config provided as an argument, and then
 * should produce a promise for the parsed JSON as a result. The API
 * helper functions will use this to return the right type.
 */
export type HttpClient<Return> = (config: HttpClientConfig) => Promise<Return>;
export declare function get<Return>(http: HttpClient<Return>, url: string, params?: HttpQueryParams): Promise<Return>;
export declare function post<Return>(http: HttpClient<Return>, url: string, body?: any): Promise<Return>;
