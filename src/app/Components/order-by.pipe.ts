import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(array: Array<any>, orderField: string, orderType: boolean): Array<string> {
    array.sort((a: any, b: any) => {
      const a1 = a[orderField];
      const b1 = b[orderField];
      if (a1 === undefined && b1 === undefined) { return 0; }
      if (a1 === undefined && b1 !== undefined) { return orderType ? 1 : -1; }
      if (a1 !== undefined && b1 === undefined) { return orderType ? -1 : 1; }
      if (a1 === b1) { return 0; }
      return orderType ?
        (a1.toString().toLowerCase() > b1.toString().toLowerCase() ? -1 : 1) :
        (b1.toString().toLowerCase() > a1.toString().toLowerCase() ? -1 : 1);
    });
    return array;
  }
  // }

}
