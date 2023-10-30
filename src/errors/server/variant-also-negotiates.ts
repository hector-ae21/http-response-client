import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class VariantAlsoNegotiates
 * @description Error class for 506 HTTP status code. This error should be thrown when the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506} for more information about the 506 HTTP status code.
 */
class VariantAlsoNegotiates extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process", ...restConfig } = config || {};
        super(506, { name: "VariantAlsoNegotiates", msg, ...restConfig });
    }
}

export default VariantAlsoNegotiates;