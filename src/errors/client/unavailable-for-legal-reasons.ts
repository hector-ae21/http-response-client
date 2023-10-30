import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class UnavailableForLegalReasons
 * @description Error class for 451 HTTP status code. This error should be thrown when the server is denying access to the resource as a consequence of a legal demand.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451} for more information about the 451 HTTP status code.
 */
class UnavailableForLegalReasons extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server is denying access to the resource as a consequence of a legal demand", ...restConfig } = config || {};
        super(451, { name: "UnavailableForLegalReasons", msg, ...restConfig });
    }
}

export default UnavailableForLegalReasons;