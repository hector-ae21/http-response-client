import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class RequestedRangeNotSatisfiable
 * @description Error class for 416 HTTP status code. This error should be thrown when the client has asked for a portion of the file, but the server cannot supply that portion.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416} for more information about the 416 HTTP status code.
 */
class RequestedRangeNotSatisfiable extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The client has asked for a portion of the file, but the server cannot supply that portion", ...restConfig } = config || {};
        super(416, { name: "RequestedRangeNotSatisfiable", msg, ...restConfig });
    }
}

export default RequestedRangeNotSatisfiable;