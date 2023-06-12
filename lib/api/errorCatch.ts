export const errorCatch = (error: any): string =>
  error.response && error.response.message
    ? typeof error.response.data.error.message === "string"
      ? error.response.data.error.message
      : typeof error.response.data.message === "object"
      ? error.response.data.message[0]
      : error.response.data.message
    : error.message;
