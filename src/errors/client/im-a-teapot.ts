import HttpErrorConfig from "../../../types/default-error-types";
import DefaultError from "../default-error";

/**
 * @class IAmATeapot
 * @description Error class for 418 HTTP status code. This error should be thrown when the server refuses the attempt to brew coffee with a teapot.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418} for more information about the 418 HTTP status code.
 */
class ImATeapot extends DefaultError {
    /**
     * @constructor
     * @param {Partial<HttpErrorConfig.KnowError>} config Optional configuration object.
     */
    constructor(config?: Partial<HttpErrorConfig.KnowError>) {
        const { msg = "The server refuses the attempt to brew coffee with a teapot", ...restConfig } = config || {};
        super(418, { name: "IAmATeapot", msg, ...restConfig })
    }
}

export default ImATeapot;