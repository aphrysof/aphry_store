import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHtml',
  standalone: true
})
export class AphrystorePipePipe implements PipeTransform {

  transform(value: string): any {
    return value?.replace(/<.*?>/g, ''); // replace tags
}

}
