import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class UnprocessableEntity
 * @description Error class for 422 HTTP status code. This error should be thrown when the request is well-formed but contains semantic errors.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422} for more information about the 422 HTTP status code.
 */
class UnprocessableEntity extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request is well-formed but contains semantic errors", ...restConfig } = config || {};
        super(422, { name: "UnprocessableEntity", msg, ...restConfig })
    }
}

export default UnprocessableEntity;