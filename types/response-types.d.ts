/**
 * @description namespace for http responses in the application
 * @namespace HttpResponse
 */
namespace HttpResponse {
    
    /**
     * @type Error
     * @description type for the error response object.
     * @property {string} name Error name
     * @property {string} message Error message
     */
    private type Error = {
        name: string,
        message: string,
    };

    /**
     * @type Response
     * @description is the type of the response object that is returned by the error handler middleware.
     * @property {number} status HTTP status code
     * @property {ErrorResponse} res Error response object
     */
    export type Response = {
        status: number,
        res: Error
    }
}

export = HttpResponse;