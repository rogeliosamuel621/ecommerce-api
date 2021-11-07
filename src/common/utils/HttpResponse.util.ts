import { ApiProperty } from '@nestjs/swagger';

export class HttpResponse<T> {
  @ApiProperty()
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}
