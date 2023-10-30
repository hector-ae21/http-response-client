import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class NotExtended
 * @description Error class for 510 HTTP status code. This error should be thrown when the client needs to authenticate to gain network access.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510} for more information about the 510 HTTP status code.
 */
class NotExtended extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "Further extensions to the request are required for the server to fulfill it", ...restConfig } = config || {};
        super(510, { name: "NotExtended", msg, ...restConfig });
    }
}

export default NotExtended;