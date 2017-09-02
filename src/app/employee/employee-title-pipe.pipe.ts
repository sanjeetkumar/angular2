import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitlePipe'
})
export class EmployeeTitlePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
