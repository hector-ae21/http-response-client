import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class MultipleChoice
 * @description Error class for 300 HTTP status code. This error should be thrown when the request has more than one possible response.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300} for more information about the 300 HTTP status code.
 */
class MultipleChoice extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The request has more than one possible response", ...restConfig } = config || {};
        super(300, { name: "MultipleChoice", msg, ...restConfig });
    }
}

export default MultipleChoice;