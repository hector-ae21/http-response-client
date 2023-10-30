import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class PreconditionFailed
 * @description Error class for 412 HTTP status code. This error should be thrown when a precondition given in the request evaluated to false.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412} for more information about the 412 HTTP status code.
 */
class PreconditionFailed extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "A precondition given in the request evaluated to false", ...restConfig } = config || {};
        super(412, { name: "PreconditionFailed", msg, ...restConfig })
    }
}

export default PreconditionFailed;