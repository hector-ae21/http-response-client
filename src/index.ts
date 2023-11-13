import * as client from "./errors/client";
import * as redirects from "./errors/redirects";
import * as server from "./errors/server";
import { isHttpError, createError } from "./errors";
import ErrorResponseMiddleware from "./middlewares/error-response-middleware";

export default {
    errors: {
        ...client,
        ...redirects,
        ...server,
    },
    isHttpError,
    createError,
    middlewares: {
        errorCatcher: ErrorResponseMiddleware.errorCatcher,
    }
};