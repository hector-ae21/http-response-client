import { Config } from "../types/default-error-types";
import HttpResponse from "../types/response-types";

/**
 * @class DefaultError
 * @description Default error class
 */
class DefaultError extends Error {
    readonly status: number;
    private config: Config;

    /**
     * @constructor
     * @param {number} status HTTP status code
     * @param {Config} config Configuration object
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status} for more information about HTTP status codes.
     */
    constructor(status: number = 500,
        config?: Partial<Config>) {
        const { name = "DefaultError", msg = "An unexpected error occurred", ...restConfig } = config || {};
        super(msg);
        this.status = status;
        this.config = this.createConfig(name, msg, restConfig);
    }

    /**
     * @method createConfig
     * @description Creates the configuration object for the error.
     * @param {string} name The name of the error.
     * @param {string} msg The message of the error.
     * @param {object} restConfig The rest of the configuration object.
     * @returns {Config} Returns the configuration object for the error.
     */
    private createConfig(name: string, msg: string, restConfig: object): Config {
        return { name, msg, ...restConfig };
    }

    /**
     * @method get information
     * @description Returns an object containing the error name and message.
     * @returns {HttpResponse.Error} Returns an object containing the error name and message.
     */
    public get information(): HttpResponse.Error {
        return {
            name: this.config.name,
            message: this.config.msg,
        };
    }

    /**
     * @method toObject
     * @description Returns an object containing the error status, name and message.
     * @returns {Response} Returns an object containing the error status, name and message.
     */
    public toObject(): HttpResponse.Default {
        return {
            status: this.status,
            res: {
                name: this.config.name,
                message: this.config.msg,
            },
        };
    }

}
