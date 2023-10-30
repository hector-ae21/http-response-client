import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class NotModified
 * @description Error class for 304 HTTP status code. This error should be thrown when the client's cached copy is up to date.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304} for more information about the 304 HTTP status code.
 */
class NotModified extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The client's cached copy is up to date", ...restConfig } = config || {};
        super(304, { name: "NotModified", msg, ...restConfig });
    }
}

export default NotModified;