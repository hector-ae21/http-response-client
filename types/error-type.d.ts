/**
 * @type HttpError
 * @description Object containing the error status, name and message.
 */
export type HttpError = {
    status: number,
    information: {
      name: string,
      message: string
    }
  }
  