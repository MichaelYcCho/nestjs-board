import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = ['PUBLIC', 'PRIVATE'];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new Error(`${value} is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    // indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
    const idx = this.StatusOptions.indexOf(status);
    return idx !== -1;
  }
}
