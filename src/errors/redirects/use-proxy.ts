import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class UseProxy
 * @description Error class for 305 HTTP status code. This error should be thrown when the request should use the proxy.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305} for more information about the 305 HTTP status code.
 */
class UseProxy extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request should use the proxy", ...restConfig } = config || {};
        super(305, { name: "UseProxy", msg, ...restConfig });
    }
}

export default UseProxy;