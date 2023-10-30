import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class PaymentRequired
 * @description Error class for 402 HTTP status code. This error should be thrown when payment is required to access the requested resource.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402} for more information about the 402 HTTP status code.
 */
class PaymentRequired extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "Payment is required to access the requested resource", ...restConfig } = config || {};
        super(402, { name: "PaymentRequired", msg, ...restConfig });
    }
}

export default PaymentRequired;