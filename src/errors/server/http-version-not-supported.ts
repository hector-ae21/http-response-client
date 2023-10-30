import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class RequestTimeout
 * @description Error class for 408 HTTP status code. This error should be thrown when the server did not receive a complete request message within the time that it was prepared to wait.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408} for more information about the 408 HTTP status code.
 */
class RequestTimeout extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server did not receive a complete request message within the time that it was prepared to wait", ...restConfig } = config || {};
        super(408, { name: "RequestTimeout", msg, ...restConfig });
    }
}

export default RequestTimeout;