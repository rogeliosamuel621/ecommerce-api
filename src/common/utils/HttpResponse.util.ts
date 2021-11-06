export class HttpResponse<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}
