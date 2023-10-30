import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class BadGateway
 * @description Error class for 502 HTTP status code. This error should be thrown when the server received an invalid response from the upstream server.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502} for more information about the 502 HTTP status code.
 */
class BadGateway extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server received an invalid response from the upstream server", ...restConfig } = config || {};
        super(502, { name: "BadGateway", msg, ...restConfig });
    }
}

export default BadGateway;