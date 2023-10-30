import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class UpgradeRequired
 * @description Error class for 426 HTTP status code. This error should be thrown when the client should switch to a different protocol.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426} for more information about the 426 HTTP status code.
 */
class UpgradeRequired extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The client should switch to a different protocol", ...restConfig } = config || {};
        super(426, { name: "Upgrade Required", msg, ...restConfig });
    }
}

export default UpgradeRequired;