import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class Found
 * @description Error class for 302 HTTP status code. This error should be thrown when the resource requested has been temporarily moved to the URL given by the Location header.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302} for more information about the 302 HTTP status code.
 */
class Found extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The resource requested has been temporarily moved to the URL given by the Location header", ...restConfig } = config || {};
        super(302, { name: "Found", msg, ...restConfig });
    }
}

export default Found;