import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class Conflict
 * @description Error class for 409 HTTP status code. This error should be thrown when the request conflicts with the current state of the server.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409} for more information about the 409 HTTP status code.
 */
class Conflict extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request could not be completed due to a conflict with the current state of the target resource", ...restConfig } = config || {};
        super(409, { name: "Conflict", msg, ...restConfig })
    }
}

export default Conflict;
