import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class MisdirectedRequest
 * @description Error class for 421 HTTP status code. This error should be thrown when the server is unable to produce a response due to a misdirected request.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421} for more information about the 421 HTTP status code.
 */
class MisdirectedRequest extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server is unable to produce a response due to a misdirected request", ...restConfig } = config || {};
        super(421, { name: "MisdirectedRequest", msg, ...restConfig });
    }
}

export default MisdirectedRequest;