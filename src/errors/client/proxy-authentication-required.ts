import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class ProxyAuthenticationRequired
 * @description Error class for 407 HTTP status code. This error should be thrown when the client must first authenticate itself with the proxy.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407} for more information about the 407 HTTP status code.
 */
class ProxyAuthenticationRequired extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The client must first authenticate itself with the proxy", ...restConfig } = config || {};
        super(407, { name: "ProxyAuthenticationRequired", msg, ...restConfig });
    }
}

export default ProxyAuthenticationRequired;