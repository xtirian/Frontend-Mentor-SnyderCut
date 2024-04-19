class HandleResponse {
  handleResponse(response: any) {
    if (this.isSuccess(response)) {
      return this.handleSuccess(response);
    } else {
      return this.handleError(response);
    }
  }

  private isSuccess(response: any) {
    return response.status >= 200 && response.status < 300;
  }

  private handleSuccess(response: any) {
    return response.data;
  }

  private handleError(response: any) {
    const errorData = {
      message: response.statusText,
      status: response.status,
      data: response.data,
    };
    throw new Error(JSON.stringify(errorData));
  }
}
