/**
 * @description namespace for http errors in the application
 * @namespace HttpErrorConfig
 */
namespace HttpErrorConfig {

    /**
     * @type Base
     * @description type for the configuration object.
     * @property {string} name Error name
     * @property {string} msg Error message
     */
    private type Base = {
        name: string,
        msg: string,
    };

    /**
     * @type Config
     * @description is the type of the configuration object that is passed to the HttpError constructor.
     */
    type Default = Base;
}

export = HttpErrorConfig;