import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class NetworkAuthenticationRequired
 * @description Error class for 511 HTTP status code. This error should be thrown when the client needs to authenticate to gain network access.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511} for more information about the 511 HTTP status code.
 */
class NetworkAuthenticationRequired extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The client needs to authenticate to gain network access", ...restConfig } = config || {};
        super(511, { name: "NetworkAuthenticationRequired", msg, ...restConfig });
    }
}

export default NetworkAuthenticationRequired;