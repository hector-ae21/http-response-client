import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class FailedDependency
 * @description Error class for 424 HTTP status code. This error should be thrown when the request failed due to failure of a previous request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424} for more information about the 424 HTTP status code.
 */
class FailedDependency extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request failed due to failure of a previous request", ...restConfig } = config || {};
        super(424, { name: "FailedDependency", msg, ...restConfig })
    }
}

export default FailedDependency;