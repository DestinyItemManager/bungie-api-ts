export interface HttpClientConfig {
    method: 'GET' | 'POST';
    url: string;
    /** Query string params */
    params?: any;
    /** Request body */
    body?: any;
}
/**
 * A generic, minimal type for providing an HTTP client function.
 * This gets the necessary config provided as an argument, and then
 * should produce a promise for the parsed JSON as a result. The API
 * helper functions will use this to return the right type.
 */
export declare type HttpClient = (config: HttpClientConfig) => Promise<any>;
