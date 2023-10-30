import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class NotImplemented
 * @description Error class for 501 HTTP status code. This error should be thrown when the server either does not recognize the request method, or it lacks the ability to fulfill the request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501} for more information about the 501 HTTP status code.
 */
class NotImplemented extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server either does not recognize the request method, or it lacks the ability to fulfill the request", ...restConfig } = config || {};
        super(501, { name: "NotImplemented", msg, ...restConfig });
    }
}

export default NotImplemented;