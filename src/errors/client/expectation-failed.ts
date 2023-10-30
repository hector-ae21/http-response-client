import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class ExpectationFailed
 * @description Error class for 417 HTTP status code. This error should be thrown when the server cannot meet the requirements of the Expect request-header field.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417} for more information about the 417 HTTP status code.
 */
class ExpectationFailed extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server cannot meet the requirements of the Expect request-header field", ...restConfig } = config || {};
        super(417, { name: "ExpectationFailed", msg, ...restConfig });
    }
}

export default ExpectationFailed;