export const handleResponse = (response: any) => {
  if (response.status > 300) {
    return {
      message: response.message,
      status: response.status,
      ...(response.error && { error: response.error }),
      ...(response.details && { details: response.details }),
    };
  }

  if (!response.status) {
    return {
      status: 200,
      data: response
    };
  }
};
