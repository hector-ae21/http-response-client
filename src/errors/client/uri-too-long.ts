import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class UriTooLong
 * @description Error class for 414 HTTP status code. This error should be thrown when the URI provided was too long for the server to process.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414} for more information about the 414 HTTP status code.
 */
class UriTooLong extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The URI provided was too long for the server to process", ...restConfig } = config || {};
        super(414, { name: "UriTooLong", msg, ...restConfig })
    }
}

export default UriTooLong;