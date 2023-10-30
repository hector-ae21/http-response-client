import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class PayloadTooLarge
 * @description Error class for 413 HTTP status code. This error should be thrown when the request is larger than the server is willing or able to process.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413} for more information about the 413 HTTP status code.
 */
class PayloadTooLarge extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request is larger than the server is willing or able to process", ...restConfig } = config || {};
        super(413, { name: "PayloadTooLarge", msg, ...restConfig });
    }
}

export default PayloadTooLarge;