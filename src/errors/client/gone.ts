import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class Gone
 * @description Error class for 410 HTTP status code. This error should be thrown when the requested resource is no longer available at the server and no forwarding address is known.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410} for more information about the 410 HTTP status code.
 */
class Gone extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The requested resource is no longer available at the server and no forwarding address is known", ...restConfig } = config || {};
        super(410, { name: "Gone", msg, ...restConfig })
    }
}

export default Gone;