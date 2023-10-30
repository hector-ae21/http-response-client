import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class UnsupportedMediaType
 * @description Error class for 415 HTTP status code. This error should be thrown when the server refuses to accept the request because the payload format is in an unsupported format.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415} for more information about the 415 HTTP status code.
 */
class UnsupportedMediaType extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server refuses to accept the request because the payload format is in an unsupported format", ...restConfig } = config || {};
        super(415, { name: "UnsupportedMediaType", msg, ...restConfig })
    }
}

export default UnsupportedMediaType;