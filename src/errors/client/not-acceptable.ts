import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class NotAcceptable
 * @description Error class for 406 HTTP status code. This error should be thrown when the requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406} for more information about the 406 HTTP status code.
 */
class NotAcceptable extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request", ...restConfig } = config || {};
        super(406, { name: "NotAcceptable", msg, ...restConfig });
    }
}

export default NotAcceptable;