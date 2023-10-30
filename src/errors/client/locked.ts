import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class Locked
 * @description Error class for 423 HTTP status code. This error should be thrown when the requested resource is locked.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423} for more information about the 423 HTTP status code.
 */
class Locked extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The requested resource is locked", ...restConfig } = config || {};
        super(423, { name: "Locked", msg, ...restConfig });
    }
}

export default Locked;