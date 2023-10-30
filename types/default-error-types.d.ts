/**
 * @description namespace for http errors in the application
 * @namespace HttpErrorConfig
 */
namespace HttpErrorConfig {

    /**
     * @type Base
     * @description configuration object.
     * @property {string} name Error name
     * @property {string} msg Error message
     */
    private type Base = {
        name: string,
        msg: string,
    };

    /**
     * @type Config
     * @description configuration object that is passed to the HttpError constructor.
     */
    private type Default = Base;

    /**
     * @type KnowError
     * @description configuration object for known errors.
     */
    private type KnowError = Omit<Default, "name">;
}

export = HttpErrorConfig;