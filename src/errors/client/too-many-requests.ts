import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class TooManyRequests
 * @description Error class for 429 HTTP status code. This error should be thrown when the client has sent too many requests in a given amount of time.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429} for more information about the 429 HTTP status code.
 */
class TooManyRequests extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The client has sent too many requests in a given amount of time", ...restConfig } = config || {};
        super(429, { name: "Too Many Requests", msg, ...restConfig });
    }
}

export default TooManyRequests;