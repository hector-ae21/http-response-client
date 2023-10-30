import * as client from "./errors/client";
import * as redirects from "./errors/redirects";
import * as server from "./errors/server";
import { isHttpError, createError } from "./errors";

export default {
    httpErrors: {
        ...client,
        ...redirects,
        ...server,
    },
    isHttpError,
    createError
};